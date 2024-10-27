import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  > div {
    flex: 1;
  }
`;

export const Paper = styled.div`
  min-width: 320px;
  max-width: 400px;
  width: 100%;
  margin: 0 25px;
  background: #f6f6f6;
  border-radius: 50px;
  padding: 50px 70px;
  font-size: 16px;
  > h2 {
    font-style: normal;
    font-weight: 700;
    font-size: 28px;
    color: #424242;
    line-height: 110%;
    text-shadow: 2px 4px 8px rgba(252, 226, 206, 0.2);
    margin: 0;
  }
  > h1 {
    font-style: normal;
    font-weight: 700;
    font-size: 45px;
    color: #008485;
    line-height: 110%;
    text-shadow: 2px 4px 8px rgba(252, 226, 206, 0.2);
    margin: 0 0 40px 0;
  }
`;

export const ImgWrapper = styled.div`
  display: flex;
  align-items: flex-end;
`;

export const FormWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const InputsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const StyledButton = styled.button`
  display: block;
  text-align: center;
  background: #008485;
  border-radius: 128px;
  letter-spacing: 0.2px;
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 140%;
  border: 0;
  width: 100%;
  height: 55px;
  color: #ffffff;
  cursor: pointer;
  padding: 12px 0;
  /* margin: 25px 0; */
`;

export const FooterParagraph = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 140%;
  letter-spacing: 0.2px;
  color: rgba(85, 57, 34, 0.7);
  text-align: center;
  > a {
    text-decoration: none;
    color: #008485;
    font-weight: 700;
    &:hover {
      text-decoration: underline;
    }
  }
`;

export const AgreementCheckWrapper = styled.div`
  margin: 2px 0px;
  > label {
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 140%;
    letter-spacing: 0.2px;
    > span {
      text-decoration-line: underline;
      cursor: pointer;
    }
  }
`;
