import styled, { keyframes } from "styled-components"; // 1. styled-component를 import 합니다.

// Fade in animation
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

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

export const Header = styled.div`
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 700;
  font-size: 56px;
  line-height: 0px;
  padding-top: 20px;
  color: #000000;
  opacity: 0;
  animation: ${fadeIn} 0.5s ease-out forwards;
  animation-delay: 0.3s; // 1. Header 나타나기
`;

export const HeaderDescription = styled.div`
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 500;
  font-size: 25px;
  line-height: 0px;
  color: #000000;
  margin-top: 60px;
  opacity: 0;
  animation: ${fadeIn} 0.5s ease-out forwards;
  animation-delay: 0.6s; // 2. HeaderDescription 나타나기
`;

export const ElementDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 70%;
  margin-top: 130px;
  padding-left: 15px;
`;

export const Element = styled.div<{ delay: number }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 300px;
  padding-left: 20px;
  opacity: 0;
  animation: ${fadeIn} 0.5s ease-out forwards;
  animation-delay: ${({ delay }) => delay}s; // Use delay prop
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

export const ButtonWrapper = styled.div<{ delay?: number }>`
  // delay prop 추가
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
  transition: background-color 0.5s;

  opacity: 0;
  animation: ${fadeIn} 0.5s ease-out forwards;
  animation-delay: ${({ delay }) => delay}s; // 버튼의 delay 설정

  &:hover {
    background-color: #00adad; /* hover 시 색상 */
    p {
      color: #008485; /* 텍스트 색상 변경 */
    }
  }
`;
