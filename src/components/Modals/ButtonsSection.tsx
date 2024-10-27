import React from "react";
import { CloseButton, ReserveButton, ButtonContainer } from "./styles";

interface ButtonsSectionProps {
  onClose: () => void;
  handleReserve: () => void;
}

const ButtonsSection: React.FC<ButtonsSectionProps> = ({
  onClose,
  handleReserve,
}) => {
  return (
    <ButtonContainer>
      <CloseButton onClick={onClose}>닫기</CloseButton>
      <ReserveButton onClick={handleReserve}>예약하기</ReserveButton>
    </ButtonContainer>
  );
};

export default ButtonsSection;
