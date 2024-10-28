import React, { useState } from "react";
import ModalsOk from "./ModalsOk";
import ModalsBackground from "./ModalsBackground";
import DateSelector from "./DateSelector";
import TimeSelector from "./TimeSelector";
import ButtonsSection from "./ButtonsSection";
import { Bank } from "../Maps/BankLocation";
import BankLocation from "../Maps/BankLocation";
import BankSearch from "./BankSearch";
import BankList from "./BankList";
import {
  MapContainer,
  LeftContainer,
  RightContainer,
  UnderMapContainer,
  DateContainer,
  Left2Container,
} from "./styles";

interface ModalsProps {
  onClose: () => void;
}

const Modals: React.FC<ModalsProps> = ({ onClose }) => {
  const [isOpen, setIsOpen] = useState(true);
  const [startIndex, setStartIndex] = useState(0);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [selectedBank, setSelectedBank] = useState<Bank | null>(null);
  const [nearbyBanks, setNearbyBanks] = useState<Bank[]>([]);
  const [searchBanks, setSearchBanks] = useState<Bank[]>([]);
  const [isReservationConfirmed, setIsReservationConfirmed] = useState(false);
  const [searchQuery, setSearchQuery] = useState(""); // 검색어 상태 추가

  // 기본 날짜 세팅
  const today = new Date();
  const [selectedYear, setSelectedYear] = useState(today.getFullYear());
  const [selectedMonth, setSelectedMonth] = useState(today.getMonth() + 1);
  const [selectedDay, setSelectedDay] = useState(today.getDate());

  const handleReserve = () => {
    if (!selectedBank) {
      alert("예약하려는 지점을 선택해주세요.");
      return;
    } else if (!selectedTime) {
      alert("예약 시간을 선택해주세요.");
      return;
    }
    setIsOpen(false);
    setIsReservationConfirmed(true);
  };

  const handleTimeSelect = (time: string) => {
    setSelectedTime(time);
    console.log("선택된 시간:", time);
  };

  return (
    <>
      {isOpen && (
        <ModalsBackground onClose={onClose}>
          <MapContainer>
            <BankLocation
              onSelectBank={setSelectedBank}
              setNearbyBanks={setNearbyBanks}
              selectedBank={selectedBank}
              setSelectedBank={setSelectedBank}
              searchQuery={searchQuery}
              onSearchResults={setSearchBanks}
              setSearchQuery={setSearchQuery} // 쿼리 업데이트 함수 전달
            />
          </MapContainer>
          <UnderMapContainer>
            <LeftContainer>
              <Left2Container>
                <BankSearch onSearch={setSearchQuery} />
                <DateContainer>
                  <DateSelector
                    selectedYear={selectedYear}
                    selectedMonth={selectedMonth}
                    selectedDay={selectedDay}
                    setSelectedYear={setSelectedYear}
                    setSelectedMonth={setSelectedMonth}
                    setSelectedDay={setSelectedDay}
                  />
                </DateContainer>
              </Left2Container>

              <TimeSelector
                selectedTime={selectedTime}
                handleTimeSelect={handleTimeSelect}
                startIndex={startIndex}
                setStartIndex={setStartIndex}
              />
            </LeftContainer>

            <RightContainer>
              <BankList
                banks={searchQuery ? searchBanks : nearbyBanks}
                onSelectBank={setSelectedBank}
                selectedBank={selectedBank}
              />
            </RightContainer>
          </UnderMapContainer>

          <ButtonsSection onClose={onClose} handleReserve={handleReserve} />
        </ModalsBackground>
      )}
      {isReservationConfirmed && (
        <ModalsOk
          onClose={() => {
            setIsReservationConfirmed(false);
            onClose();
          }}
          selectedBank={selectedBank ? selectedBank.name : null}
          selectedDate={`${selectedYear}-${selectedMonth}-${selectedDay}`}
          selectedTime={selectedTime}
        />
      )}
    </>
  );
};

export default Modals;
