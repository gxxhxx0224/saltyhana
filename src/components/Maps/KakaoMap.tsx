import React, {
  useEffect,
  useState,
  forwardRef,
  useImperativeHandle,
} from "react";
import { Map, MapMarker } from "react-kakao-maps-sdk";
import nowlocation from "../../images/modal_nowlocation.png";

interface KakaoMapProps {
  children: React.ReactNode;
  onUpdatePosition: (position: { lat: number; lng: number }) => void;
  onMapDragStart: () => void;
  onMapDragEnd: (position: { lat: number; lng: number }) => void;
}

interface KakaoMapRef {
  setCenter: (lat: number, lng: number) => void;
  getInitialPosition: () => { lat: number; lng: number };
}

const KakaoMap = forwardRef<KakaoMapRef, KakaoMapProps>(
  ({ children, onUpdatePosition, onMapDragStart, onMapDragEnd }, ref) => {
    // 기본 위치: 하나은행 본점
    const defaultPosition = { lat: 37.5663, lng: 126.9819 };
    const [initialPosition, setInitialPosition] = useState(defaultPosition);
    const [currentPosition, setCurrentPosition] = useState(defaultPosition);
    const [showUserMarker, setShowUserMarker] = useState(false); // 사용자 마커 표시 여부

    useEffect(() => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const { latitude, longitude } = position.coords;
            const newPosition = { lat: latitude, lng: longitude };

            console.log("현재 위치:", newPosition);
            console.log("마킹된 위치:", initialPosition);

            setInitialPosition(newPosition); // 초기 위치를 사용자의 현재 위치로 설정
            setCurrentPosition(newPosition); // 지도 중심도 현재 위치로 설정
            onUpdatePosition(newPosition); // 부모에게 위치 정보 전달
            setShowUserMarker(true); // 사용자 마커 표시
          },
          (error) => {
            switch (error.code) {
              case error.PERMISSION_DENIED:
                console.error("사용자가 위치 정보 제공을 거부했습니다.");
                onUpdatePosition(defaultPosition);
                break;
              case error.POSITION_UNAVAILABLE:
                console.error("위치 정보를 사용할 수 없습니다.");
                break;
              case error.TIMEOUT:
                console.error("위치 정보를 가져오는 시간이 초과되었습니다.");
                break;
              default:
                console.error("알 수 없는 오류가 발생했습니다.");
                break;
            }
            // 위치 정보를 가져오지 못할 경우 기본 위치로 설정
            setCurrentPosition(defaultPosition);
            onUpdatePosition(defaultPosition);
            setShowUserMarker(false); // 사용자 마커 표시하지 않음
          },
          { enableHighAccuracy: true, timeout: 5000, maximumAge: 0 },
        );
      } else {
        console.log("이 브라우저에서는 Geolocation을 지원하지 않습니다.");
        // Geolocation을 지원하지 않을 경우 기본 위치 설정
        setCurrentPosition(defaultPosition);
        onUpdatePosition(defaultPosition);
        setShowUserMarker(false); // 사용자 마커 표시하지 않음
      }
    }, []);

    useImperativeHandle(ref, () => ({
      setCenter: (lat: number, lng: number) => {
        setCurrentPosition({ lat, lng });
      },
      getInitialPosition: () => initialPosition,
    }));

    const handleDragEnd = (map: any) => {
      const center = map.getCenter();
      const newPosition = { lat: center.getLat(), lng: center.getLng() };
      setCurrentPosition(newPosition);
      onMapDragEnd(newPosition);
    };

    return (
      <Map
        center={{ lat: currentPosition.lat, lng: currentPosition.lng }}
        style={{ width: "100%", height: "100%" }}
        level={7}
        onDragStart={onMapDragStart}
        onDragEnd={handleDragEnd}
      >
        {showUserMarker && (
          <MapMarker
            position={{ lat: initialPosition.lat, lng: initialPosition.lng }}
            image={{
              src: nowlocation, // 사용자 정의 이미지 URL
              size: {
                width: 45,
                height: 65,
              },
            }}
          />
        )}
        {children} {/* Render children here */}
      </Map>
    );
  },
);

export default KakaoMap;
