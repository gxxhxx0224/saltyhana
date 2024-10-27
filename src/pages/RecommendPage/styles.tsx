import styled from "styled-components";

// 페이지 본문
export const BodyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  height: 100%;
  // background-color: #f0f0f0;
`;

export const PageTitle = styled.div`
  font-family: "Noto Sans KR";
  font-style: bold;
  font-weight: 700;
  font-size: 36px;
  text-align: left;
  margin-left: 42px;
`;

export const PageDescription = styled.div`
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  text-align: left;
  margin-left: 42px;
`;

// 상품 리스트 스타일
export const ProductList = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  max-width: 1728px;
  justify-content: space-between;
  row-gap: 85px; /* 세로 줄 간의 간격을 조정 */
  margin: 42px 42px 40px;
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

// 맞춤 상품 스타일
export const RecommendProduct = styled.div`
  width: 660px;
  height: 250px;
  background: #e8e8e8;
  color: black;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 30px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 180px;
  transition: transform 0.5s ease; /* 부드러운 전환 효과 추가 */

  &:hover {
    transform: scale(1.1);
  }
`;

// 텍스트 스타일
export const RecommendProductText = styled.div`
  font-family: "Noto Sans KR", sans-serif;
  font-size: 30px;
  font-weight: 900;
  text-align: left;
  line-height: 1.3;
  /* margin: 40px 0 40px 40px; */
`;

// 소비성향 테스트 카드
export const TestCard = styled.div`
  width: 660px;
  height: 250px;
  background: #446864;
  color: white;
  /* border-radius: 10px; */
  border-radius: 30px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  display: flex;
  /* flex-direction: row; */
  justify-content: center;
  align-items: center;
  gap: 10px;
  transition: transform 0.5s ease; /* 부드러운 전환 효과 추가 */

  &:hover {
    transform: scale(1.1);
  }
`;

// 소비성향 테스트 텍스트
export const TestCardText = styled.div`
  font-family: "Noto Sans KR", sans-serif;
  font-size: 30px;
  font-weight: bold;
  text-align: left;
  line-height: 1.3;
  /* margin: 40px 0 40px 70px; */
  margin-left: 30px;
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
  width: 65px;
  height: 65px;
  background-color: white; /* 아이콘 배경색 */
  border-radius: 50%; /* 둥근 모서리 */
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 0px; /* 아이콘을 왼쪽에 붙이기 */
`;

// 아이콘 이미지
export const IconImage = styled.img`
  width: 35px; /* 아이콘 크기 */
  height: auto;
`;
