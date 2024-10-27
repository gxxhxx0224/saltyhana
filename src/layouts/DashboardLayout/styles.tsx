import styled from "styled-components";

export const StyledNav = styled.nav`
  width: 200px;
`;

export const Main = styled.main`
  display: flex;
  width: 100%;
  min-height: 100vh;
  > div {
    overflow: auto;
    height: 100vh;
  }
`;
