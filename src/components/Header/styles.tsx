import { Link } from "react-router-dom";
import styled from "styled-components";

export const HeaderOffset = styled.div`
  min-height: 64px;
  flex: 1;
`;

export const HeaderBox = styled(HeaderOffset)`
  display: flex;
  align-items: center;
  padding: 0 12px;
  border-bottom-color: rgba(5, 5, 5, 0.3);
  border-bottom-width: 0.5px;
  border-bottom-style: solid;
  background-color: white;
`;

export const FixedHeader = styled.header`
  position: fixed;
  width: 100vw;
  top: 0;
  left: 0;
  z-index: 500;
`;

export const HanaLogoDiv = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: 26px;
  line-height: 41px;
  margin-left: 10px;
  color: #000000;
`;

export const HanaLogo = styled.img`
  width: 45px;
  height: auto;
`;

export const HeaderLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  text-decoration: none;
`;

export const StyledHeaderLink = styled(HeaderLink)`
  display: flex;
  padding: 9.5px 20px;
  background: #008485;
  border-radius: 20px;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  cursor: pointer;
  color: #ffffff;

  &:hover {
    background: #006f6f;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  }
`;

export const WelcomeSpan = styled.span`
  font-weight: 700;
`;
