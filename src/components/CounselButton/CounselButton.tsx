// components/CounselButton/CounselButton.tsx
import React from "react";
import counselIcon from "../../images/chatmodal_counsel.png"; // 상담 아이콘 이미지 경로
import * as styled from "./CounselButtonStyles";

interface CounselButtonProps {
  onClick: () => void; // 상담 버튼 클릭 시 실행할 함수
}

const CounselButton: React.FC<CounselButtonProps> = ({ onClick }) => {
  return (
    <styled.FloatingButton onClick={onClick}>
      <styled.IconImage src={counselIcon} alt="고객센터 아이콘" />
    </styled.FloatingButton>
  );
};

export default CounselButton;
