import React from "react";
import { useNavigate } from "react-router-dom";
import * as styled from "./styles";
import check from "../../images/check.png";
import { Container } from "lucide-react";

const AccountConnectionPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div>
        <styled.Img src={check} />
      </div>
      <div>
        <styled.MainText>계좌 연결이 완료되었어요</styled.MainText>
      </div>
    </div>
  );
};

export default AccountConnectionPage;
