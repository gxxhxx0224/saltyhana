import React from "react";
import * as styled from "./styles";
import {
  CenterFlexBox,
  Stack,
  ElementImg,
  ElementsWrapper,
  ConsumptionTestWrapper,
  Con22h1,
  Con22p,
  Con22p2,
  CarouselWrapper,
} from "./styles";
import img1 from "../../images/TeststartImg1.png";
import img2 from "../../images/TeststartImg2.png";
import img3 from "../../images/TeststartImg3.png";
import { HeaderOffset } from "../../components/Header/styles";

const Carousel2: React.FC = () => {
  return (
    <CarouselWrapper style={{ backgroundColor: "#0063b2" }}>
      <div style={{ width: "100%", height: "100%", display: "flex" }}>
        <div style={{ flex: 1 }}>
          <CenterFlexBox>
            <Stack>
              <div>
                <div>
                  <styled.Con2MainText>
                    나만의
                    <br />
                    소비성향
                    <br /> 찾아보기
                  </styled.Con2MainText>
                </div>
                <div>
                  <styled.Con22SubText>
                    소비 성향을 분석하고
                    <br /> 내가 어떤 타입에 속하는지 확인해보세요.
                    <br />
                    나에게는 어떤 금융 상품이 적합할까요?
                  </styled.Con22SubText>
                </div>
              </div>
            </Stack>
          </CenterFlexBox>
        </div>
        <div style={{ flex: 1, marginRight: "150px" }}>
          <CenterFlexBox>
            <ConsumptionTestWrapper>
              <Con22h1>내 소비 성향 찾기</Con22h1>
              <Con22p>
                내 소비 성향을 찾고 맞춤형 금융 상품을 찾을 수 있어요.
              </Con22p>
              <ElementsWrapper>
                <Stack>
                  <ElementImg src={img1} />
                  <Con22p2>8개 질문으로 간단하게!</Con22p2>
                </Stack>
                <Stack>
                  <ElementImg src={img2} />
                  <Con22p2>소비 성향을 분석!</Con22p2>
                </Stack>
                <Stack>
                  <ElementImg src={img3} />
                  <Con22p2>맞춤형 금융 상품 추천까지!</Con22p2>
                </Stack>
              </ElementsWrapper>
            </ConsumptionTestWrapper>
          </CenterFlexBox>
        </div>
      </div>
      <HeaderOffset></HeaderOffset>
    </CarouselWrapper>
  );
};

export default Carousel2;
