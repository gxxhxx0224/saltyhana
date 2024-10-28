import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import zoomPlugin from "chartjs-plugin-zoom";
import { subDays, format } from "date-fns";
import character from "../../images/personal_asset_character.svg";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title as ChartTitle,
  Filler,
  ChartOptions,
} from "chart.js";
import {
  Account,
  AssetDescription,
  AssetDiv,
  AssetGuideDiv,
  AssetTitle,
  CharacterIcon,
  ChartsContainer,
  CumulativeSum,
  LineChartContainer,
  PageContainer,
  Title,
  AccountListContainer,
  AccountItem,
  Header,
  HeaderDescription,
} from "./styles";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ChartTitle,
  Filler,
  zoomPlugin,
);

const AssetsPage: React.FC = () => {
  const accounts = [
    {
      accountNumber: "352-000-0000-01",
      accountName: "주거래 하나 통장*",
      balance: 2005333,
    },
    {
      accountNumber: "352-000-0000-02",
      accountName: "369 정기예금",
      balance: 1523000,
    },
    {
      accountNumber: "352-000-0000-03",
      accountName: "부자씨 적금",
      balance: 780000,
    },
  ]; // sample accounts

  const [selectedAccount, setSelectedAccount] = useState(accounts[0]);
  const [lineData, setLineData] = useState<any>(null);
  const [cumulativeSum, setCumulativeSum] = useState<number>(0);
  const [zoomedRange, setZoomedRange] = useState<string>("");

  const generateLineData = () => {
    let labels = [];
    let endDate = new Date();
    let startDate = subDays(endDate, 30);
    const diffDays = Math.ceil(
      (endDate.getTime() - startDate.getTime()) / (1000 * 3600 * 24),
    );
    labels = Array.from({ length: diffDays }, (_, i) =>
      // format(subDays(endDate, diffDays - i - 1), "MMM dd")
      subDays(endDate, diffDays - i - 1),
    );
    const data = labels.map(() => Math.floor(Math.random() * 100000));
    const sum = data.reduce((a, b) => a + b, 0);
    setCumulativeSum(sum - (sum % 100));

    const minDate = format(new Date(labels[0]), "M월 dd일");
    const maxDate = format(new Date(labels[labels.length - 1]), "M월 dd일");
    setZoomedRange(`${minDate}부터 ${maxDate}까지`);

    return {
      labels,
      datasets: [
        {
          label: `${minDate}부터 ${maxDate}까지의 지출 내역`,
          data: data,
          fill: true,
          borderColor: "#2A9D8F",
          backgroundColor: "rgba(42, 157, 143, 0.3)",
          tension: 0.5, // 곡선 정도
        },
      ],
    };
  };

  const lineOptions: ChartOptions<"line"> = {
    responsive: true,
    maintainAspectRatio: false,
    layout: {
      padding: {
        bottom: 20,
        left: 10,
        right: 10,
      },
    },
    scales: {
      x: {
        type: "category",
        // ticks: {
        // 	padding: 5,
        // },
        ticks: {
          padding: 5,
          callback: (value, index) => {
            // x축 레이블 포맷
            const date = new Date(lineData.labels[index]);
            return format(date, "M월 dd일");
          },
        },
      },
      y: {
        ticks: {
          padding: 5,
        },
      },
    },
    plugins: {
      zoom: {
        zoom: {
          drag: {
            enabled: true,
            backgroundColor: "rgba(42, 157, 143, 0.2)",
            borderColor: "rgba(42, 157, 143, 1)",
          },
          mode: "x",
          onZoomComplete: (e) => {
            const xScale = e.chart.scales.x as any;
            const yData = e.chart.data.datasets[0].data as number[];
            const labels = e.chart.data.labels as string[];

            const minIndex = Math.floor(xScale.min);
            const maxIndex = Math.ceil(xScale.max);
            const validMinIndex = Math.max(0, minIndex);
            const validMaxIndex = Math.min(yData.length - 1, maxIndex);
            const sum = yData
              .slice(validMinIndex, validMaxIndex + 1)
              .reduce(
                (acc, val) => acc + (typeof val === "number" ? val : 0),
                0,
              );

            setCumulativeSum(sum - (sum % 100));

            // const minDate = format(
            // 	new Date(labels[validMinIndex]),
            // 	"M월 dd일"
            // );
            // const maxDate = format(
            // 	new Date(labels[validMaxIndex]),
            // 	"M월 dd일"
            // );
            const minDate = format(labels[validMinIndex], "M월 dd일");
            const maxDate = format(labels[validMaxIndex], "M월 dd일");
            setZoomedRange(`${minDate}부터 ${maxDate}까지`);
          },
        },
        pan: {
          enabled: true,
          mode: "x",
        },
      },
    },
  };

  useEffect(() => {
    const newData = generateLineData();
    setLineData(newData);
  }, []);

  return (
    <>
      <Header>짭짤하나 님의 자산 현황</Header>
      <HeaderDescription>
        짭짤하나 님이 가지고 계신 계좌 잔액과 기간 별 지출 현황을 확인하실 수
        있어요.
      </HeaderDescription>
      <PageContainer>
        <div style={{ flex: 1 }}>
          <div style={{ display: "flex", flex: 1, width: "100%" }}>
            <div style={{ flex: 1.5, paddingRight: "10px" }}>
              {/* 계좌 박스 */}
              <Account
                accountNumber={selectedAccount.accountNumber}
                accountName={selectedAccount.accountName}
                balance={selectedAccount.balance}
              />
            </div>
            <div style={{ flex: 0.5, paddingLeft: "10px" }}>
              {/* 계좌 리스트 박스 */}
              <AccountListContainer>
                {accounts.map((account) => (
                  <AccountItem
                    key={account.accountNumber}
                    className={
                      selectedAccount.accountNumber === account.accountNumber
                        ? "active"
                        : ""
                    }
                    onClick={() => setSelectedAccount(account)}
                  >
                    {account.accountName}
                    <br></br>
                    {account.accountNumber}
                  </AccountItem>
                ))}
              </AccountListContainer>
            </div>
          </div>

          {/* 선택된 계좌 지출 그래프 컨테이너 */}
          <ChartsContainer>
            <div style={{ display: "flex", width: "100%" }}>
              <AssetDiv>
                <AssetGuideDiv>
                  <CharacterIcon src={character} />
                  <AssetTitle>돈을 얼마나 썼을까?</AssetTitle>
                  <AssetDescription>
                    확인하고 싶은 기간을 드래그하여 지출 금액을 확인하세요!
                  </AssetDescription>
                  <CumulativeSum>
                    {zoomedRange}
                    <br></br>총 <span>{cumulativeSum.toLocaleString()}</span>
                    원을 쓰셨네요
                  </CumulativeSum>
                </AssetGuideDiv>
              </AssetDiv>
              {/* 라인 그래프 컨테이너 */}
              <LineChartContainer>
                <Title></Title>
                {lineData && <Line data={lineData} options={lineOptions} />}
              </LineChartContainer>
            </div>
          </ChartsContainer>
        </div>
      </PageContainer>
    </>
  );
};

export default AssetsPage;
