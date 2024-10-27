import React from "react";
import * as styled from "./styles";
import hanalogo from "../../images/hanabank_logo.png";
import img1 from "../../images/TeststartImg1.png";
import img2 from "../../images/TeststartImg2.png";
import img3 from "../../images/TeststartImg3.png";
import { Link } from "react-router-dom";

const TeststartPage: React.FC = () => {
  const onClick = () => {};
  return (
    <>
      <div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginTop: "12px",
            marginLeft: "12px",
          }}
        >
          <styled.HanaLogo src={hanalogo} />
          <styled.Logo>자산을 하나로</styled.Logo>
        </div>
      </div>
      <styled.Container>
        <h1>내 소비 성향 찾기</h1>
        <p>내 소비 성향을 찾고 맞춤형 금융 상품을 찾을 수 있어요</p>
      </styled.Container>

      <styled.Element1>
        <styled.ElementImg src={img1} />
        <p>8개 질문으로 간단하게!</p>
      </styled.Element1>

      <styled.Element2>
        <styled.ElementImg src={img2} />
        <p>소비 성향을 분석!</p>
      </styled.Element2>

      <styled.Element3>
        <styled.ElementImg src={img3} />
        <p>맞춤형 금융 상품 추천까지!</p>
      </styled.Element3>

      <Link to="/test">
        <styled.ButtonWrapper>
          <p>시작하기</p>
        </styled.ButtonWrapper>
      </Link>
    </>
  );
};

export default TeststartPage;
