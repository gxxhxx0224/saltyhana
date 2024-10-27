import styled from "styled-components";

// 스타일 정의
export const FloatingButton = styled.div`
  position: fixed;

  // 플로팅 위치 수정 필요
  bottom: 30px; /* 페이지 하단에서의 위치 */
  right: 30px; /* 페이지 오른쪽에서의 위치 */

  width: 60px;
  height: 60px;
  background-color: #dff6f2;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);
  cursor: pointer;
  z-index: 999;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.1); /* 버튼을 살짝 확대 */
  }
`;

export const IconImage = styled.img`
  width: 35px;
  height: 35px;
`;
