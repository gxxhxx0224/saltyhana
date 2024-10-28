import styled from "styled-components"; //1. styled-component를 import 합니다.

export const Container = styled.div`
  /* 내 소비 성향 찾기, 내 소비 성향을 찾고~ */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  /* padding-top: 20px; */
`;

export const Header = styled.div`
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 700;
  font-size: 56px;
  line-height: 0px;
  padding-top: 20px;

  color: #000000;
`;

export const HeaderDescription = styled.div`
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 500;
  font-size: 25px;
  line-height: 0px;
  color: #000000;
  margin-top: 60px;
`;

export const ElementDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 70%;
  margin-top: 130px;
  padding-left: 15px;
`;

export const Element = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 300px;
  padding-left: 20px;
`;

export const ElementImage = styled.img`
  width: 220px;
  height: auto;
`;

export const ElementDescription = styled.div`
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 600;
  font-size: 26px;
  line-height: 0px;
  color: #000000;
  margin-top: 40px;
`;

export const ButtonWrapper = styled.div`
  /* 시작하기 Button */
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px 16px;
  gap: 10px;

  width: 340px;
  height: 65px;

  background: #008485;
  box-shadow: 0px 6px 6px rgba(0, 0, 0, 0.25);
  border-radius: 20px;

  color: #ffffff;
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 700;
  font-size: 25px;
  margin-top: 100px;
  margin-bottom: 0;
  cursor: pointer;

  text-decoration: none;

  /* Hover 효과 추가 */
  transition: background-color 0.5s;
  &:hover {
    background-color: #00adad; /* hover 시 색상 */
    p {
      color: #008485; /* 텍스트 색상 변경 */
    }
  }
`;
