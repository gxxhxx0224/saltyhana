import React from "react";
import * as styled from "../RecommendPage/styles";
import { Calendar, GoalProgressContainer, PageContainer } from "./styles";
import travelLogImage from "../../images/recommend_travellog.png";
import sweatHanaImage from "../../images/recommend_sweathana.png";
import youthAccountImage from "../../images/recommend_youthaccount.png";

// HomePage 컴포넌트: 홈, 대시보드 페이지를 렌더링하는 함수형 컴포넌트
const HomePage: React.FC = () => {
  return (
    <PageContainer>
      {/* 목표, 진행도 박스 레이아웃  */}
      <GoalProgressContainer
        goal={"여행"}
        startdate={"2024.10.01"}
        enddate={"2024.12.23"}
        progress={80}
      />
      {/* 주간 캘린더 레이아웃 */}
      <Calendar />
      {/* 상품 리스트가 표시되는 섹션 */}
      <styled.ProductList>
        {/* 트래블로그 여행 적금 카드 */}
        <styled.ProductWrapper>
          <styled.ProductCard>
            {/* 상품 이미지 */}
            <styled.ProductCardImage
              src={travelLogImage}
              alt="트레블로그 여행 적금"
            />
            {/* 카드의 타이틀 */}
            <styled.ProductCardTitle>
              트레블로그 여행 적금
            </styled.ProductCardTitle>
            {/* 카드의 부제목 */}
            <styled.ProductCardSubTitle>
              여행 준비의 시작
            </styled.ProductCardSubTitle>
            {/* 상품 정보 */}
            <styled.ProductInfo>
              연(세전, 5년)
              <br />
              4.50% ~ 6.00%
            </styled.ProductInfo>
          </styled.ProductCard>
          {/* 카드 아래에 표시될 타이틀 */}
          <styled.ProductTitle>트래블로그 여행 적금</styled.ProductTitle>
        </styled.ProductWrapper>

        {/* 달달 하나 적금 카드 */}
        <styled.ProductWrapper>
          <styled.ProductCard>
            <styled.ProductCardImage src={sweatHanaImage} alt="달달하나" />
            <styled.ProductCardTitle>달달 하나</styled.ProductCardTitle>
            <styled.ProductInfo>
              혜택(2백만원까지)
              <br />
              기본 0.10%~최고 3.00%(연, 세전)
            </styled.ProductInfo>
          </styled.ProductCard>
          <styled.ProductTitle>달달하나 적금</styled.ProductTitle>
        </styled.ProductWrapper>

        {/* 이미지 크기 수정 요망 */}
        {/* 
        <styled.ProductWrapper>
          <styled.ProductCard >
            <styled.ProductCardTitle>달달 하나</styled.ProductCardTitle>
            <styled.ProductInfo>
              혜택(2백만원까지)
              <br />
              기본 0.10%~최고 3.00%(연, 세전)
            </styled.ProductInfo>
          </styled.ProductCard>
          <styled.ProductTitle>달달하나 적금</styled.ProductTitle>
        </styled.ProductWrapper> */}

        {/* 하나 청년도약 계좌 */}
        <styled.ProductWrapper>
          <styled.ProductCard>
            <styled.ProductCardImage
              src={youthAccountImage}
              alt="청년도약계좌"
            />
            <styled.ProductCardTitle>
              하나 청년도약 계좌
            </styled.ProductCardTitle>
            <styled.ProductCardSubTitle>
              하나와 함께 도약
            </styled.ProductCardSubTitle>
            <styled.ProductInfo>
              연(세전, 5년)
              <br />
              4.50% ~ 6.00%
            </styled.ProductInfo>
          </styled.ProductCard>
          <styled.ProductTitle>하나 적금</styled.ProductTitle>
        </styled.ProductWrapper>
      </styled.ProductList>
    </PageContainer>
  );
};

export default HomePage;
