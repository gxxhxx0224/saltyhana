import { useRef, useState } from "react";
import { Link } from "react-router-dom";

import authImage from "../../images/AuthImg.png";
import EmailIcon from "../../icons/mail-02-stroke-rounded.svg";
import LockPasswordIcon from "../../icons/lock-password-stroke-rounded.svg";
import SmartphoneIcon from "../../icons/smart-phone-01-stroke-rounded.svg";
import AuthInput from "../../components/AuthInput";
import AgreeModal from "../../components/AgreeModal/AgreeModal";

import {
  Container,
  Paper,
  ImgWrapper,
  FormWrapper,
  InputsWrapper,
  StyledButton,
  FooterParagraph,
  AgreementCheckWrapper,
} from "./styles";

export default function SignupPage() {
  const [isTermsModalOpen, setIsTermsModalOpen] = useState(false); // 모달 상태 관리
  const [isAgreed, setIsAgreed] = useState(false); // 이용약관 체크박스 상태
  const idInputRef = useRef<HTMLInputElement | null>(null);
  const emailInputRef = useRef<HTMLInputElement | null>(null);
  const passwordInputRef = useRef<HTMLInputElement | null>(null);
  const birthInputRef = useRef<HTMLInputElement | null>(null);

  const openTermsModal = () => setIsTermsModalOpen(true);
  const closeTermsModal = () => setIsTermsModalOpen(false);

  // 약관에 모두 동의했을 때 호출되는 함수
  const handleAgreeAll = () => {
    setIsAgreed(true); // 체크박스를 체크 상태로 설정
    closeTermsModal(); // 모달 닫기
  };

  return (
    <Container>
      <ImgWrapper>
        <img
          src={authImage}
          alt="auth-money-image"
          style={{
            marginLeft: "100px",
            maxWidth: "45vw",
            maxHeight: "100vh",
          }}
        />
      </ImgWrapper>
      <FormWrapper>
        <Paper style={{ height: "700px", marginRight: "30px" }}>
          <h2 style={{ marginTop: "40px" }}>쉽게 들이는 저축 습관</h2>
          <h1>자산을 하나로</h1>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              console.log(`id: ${idInputRef.current?.value}`);
              console.log(`email: ${emailInputRef.current?.value}`);
              console.log(`password: ${passwordInputRef.current?.value}`);
              console.log(`birth: ${birthInputRef.current?.value}`);
              console.log(`check: ${isAgreed}`);
            }}
          >
            <InputsWrapper>
              <AuthInput
                labelName="이메일"
                placeholder="이메일을 입력해주세요."
                name="email"
                autoComplete="email"
                startIcon={<img src={EmailIcon} alt="email icon" />}
                ref={emailInputRef}
              />
              <AuthInput
                labelName="아이디"
                placeholder="아이디를 입력해주세요."
                name="id"
                autoComplete="username"
                startIcon={<img src={EmailIcon} alt="email icon" />}
                ref={idInputRef}
              />
              <AuthInput
                labelName="비밀번호"
                placeholder="비밀번호를 입력해주세요."
                name="password"
                type="password"
                autoComplete="new-password"
                startIcon={
                  <img src={LockPasswordIcon} alt="lock-password icon" />
                }
                ref={passwordInputRef}
              />
              <AuthInput
                labelName="생년월일"
                placeholder="생년월일을 입력해주세요."
                name="birth"
                autoComplete="off"
                startIcon={<img src={SmartphoneIcon} alt="smartphone icon" />}
                ref={birthInputRef}
              />
            </InputsWrapper>
            <AgreementCheckWrapper
              style={{ marginTop: "10px", marginBottom: "45px" }}
            >
              {/* 약관 동의 체크박스 */}
              <input type="checkbox" checked={isAgreed} disabled />
              <label>
                <span
                  style={{ cursor: "pointer", textDecoration: "underline" }}
                  onClick={openTermsModal} // 클릭 시 이용약관 모달 열기
                >
                  이용약관
                </span>
                에 동의합니다.
              </label>
            </AgreementCheckWrapper>
            <StyledButton>회원가입</StyledButton>
          </form>
          <FooterParagraph style={{ fontSize: "14px" }}>
            이미 계정이 있으신가요? <Link to="/login">로그인</Link>
          </FooterParagraph>
        </Paper>
      </FormWrapper>
      {/* 약관 동의 모달, handleAgreeAll 함수를 전달 */}
      {isTermsModalOpen && (
        <AgreeModal onClose={closeTermsModal} onAgreeAll={handleAgreeAll} />
      )}
    </Container>
  );
}
