import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as styled from "./styles";
import travelLogImage from "../../images/recommend_travellog.png";
import sweatHanaImage from "../../images/recommend_sweathana.png";
import youthAccountImage from "../../images/recommend_youthaccount.png";
import counselIcon from "../../images/recommend_counsel.png";
import { ReactComponent as WalletIcon } from "../../images/recommend_wallet.svg";
import { ReactComponent as RecommendIcon } from "../../images/recommend_producticon.svg";
import CounselButton from "../../components/CounselButton/CounselButton"; // 고객센터 버튼 컴포넌트
import ChatModal from "../../components/ChatModal/ChatModal"; // 모달 컴포넌트 임포트

// import Loading from '../../components/LoadingModal/LoadingModal';
// RecommendPage 컴포넌트: 추천 페이지를 렌더링하는 함수형 컴포넌트
const RecommendPage: React.FC = () => {
  // 채팅 모달 구현을 위한 것
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      {/* 전체 페이지의 레이아웃 */}
      <styled.BodyWrapper>
        <styled.PageTitle>
          <span>맞춤형 상품 추천</span>
        </styled.PageTitle>
        <styled.PageDescription>
          <span>목표와 소비성향에 따른 맞춤 상품을 추천 받아보세요.</span>
        </styled.PageDescription>
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

          {/* 추천 적금 */}
          <styled.RecommendProduct>
            <styled.RecommendProductText>
              홍길동님께
              <br />
              추천하는 적금
            </styled.RecommendProductText>
            <RecommendIcon />
          </styled.RecommendProduct>

          {/* 소비성향 테스트 */}
          <Link
            to="/teststart"
            style={{ color: "white", textDecoration: "none" }}
          >
            <styled.TestCard>
              <styled.TestCardText>
                소비성향
                <br />
                Test
              </styled.TestCardText>
              <WalletIcon />
            </styled.TestCard>
          </Link>
        </styled.ProductList>
      </styled.BodyWrapper>
    </div>
  );
};

export default RecommendPage;
