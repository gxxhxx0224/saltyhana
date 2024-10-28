import { Link } from "react-router-dom";
import styled from "styled-components"; //1. styled-component를 import 합니다.

export const YourType = styled.div`
  flex: none;
  padding: 80px 0 15px;
  * {
    margin: 0;
    color: #000000;
    text-align: center;
    font-style: normal;
    font-weight: 700;
  }

  h3 {
    font-size: 24px;
    line-height: 104%;
  }

  h1 {
    font-size: 48px;
    line-height: 104%;
  }
`;

export const ResultImgWrapper = styled.div`
  flex: 1;
  overflow: hidden;
  position: relative;
  height: 100%;
  width: 100%;
  > img {
    height: 100%;
    aspect-ratio: 1;
    object-fit: cover;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

export const BackGround = styled.div`
  background: #f5f7fa;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const StyledParagraph = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 30px;
  line-height: 150%;
  white-space: pre-line;
  text-overflow: unset;
  text-align: center;
  margin: 0;
  margin-bottom: 30px;

  color: #000000;
`;

export const TagContinaer = styled.div`
  flex: none;
  display: flex;
  gap: 8px;
  margin-bottom: 15px;
  > span {
    background: #cfcfcf;
    border-radius: 20px;
    padding: 8px 20px;
    font-weight: 700;
    font-size: 18px;
    letter-spacing: 0.5px;
  }
`;

export const StyledLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 40px;
  background: #008485;
  box-shadow: 0px 6px 6px rgba(0, 0, 0, 0.25);
  border-radius: 8px;

  text-decoration: none;
  font-style: normal;
  font-size: 24px;
  font-weight: 600;
  color: #ffffff;
  transition:
    background-color 0.5s ease,
    color 0.5s ease;

  &:hover {
    background-color: #ffffff; /* hover 시 배경을 흰색으로 변경 */
  }

  &:hover span {
    color: #008485; /* hover 시 텍스트 색상을 짙은 #008485로 설정 */
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  padding: 0 15px;
`;
