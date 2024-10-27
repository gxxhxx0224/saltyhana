import styled from "styled-components";

export const BgModal = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1500;
`;

//모달 레이아웃
export const ModalContainer = styled.div`
  width: 550px;
  height: 500px;
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: white;
  border-radius: 30px;
  padding: 30px;
`;

// 카카오맵 레이아웃
export const MapContainer = styled.div`
  width: 90%;
  height: 50%;
  margin-bottom: 12px;
  display: flex;
  justify-content: center;

  background: #efefef;
  box-shadow: 2px 2px 8px 3px rgba(0, 0, 0, 0.2);
  border-radius: 20px;
  overflow: hidden;
`;

export const UnderMapContainer = styled.div`
  width: 100%;
  height: 40%;
  display: flex;
  flex-direction: row;
`;

//맵 아래 왼쪽 전체 컨테이너
export const LeftContainer = styled.div`
  width: 67%;
  display: flex;
  flex-direction: column;
`;

//맵 아래 왼쪽 전체 컨테이너
export const Left2Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 30px;
`;

//지점 검색
export const SearchBox = styled.div`
  width: 75%;
  display: flex;
  align-items: center;
  background: #fff;
  border: 3px solid #008485;
  border-radius: 10px;
  padding: 11px;
  margin-top: 10px;

  input {
    border: none; /* 테두리 제거 */
    outline: none;
    flex: 1;
    font-size: 15px;

    &::placeholder {
      font-size: 14px;
    }
  }

  img {
    width: 25px;
    margin-left: 10px;
    cursor: pointer;
  }
`;

// 날짜 선택 전체 레이아웃
export const DateContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 90%;
`;

// 날짜 선택 안내 텍스트
export const DateSelectorText = styled.p`
  margin-bottom: 7px;
  font-size: 15px;
`;

export const DateSelectorContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 7px;
`;

// 날짜 선택 옵션
export const DateSelector = styled.select`
  padding: 7px;
  border-radius: 5px;
  font-size: 14px;
`;

// 시간 + 스크롤 전체 컨테이너
export const TimeEntireContainer = styled.div`
  display: flex;
  margin-top: 4px;
  width: 95%;
`;

// 시간 버튼만 감싸는 컨테이너
export const TimeButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 80%;
  margin-left: 2px;
  margin-right: 2px;
`;

//왼쪽 오른쪽 스크롤 버튼 레이아웃
export const ScrollButton = styled.button`
  border: none;
  background: transparent;
  cursor: pointer;
`;

// 시간 버튼
export const TimeButton = styled.button<{ isSelected: boolean }>`
  background: ${({ isSelected }) =>
    isSelected ? "#a9a9a9" : "#f0f0f0"}; /* 선택 시 진한 회색 */
  border: none;
  border-radius: 16px;
  padding: 12px;
  margin: 5px;

  font-size: 14px;
  cursor: pointer;
`;

//예약, 닫기 버튼 레이아웃
export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 90%;
  margin-top: 15px;
`;

export const ReserveButton = styled.button`
  background: #008485;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;

  &:hover {
    background: #006363;
  }
`;

export const CloseButton = styled.button`
  background: #9e9e9e;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;

  &:hover {
    background: #757575;
  }
`;

// 오른쪽 리스트를 감싸는 전체 컨테이너
export const RightContainer = styled.div`
  width: 35%;
  margin-right: 20px;
  display: flex;
  flex-direction: column;
`;

// 지점 리스트 컨테이너
export const ListContainer = styled.div`
  overflow-y: auto;
  margin-top: 3px;
  margin-right: 5px;
  padding-top: 3px;
  padding-bottom: 5px;

  /*스크롤바 css*/
  &::-webkit-scrollbar {
    width: 5px;
  }
  &::-webkit-scrollbar-track {
    background-color: #f5f5f5; /* 스크롤바 트랙 배경색 */
    border-radius: 4px; /* 둥근 모서리 */
  }
  &::-webkit-scrollbar-thumb {
    background-color: #c0c0c0; /* 스크롤바 색상 */
    border-radius: 4px;
  }
  &::-webkit-scrollbar-thumb:hover {
    background-color: #a0a0a0; /* hover 시 색상 */
  }
`;

export const ListTitle = styled.p`
  font-size: 14px;
  font-weight: 600; // Semibold 적용
  margin-top: 7px;
  margin-right: 15px;
  margin-bottom: 8px;
  text-align: center;
`;

// 리스트 아이템
export const ListItem = styled.div<{ isSelected: boolean }>`
  font-size: 13px;
  padding: 7px;
  margin-left: 3px;
  margin-right: 7px;
  background-color: white;
  border-bottom: 1px solid #e0e0e0;
  cursor: pointer;

  ${({ isSelected }) =>
    isSelected
      ? `
  outline: 2px solid #008485;
  outline-offset: -2px;
  border-radius: 5px;
`
      : `
  outline: none; // 기본 상태에서 outline 없음
`}

  &:last-child {
    border-bottom: none; // 마지막 아이템의 보더 제거
  }
`;
