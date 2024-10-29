import React from "react";
import * as styled from "./styles";
import hanalogo from "../../images/hanabank_logo.png";
import img1 from "../../images/TeststartImg1.png";
import img2 from "../../images/TeststartImg2.png";
import img3 from "../../images/TeststartImg3.png";
import { Link } from "react-router-dom";

const TeststartPage: React.FC = () => {
  return (
    <styled.Container>
      <styled.Header>
        <span>내 소비 성향 찾기</span>
      </styled.Header>
      <styled.HeaderDescription>
        <span>내 소비 성향을 찾고 맞춤형 금융 상품을 찾을 수 있어요.</span>
      </styled.HeaderDescription>
      <styled.ElementDiv>
        <styled.Element delay={0.3}>
          <styled.ElementImage src={img1} style={{ marginLeft: "20px" }} />
          <styled.ElementDescription style={{ marginTop: "50px" }}>
            8개 질문으로 간단하게!
          </styled.ElementDescription>
        </styled.Element>
        <styled.Element delay={0.6}>
          <styled.ElementImage
            src={img2}
            style={{ width: "210px", height: "auto" }}
          />
          <styled.ElementDescription>
            소비 성향을 분석!
          </styled.ElementDescription>
        </styled.Element>
        <styled.Element delay={0.9}>
          <styled.ElementImage src={img3} style={{ marginRight: "20px" }} />
          <styled.ElementDescription style={{ marginTop: "40px" }}>
            맞춤형 금융 상품 추천까지!
          </styled.ElementDescription>
        </styled.Element>
      </styled.ElementDiv>
      <Link to="/test/consumption" style={{ textDecoration: "none" }}>
        <styled.ButtonWrapper delay={1.2}>시작하기</styled.ButtonWrapper>
      </Link>
    </styled.Container>
  );
};

export default TeststartPage;
