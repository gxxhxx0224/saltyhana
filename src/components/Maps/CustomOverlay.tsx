import React from "react";
import {
  OverlayContainer,
  OverlayTitle,
  TitleUnderline,
  OverlayBody,
  CloseButton,
  BankNumber,
} from "./Overlay_styles";
import { Bank } from "./BankLocation";

interface CustomOverlayProps {
  bank: Bank;
  position: { lat: number; lng: number };
  onClose: () => void;
}

const CustomOverlay: React.FC<CustomOverlayProps> = ({
  bank,
  position,
  onClose,
}) => {
  return (
    <OverlayContainer
      style={{ right: position.lng - 45, top: position.lat + 70 }}
    >
      <CloseButton onClick={onClose} title="닫기">
        ✖
      </CloseButton>
      <OverlayTitle>{bank.name}</OverlayTitle>
      <TitleUnderline />
      <OverlayBody>
        <div>{bank.address}</div>
        <div>내 위치로부터 {bank.distance.toFixed(2)} km</div>
        <BankNumber> {bank.number} </BankNumber>
      </OverlayBody>
    </OverlayContainer>
  );
};

export default CustomOverlay;
