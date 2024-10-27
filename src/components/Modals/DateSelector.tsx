import React from "react";
import {
  DateSelector as StyledDateSelector,
  DateContainer,
  DateSelectorContainer,
  DateSelectorText,
} from "./styles";

interface DateSelectorProps {
  selectedYear: number;
  selectedMonth: number;
  selectedDay: number;
  setSelectedYear: (year: number) => void;
  setSelectedMonth: (month: number) => void;
  setSelectedDay: (day: number) => void;
}

const DateSelector: React.FC<DateSelectorProps> = ({
  selectedYear,
  selectedMonth,
  selectedDay,
  setSelectedYear,
  setSelectedMonth,
  setSelectedDay,
}) => {
  const years = [2024, 2025].map((year) => (
    <option key={year} value={year}>
      {year}
    </option>
  ));

  const generateMonths = () => {
    return Array.from({ length: 12 }, (_, i) => (
      <option key={i + 1} value={i + 1}>
        {i + 1}
      </option>
    ));
  };

  const generateDays = () => {
    return Array.from({ length: 31 }, (_, i) => (
      <option key={i + 1} value={i + 1}>
        {i + 1}
      </option>
    ));
  };

  return (
    <DateContainer>
      <DateSelectorText>예약할 날짜와 시간을 선택해주세요.</DateSelectorText>
      <DateSelectorContainer>
        <StyledDateSelector
          value={selectedYear}
          onChange={(e) => setSelectedYear(Number(e.target.value))}
        >
          {years}
        </StyledDateSelector>
        <span style={{ marginLeft: "3px", marginRight: "10px" }}>년</span>
        <StyledDateSelector
          value={selectedMonth}
          onChange={(e) => setSelectedMonth(Number(e.target.value))}
        >
          {generateMonths()}
        </StyledDateSelector>
        <span style={{ marginLeft: "3px", marginRight: "10px" }}>월</span>
        <StyledDateSelector
          value={selectedDay}
          onChange={(e) => setSelectedDay(Number(e.target.value))}
        >
          {generateDays()}
        </StyledDateSelector>
        <span style={{ marginLeft: "3px" }}>일</span>
      </DateSelectorContainer>
    </DateContainer>
  );
};

export default DateSelector;
