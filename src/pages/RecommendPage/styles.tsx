import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

// 페이지 본문
export const BodyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 62px;
  // background-color: #f0f0f0;
`;

export const PageTitle = styled.div`
  font-style: bold;
  font-weight: 700;
  font-size: 36px;
  text-align: left;
`;

export const PageDescription = styled.p`
  margin: 0;
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  text-align: left;
  padding-bottom: 15px;
`;

// 상품 리스트 스타일
export const ProductList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 30px;
  margin-bottom: 15px;

  > *:nth-child(1) {
    opacity: 0;
    animation: ${fadeIn} 1s ease-out forwards;
    animation-delay: 0.3s; // 가장 먼저 나타남
  }
  > *:nth-child(2) {
    opacity: 0;
    animation: ${fadeIn} 1s ease-out forwards;
    animation-delay: 0.6s; // 가장 먼저 나타남
  }
  > *:nth-child(3) {
    opacity: 0;
    animation: ${fadeIn} 1s ease-out forwards;
    animation-delay: 0.9s; // 가장 먼저 나타남
  }
`;

export const CustomList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 15px;

  > *:nth-child(1) {
    opacity: 0;
    animation: ${fadeIn} 1s ease-out forwards;
    animation-delay: 1.2s;
  }
  > *:nth-child(2) {
    opacity: 0;
    animation: ${fadeIn} 1s ease-out forwards;
    animation-delay: 1.5s;
  }
`;

// 상품 카드와 제목을 감싸는 래퍼
export const ProductWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

// 개별 상품 스타일
export const ProductCard = styled.div`
  width: 440px;
  height: 223px;
  background-color: #f0f0f0;
  color: #333;
  display: flex;
  border-radius: 20px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  text-align: center;
  align-items: center;
  flex-basis: calc(33.33% - 42px);
  position: relative;
  transition: transform 0.5s ease; /* 부드러운 전환 효과 */

  &:hover {
    transform: scale(1.1);
  }

  /* 이미지에 어두운 오버레이 추가 */
  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.4); /* 어두운 반투명 레이어 */
    border-radius: 20px;
    z-index: 1;
  }

  &:hover:before {
    background: rgba(0, 0, 0, 0.3); /* 투명도가 낮아져서 이미지가 밝아짐 */
  }
`;

// 카드 안 제목
export const ProductCardTitle = styled.p`
  position: absolute;
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 600;
  font-size: 36px;
  text-align: left;
  margin: 0;
  top: 20px;
  left: 18px;
  color: white;
  z-index: 2;
`;

// 카드 안 부제목
export const ProductCardSubTitle = styled.p`
  position: absolute;
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 600;
  font-size: 25px;
  margin: 0;
  top: 70px;
  text-align: left;
  left: 18px;
  color: white;
  z-index: 2;
`;

// 상품 정보 제목
export const ProductInfoTitle = styled.p`
  position: absolute;
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 1.5;
  bottom: 40px;
  left: 18px;
  color: white;
  z-index: 2;
  margin: 0;
  text-align: left;
`;

// 상품 정보
export const ProductInfo = styled.p`
  position: absolute;
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 1.5;
  bottom: 20px;
  left: 18px;
  color: white;
  z-index: 2;
  margin: 0;
  text-align: left;
`;

// 상품 이미지
export const ProductCardImage = styled.img`
  width: 100%;
  height: 223px;
  border-radius: 20px;
  object-fit: cover;
  position: relative;
  z-index: 0;
`;

// 카드 아래에 위치하는 제목 스타일
export const ProductTitle = styled.p`
  font-family: "Noto Sans KR";
  font-style: bold;
  font-weight: 700;
  font-size: 22px;
  color: #333;
  margin-top: 10px;
  text-align: center;
  z-index: 2; /* 텍스트는 이미지 위로 보이도록 설정 */
`;

const BasicCard = styled.div`
  width: 100%;
  height: 250px;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 30px;
  display: grid;
  grid-template-columns: 1fr 250px;
  transition: transform 0.5s ease; /* 부드러운 전환 효과 추가 */

  &:hover {
    transform: scale(1.1);
  }

  * span {
    font-size: 30px;
    font-weight: 900;
    text-align: left;
    line-height: 1.3;
    margin: 0 0 30px 30px;
  }
  > div {
    width: 100%;
    height: inherit;
    display: flex;
    align-items: end;
  }
`;

// 맞춤 상품 스타일
export const RecommendProduct = styled(BasicCard)`
  background: #e8e8e8;
  color: black;
`;

// 소비성향 테스트 카드
export const TestCard = styled(BasicCard)`
  background: #446864;
  color: white;
`;

// 고객센터 버튼
export const CounselBox = styled.div`
  width: 200px; /* 버튼의 너비 */
  height: 65px; /* 버튼의 높이 */
  background-color: #b3b3b3; /* 버튼 배경색 */
  border-radius: 50px; /* 둥근 모서리 */
  display: flex;
  align-items: center; /* 수직 정렬 */
  justify-content: flex-start; /* 아이콘과 텍스트를 왼쪽으로 정렬 */
  padding-left: 0px; /* 내부 여백 제거 */
  padding-right: 15px; /* 우측 여백만 설정 */
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); /* 그림자 효과 */
  cursor: pointer;
  gap: 10px; /* 아이콘과 텍스트 간격 */
  margin-top: 60px;
  margin-left: auto; /* 화면 왼쪽으로 붙임 */
  transition: transform 0.5s ease; /* 부드러운 전환 효과 추가 */

  &:hover {
    transform: scale(1.1);
  }
`;

// 아이콘을 감싸는 래퍼
export const IconWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
