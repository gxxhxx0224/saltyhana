import {
  FixedHeader,
  HeaderBox,
  HanaLogo,
  HanaLogoDiv,
  HeaderLink,
  StyledHeaderLink,
} from "./styles";
import hana_logo from "../../images/hanabank_logo.png";

// TODO: 로그인 여부에 따라 헤더 버튼
export default function Header() {
  // const auth = useAuth();

  return (
    <FixedHeader>
      <HeaderBox>
        <div style={{ display: "flex", flex: 1 }}>
          <HeaderLink to="/">
            <HanaLogo src={hana_logo} />
            <HanaLogoDiv>
              <span>자산을 하나로</span>
            </HanaLogoDiv>
          </HeaderLink>
        </div>
        <div style={{ flex: "none" }}>
          <StyledHeaderLink to="/signup">회원가입</StyledHeaderLink>
        </div>
      </HeaderBox>
    </FixedHeader>
  );
}
