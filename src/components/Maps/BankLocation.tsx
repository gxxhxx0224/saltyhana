import React, { useState, useEffect, useRef } from "react";
import { MapMarker } from "react-kakao-maps-sdk";
import LocationMarker from "../../images/modal_location.png";
import CustomOverlay from "./CustomOverlay";
import { MapButton } from "./Overlay_styles";
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
  searchQuery: string; // 부모로부터 받은 검색어
  onSearchResults: (banks: Bank[]) => void; // 검색 결과 전달
  setSearchQuery: (query: string) => void; // 검색어 초기화 함수
}

const BankLocation: React.FC<BankLocationProps> = ({
  onSelectBank,
  setNearbyBanks,
  selectedBank,
  setSelectedBank,
  searchQuery,
  onSearchResults,
  setSearchQuery,
}) => {
  const [currentPosition, setCurrentPosition] = useState({
    lat: 37.5663,
    lng: 126.9819,
  });

  const [nearbyBanks, setNearbyBanksState] = useState<Bank[]>([]); // 현재 위치 주변 리스트
  const [searchBanks, setSearchBanks] = useState<Bank[]>([]); // 검색한 은행 리스트
  const [selectedMarker, setSelectedMarker] = useState<string | null>(null); // 클릭된 마커 상태
  const [overlayVisible, setOverlayVisible] = useState(false); // 오버레이 상태
  const [isNearbySearchActive, setIsNearbySearchActive] = useState(true); // 지도 검색 기능 활성화 상태
  const [loading, setLoading] = useState(true);

  const kakaoMapRef = useRef<{
    setCenter: (lat: number, lng: number) => void;
    getInitialPosition: () => { lat: number; lng: number };
  } | null>(null);

  useEffect(() => {
    if (selectedBank) {
      // 선택된 은행으로 지도 중심 이동
      focusOnBank(selectedBank);
      setOverlayVisible(true); // 오버레이 보이기
      setSelectedMarker(selectedBank.name);
    } else {
      setSelectedBank(null);
      setOverlayVisible(false);
    }
  }, [selectedBank]);

  useEffect(() => {
    // 검색으로 찾기
    if (searchQuery) {
      setSelectedBank(null);
      setIsNearbySearchActive(false);
      searchQueryBanks(searchQuery, currentPosition.lat, currentPosition.lng);
    } else {
      setSearchBanks([]);
      onSearchResults([]);
      if (isNearbySearchActive) {
        searchNearbyBanks(currentPosition.lat, currentPosition.lng);
      }
    }
  }, [searchQuery, currentPosition]);

  const searchNearbyBanks = (lat: number, lng: number) => {
    const places = new window.kakao.maps.services.Places();
    const position = new window.kakao.maps.LatLng(lat, lng);

    places.keywordSearch(
      "하나은행",
      (data, status) => {
        if (status === window.kakao.maps.services.Status.OK) {
          const results: Bank[] = data
            .filter((place) => place.place_name.endsWith("지점"))
            .map((place) => ({
              name: place.place_name,
              lat: parseFloat(place.y),
              lng: parseFloat(place.x),
              distance: getDistance(
                lat,
                lng,
                parseFloat(place.y),
                parseFloat(place.x),
              ),
              address: place.address_name || "",
              number: place.phone,
            }));

          const nearby = results.filter(
            (bank) => bank.distance <= MAX_DISTANCE_KM,
          );

          if (nearby.length > 0) {
            setNearbyBanks(nearby);
            setNearbyBanksState(nearby);
            onSearchResults(nearby);
          } else {
            setNearbyBanks([]); // 주변 검색 결과 초기화
            setNearbyBanksState([]); // 상태 초기화
            onSearchResults([]); // 부모에게 빈 리스트 전달
            console.log("주변 은행 검색 결과가 없습니다.");
          }
        } else {
          console.error("주변 검색 실패:", status);
          setNearbyBanks([]);
          setNearbyBanksState([]);
          onSearchResults([]);
        }
        setLoading(false);
      },
      { location: position, radius: SEARCH_RADIUS_M },
    );
  };

  const searchQueryBanks = (query: string, lat: number, lng: number) => {
    const places = new window.kakao.maps.services.Places();
    places.keywordSearch(`하나은행 ${query}`, (data, status) => {
      console.log(data); // 검색 결과 출력
      console.log(status); // 상태 출력
      if (status === window.kakao.maps.services.Status.OK) {
        const results: Bank[] = data
          .filter(
            (place) =>
              place.place_name.includes(query) &&
              place.place_name.endsWith("지점"),
          )
          .map((place) => ({
            name: place.place_name,
            lat: parseFloat(place.y),
            lng: parseFloat(place.x),
            distance: getDistance(
              lat,
              lng,
              parseFloat(place.y),
              parseFloat(place.x),
            ),
            address: place.address_name || "",
            number: place.phone,
          }));

        if (results.length > 0) {
          setSearchBanks(results); // 검색된 리스트 업데이트
          onSearchResults(results); // 부모로 결과 전달
        } else {
          // 부모로 빈 리스트 전달
          setSearchBanks([]); // 검색 결과 초기화
          onSearchResults([]);
          console.log("검색 결과가 없습니다.");
        }
      } else {
        console.error("검색 실패:", status);
        setSearchBanks([]);
        onSearchResults([]);
      }
    });
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
    if (isNearbySearchActive) {
      searchNearbyBanks(position.lat, position.lng);
    }
  };

  const handleNearbySearch = () => {
    setSearchBanks([]); // 검색된 리스트 초기화
    onSearchResults([]);
    setSelectedBank(null);
    setOverlayVisible(false);
    setIsNearbySearchActive(true); // 주변 검색 활성화
    setSearchQuery("");

    // 초기 위치로 검색
    if (kakaoMapRef.current) {
      const initialPosition = kakaoMapRef.current.getInitialPosition();
      if (initialPosition) {
        setCurrentPosition(initialPosition);
        kakaoMapRef.current.setCenter(initialPosition.lat, initialPosition.lng);
        searchNearbyBanks(initialPosition.lat, initialPosition.lng);
      }
    }
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
          [...(isNearbySearchActive ? nearbyBanks : []), ...searchBanks].map(
            (bank) => (
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
            ),
          )
        )}
        {overlayVisible && selectedBank && (
          <CustomOverlay
            bank={selectedBank}
            position={{ lat: selectedBank.lat, lng: selectedBank.lng }}
            onClose={() => {
              setSelectedBank(null);
              setSelectedMarker(null);
              setOverlayVisible(false);
            }}
          />
        )}
      </KakaoMap>
      <MapButton onClick={handleNearbySearch}> 내 주변 검색 모드</MapButton>
    </>
  );
};

export default BankLocation;
