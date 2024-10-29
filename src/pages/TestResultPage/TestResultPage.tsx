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
import Result1Img from "../../images/TestresultImg.Money.png";
import Result2Img from "../../images/TestresultImg.Nerd.png";
import Result3Img from "../../images/TestresultImg_Love.png";

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
        title: "돈 쓰는 게 제일 좋아! 욜로족",
        image: Result1Img,
        tags: ["#YOLO", "#___P"],
        description:
          "돈 쓰는 즐거움을 아는 당신!\n돈 모으는 즐거움도 한 번 느껴보실래요?",
      },
      {
        title: "욜로와 요노 그 사이 어딘가",
        image: Result2Img,
        tags: ["#YOLO", "#_S_P"],
        description:
          "돈 쓰는 즐거움과 자산 관리의 중요성을 아시는군요!\n 자산을 모으기 위해 조금만 더 노력해볼까요?",
      },
      {
        title: "마지막에 웃는 \n 진짜 승리자!",
        image: Result3Img,
        tags: ["#YONO", "#___J"],
        description:
          "당장의 소비를 참고 자산을 관리하는 당신!\n부자가 될 자격이 있습니다!",
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
