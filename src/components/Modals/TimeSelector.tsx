import React, { useEffect, useState } from "react";
import {
  TimeButton,
  TimeButtonContainer,
  ScrollButton,
  TimeEntireContainer,
} from "./styles";
import icon_left from "../../images/modal_leftscroll.png";
import icon_right from "../../images/modal_rightscroll.png";

interface TimeSelectorProps {
  selectedTime: string | null;
  handleTimeSelect: (time: string) => void;
  startIndex: number;
  setStartIndex: (index: number) => void;
}

const TimeSelector: React.FC<TimeSelectorProps> = ({
  selectedTime,
  handleTimeSelect,
  startIndex,
  setStartIndex,
}) => {
  const [isDragging, setIsDragging] = useState(false);
  const [startMouseX, setStartMouseX] = useState(0);

  const generateTimeSlots = () => {
    const slots = [];
    const startTime = new Date();
    startTime.setHours(9);
    startTime.setMinutes(0);

    while (
      startTime.getHours() < 15 ||
      (startTime.getHours() === 15 && startTime.getMinutes() <= 30)
    ) {
      const hours = startTime.getHours();
      const minutes = String(startTime.getMinutes()).padStart(2, "0");
      const formattedTime = `${String(hours).padStart(2, "0")}:${minutes}`;
      slots.push({
        key: formattedTime,
        label: formattedTime,
      });
      startTime.setMinutes(startTime.getMinutes() + 30);
    }

    return slots;
  };

  const timeSlots = generateTimeSlots();
  const timeSlotsLength = timeSlots.length;

  // 시간 슬롯을 가져올 때 최대 4개까지 또는 남은 슬롯 수 만큼 가져오기
  const timeSlotsToDisplay = timeSlots.slice(startIndex, startIndex + 4);

  // 버튼으로 이동할 때 시간 버튼 표현
  const handleLeftClick = () => {
    if (startIndex > 0) {
      setStartIndex(Math.max(startIndex - 4, 0));
    }
  };

  const handleRightClick = () => {
    const remainingSlots = timeSlotsLength - startIndex;

    // 남은 슬롯 수에 따라 이동
    if (remainingSlots > 0) {
      const newStartIndex = Math.min(startIndex + 4, timeSlotsLength - 4);
      setStartIndex(newStartIndex);
    }
  };

  //드래그 이벤트
  const handleMouseDown = (event: React.MouseEvent) => {
    setIsDragging(true);
    setStartMouseX(event.clientX);
  };

  const handleMouseMove = (event: MouseEvent) => {
    if (!isDragging) return;
    const deltaX = event.clientX - startMouseX;

    // drag sensitivity
    if (Math.abs(deltaX) > 40) {
      const slotsToMove = Math.floor(deltaX / 40);
      const newIndex = Math.max(
        0,
        Math.min(startIndex - slotsToMove, timeSlotsLength - 4),
      );
      setStartIndex(newIndex);
      setStartMouseX(event.clientX); // Reset the start position
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    if (isDragging) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
    }
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging]);

  return (
    <TimeEntireContainer>
      <ScrollButton
        onClick={handleLeftClick}
        style={{ visibility: startIndex > 0 ? "visible" : "hidden" }}
      >
        <img src={icon_left} alt="Left Scroll" style={{ width: "13px" }} />
      </ScrollButton>
      <TimeButtonContainer onMouseDown={handleMouseDown}>
        {timeSlotsToDisplay.map((time) => (
          <TimeButton
            key={time.key}
            isSelected={selectedTime === time.key}
            onClick={() => {
              handleTimeSelect(time.key);
            }}
          >
            {time.label}
          </TimeButton>
        ))}
      </TimeButtonContainer>
      <ScrollButton
        onClick={handleRightClick}
        style={{
          visibility: startIndex < timeSlotsLength - 4 ? "visible" : "hidden",
        }}
      >
        <img src={icon_right} alt="Right Scroll" style={{ width: "13px" }} />
      </ScrollButton>
    </TimeEntireContainer>
  );
};

export default TimeSelector;
