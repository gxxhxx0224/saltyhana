import React, { useState, useEffect, useRef } from "react";
import { MapMarker } from "react-kakao-maps-sdk";
import LocationMarker from "../../images/modal_location.png";
import CustomOverlay from "./CustomOverlay";
import KakaoMap from "./KakaoMap";

export interface Bank {
  name: string; // 지점 이름
  lat: number; // 위도
  lng: number; // 경도
  distance: number; // 거리
  address: string;
  number: string; // 전화번호
}

const MAX_DISTANCE_KM = 10; // 최대 거리 (10km)
const SEARCH_RADIUS_M = 10000; // 검색 반경 (10,000m)

interface BankLocationProps {
  onSelectBank: (bank: Bank) => void; // 선택된 은행을 부모로 전달하는 함수
  setNearbyBanks: (banks: Bank[]) => void; // nearbyBanks 상태 설정 함수
  selectedBank: Bank | null;
  setSelectedBank: (bank: Bank | null) => void;
}

const BankLocation: React.FC<BankLocationProps> = ({
  onSelectBank,
  setNearbyBanks,
  selectedBank,
  setSelectedBank,
}) => {
  const [currentPosition, setCurrentPosition] = useState({
    lat: 37.5663,
    lng: 126.9819,
  });
  const [nearbyBanks, setNearbyBanksState] = useState<Bank[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [overlayVisible, setOverlayVisible] = useState(false); // 오버레이 상태
  const [selectedMarker, setSelectedMarker] = useState<string | null>(null); // 클릭된 마커 상태

  const kakaoMapRef = useRef<{
    setCenter: (lat: number, lng: number) => void;
  } | null>(null);

  useEffect(() => {
    if (selectedBank) {
      // 선택된 은행으로 지도 중심 이동
      focusOnBank(selectedBank);
      setOverlayVisible(true); // 오버레이 보이기
      setSelectedMarker(selectedBank.name);
    }
  }, [selectedBank]); // selectedBank가 변경될 때마다 실행

  // 근처 은행 검색
  useEffect(() => {
    searchNearbyBanks(currentPosition.lat, currentPosition.lng);
  }, [currentPosition]);

  const searchNearbyBanks = (lat: number, lng: number) => {
    const places = new window.kakao.maps.services.Places();
    const position = new window.kakao.maps.LatLng(lat, lng);

    setError(null);

    places.keywordSearch(
      "하나은행",
      (data, status) => {
        if (status === window.kakao.maps.services.Status.OK) {
          const results: Bank[] = data
            .filter((place) => place.place_name.endsWith("지점"))
            .map((place) => {
              const distance = getDistance(
                lat,
                lng,
                parseFloat(place.y),
                parseFloat(place.x),
              );
              return {
                name: place.place_name,
                lat: parseFloat(place.y),
                lng: parseFloat(place.x),
                distance,
                address: place.address_name || "",
                number: place.phone,
              };
            });

          const nearby = results.filter(
            (bank) => bank.distance <= MAX_DISTANCE_KM,
          );
          setNearbyBanks(nearby);
          setNearbyBanksState(nearby);
        } else {
          setError("검색 결과가 없습니다.");
        }
        setLoading(false);
      },
      { location: position, radius: SEARCH_RADIUS_M },
    );
  };

  const getDistance = (
    lat1: number,
    lng1: number,
    lat2: number,
    lng2: number,
  ) => {
    const R = 6371; // 지구의 반지름 (km)
    const dLat = ((lat2 - lat1) * Math.PI) / 180;
    const dLng = ((lng2 - lng1) * Math.PI) / 180;
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos((lat1 * Math.PI) / 180) *
        Math.cos((lat2 * Math.PI) / 180) *
        Math.sin(dLng / 2) *
        Math.sin(dLng / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c; // km
  };

  // 위치 업데이트
  const handleUpdatePosition = (position: { lat: number; lng: number }) => {
    setCurrentPosition(position);
    searchNearbyBanks(position.lat, position.lng);
  };

  // 은행 포커싱 함수
  const focusOnBank = (bank: Bank) => {
    if (kakaoMapRef.current) {
      kakaoMapRef.current.setCenter(bank.lat, bank.lng);
    }
  };

  //지도 마커 클릭시
  const handleMarkerClick = (bank: Bank) => {
    setSelectedBank(bank);
    onSelectBank(bank);
    setOverlayVisible(true);
    focusOnBank(bank);
    setSelectedMarker(bank.name);
  };

  // 지도 드래그 시작 시 오버레이 숨기기
  const handleMapDragStart = () => {
    setOverlayVisible(false);
    setSelectedMarker(null);
    setSelectedBank(null);
  };

  const handleMapDragEnd = (position: { lat: number; lng: number }) => {
    setCurrentPosition(position);
    searchNearbyBanks(position.lat, position.lng);
  };

  return (
    <>
      <KakaoMap
        ref={kakaoMapRef}
        onUpdatePosition={handleUpdatePosition}
        onMapDragStart={handleMapDragStart}
        onMapDragEnd={handleMapDragEnd}
      >
        {loading ? (
          <div>Loading...</div>
        ) : (
          nearbyBanks.map((bank) => (
            <MapMarker
              key={bank.name}
              position={{ lat: bank.lat, lng: bank.lng }}
              onClick={() => handleMarkerClick(bank)}
              image={{
                src: LocationMarker,
                size: {
                  width: selectedMarker === bank.name ? 45 : 31, // 클릭된 마커 커지게
                  height: selectedMarker === bank.name ? 55 : 38,
                },
              }}
            />
          ))
        )}
        {overlayVisible && selectedBank && (
          <CustomOverlay
            bank={selectedBank}
            position={{ lat: selectedBank.lat, lng: selectedBank.lng }}
            onClose={() => {
              setSelectedBank(null);
              setSelectedMarker(null);
            }}
          />
        )}
      </KakaoMap>
    </>
  );
};

export default BankLocation;
