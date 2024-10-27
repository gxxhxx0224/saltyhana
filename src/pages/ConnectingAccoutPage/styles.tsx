import styled, { keyframes } from "styled-components";

export const StyledSpan = styled.span`
  font-weight: 700;
  font-size: 1.2rem;
`;

export const CenterFlexContainer = styled.div`
  width: 100%;
  height: 100vh;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  > div {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const firstAnimation = keyframes`
    0% {
        transform: scale(0);
    }
    100% {
        transform: scale(1);
    }
`;

const secondAnimation = keyframes`
    0% {
        transform: translate(0, 0);
    }
    100% {
        transform: translate(24px, 0);
    }
`;

const thirdAnimation = keyframes`
    0% {
        transform: scale(1);
    }
    100% {
        transform: scale(0);
    }
`;

export const Spinner = styled.div`
  color: #006b6b;
  box-sizing: border-box;
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
  div {
    position: absolute;
    top: 33.33333px;
    width: 13.33333px;
    height: 13.33333px;
    border-radius: 50%;
    background: currentColor;
    animation-timing-function: cubic-bezier(0, 1, 1, 0);
  }
  div:nth-child(1) {
    left: 8px;
    animation: ${firstAnimation} 0.6s infinite;
  }
  div:nth-child(2) {
    left: 8px;
    animation: ${secondAnimation} 0.6s infinite;
  }
  div:nth-child(3) {
    left: 32px;
    animation: ${secondAnimation} 0.6s infinite;
  }
  div:nth-child(4) {
    left: 56px;
    animation: ${thirdAnimation} 0.6s infinite;
  }
`;
