import styled, { keyframes } from "styled-components";

interface AccountProps {
  accountNumber: string;
  accountName: string;
  balance: number;
}

export const AccountListContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  background-color: #f5f5f5;
  border-radius: 8px;
  width: 250px;
  height: 170px;
  overflow-y: auto; // Enable vertical scrolling when list exceeds height
  box-shadow: 4px 4px 14px 1px rgba(0, 0, 0, 0.1);
  font-family:
    Noto Sans KR,
    sans-serif;
`;

export const AccountItem = styled.div`
  padding: 10px;
  margin: 5px 0;
  background-color: #f0f0f0;
  border-radius: 5px;
  cursor: pointer;
  text-align: center;
  box-shadow: 4px 4px 14px 1px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s;

  &:hover {
    background-color: #ffffff;
  }

  &.active {
    background-color: #ffffff;
    font-weight: bold;
    color: #2a9d8f;
  }
`;

export const Header = styled.div`
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 700;
  font-size: 30px;
  padding-top: 30px;
  margin-left: 20px;
`;

export const HeaderDescription = styled.div`
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  margin-left: 20px;
`;

export const PageContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 20px;
  /* padding-top: 60px; */
  font-family:
    Noto Sans KR,
    sans-serif;
`;

const AccountDiv = styled.div`
  background-color: #2a9d8f;
  padding: 30px;
  color: white;
  border-radius: 10px;
  margin-right: 20px;
  margin-bottom: 30px;
  justify-content: center;
  box-shadow: 4px 4px 14px 1px rgba(0, 0, 0, 0.25);
  font-size: 15px;
  font-weight: 700;
  height: 150px;
  display: flex;
  flex-direction: column;
`;

const AccountName = styled.h2`
  font-size: 30px;
  margin-top: 30px;
  margin-bottom: 10px;
`;

const AccountNumber = styled.p`
  font-size: 20px;
  margin: 0px;
`;

const AccountBalance = styled.p`
  font-size: 30px;
  margin-top: 30px;
`;

export const Account: React.FC<AccountProps> = ({
  accountNumber,
  accountName,
  balance,
}) => {
  return (
    <AccountDiv>
      <AccountName>{accountName}</AccountName>
      <AccountNumber>{accountNumber}</AccountNumber>
      <AccountBalance>{balance.toLocaleString()}원</AccountBalance>
    </AccountDiv>
  );
};

export const ChartsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: flex-start;
  width: 100%;
  padding: 20px;
  box-sizing: border-box;
`;

const ChartBox = styled.div`
  width: 40%;
`;

export const LineChartContainer = styled(ChartBox)`
  padding: 20px;
  border-radius: 10px;
  height: 400px;
  width: 69%;
  justify-content: space-around;
  margin-left: 30px;
`;

export const Title = styled.h3`
  margin-top: 0px;
  margin-bottom: 30px;
`;

export const CumulativeSum = styled.div`
  font-size: 20px;
  font-weight: bold;
  color: #264653;
  margin-top: 20px;

  > span {
    color: #008485;
    font-weight: 900;
  }
`;

export const CharacterIcon = styled.img.attrs({ alt: "이미지" })`
  width: 200px;
  height: 200px;
`;

export const AssetDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const AssetGuideDiv = styled.div`
  margin: 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const AssetTitle = styled.h3`
  font-size: 30px;
  margin: 0px;
`;

export const AssetDescription = styled.h3`
  font-size: 15px;
  margin: 0px;
`;
