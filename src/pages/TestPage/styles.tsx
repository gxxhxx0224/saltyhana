import styled from "styled-components";

// 공통 hover 시간을 위한 변수
const hoverTransitionTime = "0.5s";

// 색상 변수
const selectionHoverColor = "#B4ADAD"; // BeforeQuestion 색상
const beforeHoverColor = "#E8E8E8"; // Selection 1,2,3 색상

export const Question = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  h1 {
    /* Q1. */
    font-weight: 700;
    font-size: 60px;
    line-height: 104%;
    /* or 62px */
    text-align: center;

    color: #008485;
  }

  p {
    /* 사고 싶은 게 생겼다 */
    display: flex;
    align-items: center;
    justify-content: center;

    font-weight: 700;
    font-size: 40px;
    line-height: 104%;

    color: #000000;
  }
`;

export const SelectionWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  height: inherit;
  min-width: 500px;
  margin: auto;
  > * + * {
    margin-top: 40px;
  }
  > button {
    display: flex;
    justify-content: center;
    background: #e8e8e8;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 40px;
    border: none; /* 검정 테두리 제거 */
    outline: none; /* 클릭 시 발생하는 포커스 테두리 제거 */
    cursor: pointer;
    transition: background ${hoverTransitionTime};

    padding: 15px 0;
    font-weight: 700;
    font-size: 32px;
    line-height: 104%;

    &:hover {
      background: ${selectionHoverColor}; /* BeforeQuestion 색상으로 hover */
    }
  }

  > button:nth-child(1) span {
    color: #008485;
  }
  > button:nth-child(2) span {
    color: #d60036;
  }
  > button:nth-child(3) span {
    color: #000000;
  }
`;

export const BeforeQuestion = styled.div`
  /* Polygon 3 */
  border-top: 26px solid transparent;
  border-bottom: 26px solid transparent;
  border-right: 52px solid #b4adad; /* 삼각형 모양 생성 */
  transform: rotate(0deg); /* 필요에 따라 회전 가능 */

  position: absolute;
  top: 50%;
  left: 15px;
  transition: border-right-color ${hoverTransitionTime};
  cursor: pointer;

  &:hover {
    border-right-color: ${beforeHoverColor}; /* Selection 색상으로 hover */
  }
`;
