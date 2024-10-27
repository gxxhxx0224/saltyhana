import { useEffect, useRef, useState } from "react";

import { CenterFlexContainer, Spinner, StyledSpan } from "./styles";

export default function ConnectingAccountPage() {
  const [mounted, setMounted] = useState(false);
  const openbankingWinRef = useRef<Window | null>(null);

  useEffect(() => {
    if (mounted) {
      openbankingWinRef.current = window.open(
        `https://testapi.openbanking.or.kr/oauth/2.0/authorize?response_type=code&client_id=${process.env.REACT_APP_ACCOUNT_CLIENT_ID}&scope=login inquiry transfer&state=${process.env.REACT_APP_ACCOUNT_STATE}&auth_type=0&redirect_uri=http://localhost:3000/callback`,
      );
    } else {
      setMounted(true);
    }
    return () => {
      openbankingWinRef.current && openbankingWinRef.current.close();
    };
  }, [mounted]);

  return (
    <CenterFlexContainer>
      <div>
        <Spinner>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </Spinner>
        <StyledSpan>계좌 연결 중</StyledSpan>
      </div>
    </CenterFlexContainer>
  );
}
