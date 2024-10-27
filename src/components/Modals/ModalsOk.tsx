import { CloseButton } from "./styles";
import { FC } from "react";
import icon_ok from "../../images/modal_ok.png";
import ModalsBackground from "./ModalsBackground";

interface ModalsOkProps {
  onClose: () => void;
}

interface ModalsOkProps {
  onClose: () => void; // onClose
  selectedBank: string | null; // 선택된 은행
  selectedDate: string; // 선택된 날짜
  selectedTime: string | null; // 선택된 시간
}

const ModalsOk: FC<ModalsOkProps> = ({
  onClose,
  selectedBank,
  selectedDate,
  selectedTime,
}) => {
  return (
    <ModalsBackground onClose={onClose}>
      <img
        src={icon_ok}
        alt="Reservation Confirmation"
        style={{ width: "35%" }}
      />

      <h2>예약이 완료되었습니다</h2>
      <p>
        {selectedDate} {selectedBank} {selectedTime}
      </p>

      <CloseButton onClick={onClose}>닫기</CloseButton>
    </ModalsBackground>
  );
};

export default ModalsOk;
