import React from "react";

import {
  SubText2,
  Stack,
  StyledMainText2,
  CenterFlexBox,
  Con2DivforImage,
  Box,
  CarouselWrapper,
} from "./styles";

import beer from "../../images/beer.png";
import car from "../../images/car.png";
import carrier from "../../images/carrier.png";
import cart from "../../images/cart.png";
import clothes from "../../images/clothes.png";
import gift from "../../images/gift.png";
import house from "../../images/house.png";
import meet from "../../images/meet.png";
import money from "../../images/money.png";
import { HeaderOffset } from "../../components/Header/styles";

const Carousel1: React.FC = () => {
  const images = [beer, car, carrier, cart, clothes, gift, house, meet, money];

  return (
    <CarouselWrapper style={{ backgroundColor: "#006b6b" }}>
      <div style={{ width: "100%", height: "100%", display: "flex" }}>
        <div style={{ flex: 1 }}>
          <CenterFlexBox>
            <Stack>
              <StyledMainText2>
                매일매일
                <br />
                목표로
                <br /> 차근차근
              </StyledMainText2>
              <SubText2>
                목표를 내가 등록할 수 있어요. <br />
                금액은 자유롭게 선택할 수 있어요.
              </SubText2>
            </Stack>
          </CenterFlexBox>
        </div>
        <div style={{ flex: 1, marginRight: "40px" }}>
          <CenterFlexBox>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)", // 3열로 설정
                gap: "30px", // 박스 간격
              }}
            >
              {images.map((imgSrc, index) => (
                <Box key={index}>
                  <Con2DivforImage src={imgSrc} alt={`아이템 ${index + 1}`} />
                </Box>
              ))}
            </div>
          </CenterFlexBox>
        </div>
      </div>
      <HeaderOffset></HeaderOffset>
    </CarouselWrapper>
  );
};

export default Carousel1;
