import { useLocation } from "react-router-dom";

import {
  FixedHeader,
  HeaderBox,
  HanaLogo,
  HanaLogoDiv,
  HeaderLink,
  StyledHeaderLink,
  WelcomeSpan,
} from "./styles";
import hana_logo from "../../images/hanabank_logo.png";
import useLocalStorage from "../../hooks/useLocalStorage";

interface IUserInfo {
  id: string;
  password: string;
  isLoggedIn: boolean;
}

const initInfo: IUserInfo = {
  id: "",
  password: "",
  isLoggedIn: false,
};

export default function Header() {
  const location = useLocation();
  const [user, setUser] = useLocalStorage<IUserInfo>("userInfo", initInfo);

  const pathName = location.pathname;

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
        <div style={{ flex: "none", display: "flex", gap: "5px" }}>
          {pathName === "/" ? (
            <>
              <StyledHeaderLink to="/login">로그인</StyledHeaderLink>
              <StyledHeaderLink to="/signup">회원가입</StyledHeaderLink>
            </>
          ) : (
            <WelcomeSpan>{user.id}님 환영합니다</WelcomeSpan>
          )}
        </div>
      </HeaderBox>
    </FixedHeader>
  );
}
