import styled from "styled-components"; //1. styled-component를 import 합니다.

export const Container = styled.div`
  /* 내 소비 성향 찾기, 내 소비 성향을 찾고~ */
  position: absolute;
  width: 459px;
  height: 89px;
  left: 634px;
  top: 201px;

  h1 {
    font-family: "Noto Sans KR";
    font-style: normal;
    font-weight: 700;
    font-size: 56px;
    line-height: 0px;

    color: #000000;
  }

  p {
    font-family: "Noto Sans KR";
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: px;

    color: #000000;
  }
`;

export const Logo = styled.div`
  font-family: “Noto Sans KR”;
  font-style: normal;
  font-weight: 900;
  font-size: 26px;
  line-height: 41px;
  margin-left: 10px;
  color: #000000;
`;
export const HanaLogo = styled.img`
  width: 45;
  height: auto;
`;

export const ButtonWrapper = styled.div`
  /* 시작하기 Button */
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 5px 16px;
  gap: 10px;

  position: absolute;
  width: 495px;
  height: 84px;
  left: 580px;
  top: 875px;

  background: #008485;
  box-shadow: 0px 6px 6px rgba(0, 0, 0, 0.25);
  border-radius: 20px;

  color: #ffffff;
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 500;
  font-size: 30px;
  line-height: px;

  /* Hover 효과 추가 */
  transition: background-color 0.5s;
  &:hover {
    background-color: #ffffff; /* hover 시 색상 */
    p {
      color: #008485; /* 텍스트 색상 변경 */
    }
  }
`;

export const Element1 = styled.div`
  /*8개 질문으로 간단하게!*/

  position: absolute;
  width: 321px;
  height: 256px;
  left: 290px;
  top: 435px;

  p {
    font-family: "Noto Sans KR";
    font-style: normal;
    font-weight: 600;
    font-size: 27px;
    line-height: px;
  }
`;

export const Element2 = styled.div`
  /* Group 481560 */

  position: absolute;
  width: 247px;
  height: 275px;
  left: 720px;
  top: 435px;

  p {
    display: flex;
    align-items: center;
    justify-content: center;

    font-family: "Noto Sans KR";
    font-style: normal;
    font-weight: 600;
    font-size: 27px;
    line-height: px;
  }
`;

export const Element3 = styled.div`
  /* 맞춤형 금융 상품 추천까지! */

  position: absolute;
  width: 339px;
  height: 277px;
  left: 1138px;
  top: 435px;

  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 600;
  font-size: 27px;
  line-height: px;
`;

export const ElementImg = styled.img`
  width: 245px;
  height: 215px;
`;
