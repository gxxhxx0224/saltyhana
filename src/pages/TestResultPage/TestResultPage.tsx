import { useMemo } from "react";
import { useSearchParams } from "react-router-dom";

import { HeaderOffset } from "../../components/Header/styles";
import {
  BackGround,
  StyledParagraph,
  YourType,
  TagContinaer,
  StyledLink,
  Container,
  ResultImgWrapper,
} from "./styles";
import Result1Img from "../../images/TestresultImg1.png";
import Result2Img from "../../images/TestresultImg2.png";
import Result3Img from "../../images/TestresultImg3.png";

type ConsumptionType = {
  title: string;
  image: string;
  tags: string[];
  description: string;
};

export default function TestResultPage() {
  const [searchParams, _] = useSearchParams();

  const currentType = useMemo(() => {
    const resultNum = searchParams.get("result");
    if (!resultNum) return null;

    const idx = parseInt(resultNum);
    const consumtionTypes: ConsumptionType[] = [
      {
        title: "오늘만 산다",
        image: Result1Img,
        tags: ["#YOLO", "#___P"],
        description:
          "당장 사고 싶은 것을 바로 사야 만족하는 욜로족입니다.\n자산을 모으긴 어려워 보입니다.",
      },
      {
        title: "나에게 주는 선물",
        image: Result2Img,
        tags: ["#YOLO", "#_S_P"],
        description:
          "진정으로 원하는 소비를 위해 당장의 소비는 잘 참으시는군요!\n하지만 자산을 모으기엔 한계가 있어 보입니다..",
      },
      {
        title: "마지막에 웃는 \n 진짜 승리자!",
        image: Result3Img,
        tags: ["#YONO", "#___J"],
        description:
          "목표를 달성하기 위해 당장의 소비를 잘 참는 당신\n부자가 될 자격이 있습니다!",
      },
    ];

    return consumtionTypes[idx - 1];
  }, [searchParams]);

  return (
    <BackGround>
      <HeaderOffset style={{ flex: "none" }}></HeaderOffset>
      <div style={{ flex: 1 }}>
        {currentType && <TestResult type={currentType} />}
      </div>
    </BackGround>
  );
}

interface Props {
  type: ConsumptionType;
}
function TestResult(props: Props) {
  const { type } = props;

  return (
    <Container>
      <YourType>
        <h3>당신의 소비 유형은</h3>
        <h1>{type.title}</h1>
      </YourType>
      <ResultImgWrapper>
        <img src={type.image} alt={`${type.title} 이미지`} />
      </ResultImgWrapper>
      <TagContinaer>
        {type.tags.map((v, i) => (
          <span key={i}>{v}</span>
        ))}
      </TagContinaer>
      <StyledParagraph>{type.description}</StyledParagraph>
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-around",
          marginBottom: "40px",
        }}
      >
        <StyledLink to="/teststart">
          <span>다시하기</span>
        </StyledLink>
        <StyledLink to="/home">
          <span>메인으로</span>
        </StyledLink>
      </div>
    </Container>
  );
}
