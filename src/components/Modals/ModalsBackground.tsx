import { ReactNode } from "react";
import ModalPortal from "../../helpers/Portal";

import { BgModal, ModalContainer } from "./styles";

interface ModalsProps {
  onClose: () => void; // 전달받은 모달 닫기 함수
  children: ReactNode; // 모달 내에 렌더링할 자식
}

const ModalsBackground = ({ onClose, children }: ModalsProps) => {
  // 모달 바깥을 클릭하면 모달 닫기
  const handleBgClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <ModalPortal>
      <BgModal onClick={handleBgClick}>
        <ModalContainer>{children}</ModalContainer>
      </BgModal>
    </ModalPortal>
  );
};

export default ModalsBackground;
