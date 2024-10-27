import styled from "styled-components";

export const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`;

export const ModalContainer = styled.div`
  background-color: #fff;
  width: 40%;
  height: 50%;
  max-width: 100%;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  overflow-y: scroll;
`;

export const ModalTitle = styled.h2`
  font-size: 18px;
  margin-bottom: 16px;
  margin-left: 5px;
`;

export const CheckboxWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
  padding: 10px;
  border: 1px solid #e6e6e6;
  border-radius: 8px;
  background-color: #f9f9f9;
`;

export const DetailContent = styled.div`
  border-radius: 20px;
  border: 1px solid #808080;
  margin-top: 10px;
  margin-bottom: 20px;
  padding-right: 10px;
  padding-left: 20px;
  font-size: 14px;
  color: #555;
`;

export const ModalButton = styled.button`
  background-color: #008485;
  color: white;
  border: none;
  width: 100%;
  padding: 10px;
  border-radius: 10px;
  cursor: pointer;
  font-size: 20px;

  &:hover {
    background-color: #007a7a;
  }
`;

export const WarningMessage = styled.p`
  color: red;
  font-size: 14px;
  margin-bottom: 15px;
`;

export const RoundCheckboxWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  margin-top: 10px;

  input[type="checkbox"] {
    appearance: none; // 기본 체크박스 숨기기
    border: 1.5px solid gainsboro;
    border-radius: 0.35rem; // 둥근 모양 설정
    width: 24px;
    height: 24px;
    margin-right: 10px;
    cursor: pointer;

    &:checked {
      border-color: transparent;
      background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M5.707 7.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L7 8.586 5.707 7.293z'/%3e%3c/svg%3e");
      background-size: 100% 100%;
      background-position: 50%;
      background-repeat: no-repeat;
      background-color: #008485;
    }
  }

  label {
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    user-select: none;
  }
`;
