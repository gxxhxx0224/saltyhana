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
  const [startIndex, setStartIndex] = useState(0); // 현재 시작 인덱스
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [selectedBank, setSelectedBank] = useState<Bank | null>(null);
  const [nearbyBanks, setNearbyBanks] = useState<Bank[]>([]);
  const [isReservationConfirmed, setIsReservationConfirmed] = useState(false); // 예약 완료 버튼 누르고 나오는 모달 상태

  // 기본 날짜 세팅
  const today = new Date();
  const [selectedYear, setSelectedYear] = useState(today.getFullYear());
  const [selectedMonth, setSelectedMonth] = useState(today.getMonth() + 1); // 월은 0부터 시작하므로 1을 더함
  const [selectedDay, setSelectedDay] = useState(today.getDate());

  const handleSelectBank = (bank: Bank) => {
    setSelectedBank(bank);
  };

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
            />
          </MapContainer>

          <UnderMapContainer>
            <LeftContainer>
              <Left2Container>
                <BankSearch />

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
                banks={nearbyBanks}
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
