import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ProductTitle = styled.span`
  font-style: bold;
  font-weight: 700;
  font-size: 22px;
  color: #333;
  margin-top: 10px;
  text-align: center;
  z-index: 2; /* 텍스트는 이미지 위로 보이도록 설정 */
`;

// 개별 상품 스타일
export const Card = styled.div`
  width: 100%;
  aspect-ratio: 16 / 9;
  background-size: cover;
  color: #333;
  border-radius: 20px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  cursor: pointer;
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
export const CardTitle = styled.span`
  position: absolute;
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
export const CardSubTitle = styled.span`
  position: absolute;
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

// 상품 정보
export const Info = styled.p`
  position: absolute;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  white-space: pre-line;
  line-height: 1.5;
  bottom: 20px;
  left: 18px;
  color: white;
  z-index: 2;
  margin: 0;
  text-align: left;
`;

// 상품 이미지
export const CardImage = styled.img`
  width: 100%;
  height: 223px;
  border-radius: 20px;
  object-fit: fill;
  position: relative;
  z-index: 0;
`;

// 카드 아래에 위치하는 제목 스타일
export const Title = styled.p`
  font-style: bold;
  font-weight: 700;
  font-size: 22px;
  color: #333;
  margin-top: 10px;
  text-align: center;
  z-index: 2; /* 텍스트는 이미지 위로 보이도록 설정 */
`;
