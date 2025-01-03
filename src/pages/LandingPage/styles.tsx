import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
`;

export const CarouselWrapper = styled.div`
  width: 100%;
  height: 80vh;
`;

export const SectionWrapper = styled.section`
  width: 100%;
  height: 100vh;
`;

export const CenterFlexBox = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Stack = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Con = styled.div`
  h1 {
    color: #333;
  }

  > div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 100vh;
  }
`;

export const Container1 = styled.div`
  background-color: #e9edf08f;
  h1 {
    color: #333;
  }

  > div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100vh;
    height: 100vh;
  }
`;

export const Con1Link = styled(Link)`
  width: 342.78px;
  height: 62.74px;

  margin-top: 30px;
  border: none;
  background: #008485;
  border-radius: 20px;

  display: flex;
  justify-content: center;
  align-items: center;

  text-decoration: none;
  text-align: center;

  display: flex;
  justify-content: center;
  align-items: center;

  color: #ffffff;

  &:hover {
    background: #006f6f;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  }

  > span {
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 35px;

    color: #ffffff;
  }
`;

export const StyledMainText = styled.span`
  font-weight: 700;
  font-size: 72px;
  line-height: 87px;
  letter-spacing: -0.02em;
  margin-bottom: 18px;

  color: #000000;
`;

export const TitleImg = styled.img`
  width: 80px;
  padding: 5px;
  vertical-align: bottom;
`;

export const RichText = styled.div`
  font-weight: 600;
  font-size: 32px;
  line-height: 30px;
  color: #000;
  margin-bottom: 8px;
`;

export const SubText = styled.div`
  font-weight: 350;
  font-size: 22px;
  line-height: 29px;
  color: #000;
  margin-bottom: 10px;
`;

export const StyledMainText2 = styled(StyledMainText)`
  font-size: 80px;
  color: #ffffff;
  line-height: 95px;
  margin-bottom: 50px;
`;

export const SubText2 = styled(SubText)`
  color: #ffffff;
`;

export const Img = styled.img``;

export const StyleDiv = styled.div`
  background-color: #006b6b;
  width: 100vh;
  height: 100vh;
`;

export const Container2 = styled.div`
  background-color: #006b6b;
  height: 100vh;
  h1 {
    color: #333;
  }
`;

export const Container22 = styled.div`
  background-color: #0063b2;
  height: 100vh;
  width: 100wh;
  h1 {
    color: #333;
  }
`;

export const Con22Box = styled.div`
  background-color: #ffffff;
  border-radius: 20px;
`;

export const Con2MainText = styled.p`
  font-style: normal;
  font-weight: 900;
  font-size: 80px;
  line-height: 105px;
  letter-spacing: -0.02em;
  margin-top: 0;
  margin-bottom: 30px;

  color: #ffffff;
`;

export const Con2SubText = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 30px;
  letter-spacing: -0.02em;

  color: #ffffff;
`;

export const Con22SubText = styled.p`
  line-height: 1.5;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 30px;
  letter-spacing: -0.02em;

  color: #ffffff;
`;

export const Con22p2 = styled.p`
  font-weight: 700;
  font-size: 20px;
`;

export const ElementImg = styled.img`
  aspect-ratio: 1;
  /* width: calc(100% - 20px); */
  width: 80%;
  height: auto;
`;

export const ConsumptionTestWrapper = styled(Stack)`
  margin: 0 5%;
  background-color: #ffffff;
  border-radius: 20px;
  padding: 20px 30px 40px 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  * {
    text-align: center;
  }
`;

export const ElementsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 1px;
  justify-content: center;
  > div {
    align-items: center;
  }
`;

export const Con22Button = styled.button`
  width: 342.78px;
  height: 62.74px;
  border: none;
  background: #008485;
  border-radius: 20px;

  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 35px;

  color: #ffffff;

  flex: none;
  order: 0;
  flex-grow: 0;

  &:hover {
    background: #006f6f;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  }
`;

export const Con2DivforBox = styled.div`
  width: 150px;
  height: 152px;

  background-color: #ffffff;
  border-radius: 20px;
`;

export const Con2DivforImage = styled.img`
  width: 150px;
  height: 152px;
  object-fit: cover; // 비율 유지하면서 크기 조정
`;

export const Con22h1 = styled.h1`
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 700;
  font-size: 50px;
  margin-top: 20px;
  margin-bottom: 0;

  color: #000000;
`;

export const Con22p = styled.p`
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  margin-top: 0;
  margin-bottom: 60px;

  color: #000000;
`;

export const Box = styled.div`
  width: 150px;
  height: 152px;

  background-color: #ffffff;
  border-radius: 20px;
`;

export const Con3SubText = styled.p`
  font-style: normal;
  font-weight: 700;
  font-size: 72px;
  line-height: 104px;
  letter-spacing: -0.02em;

  color: #212529;
`;

export const Con3StyleDiv = styled.div`
  width: 100%;
  height: 38%;
  background: #2e3c7e;

  display: flex;
  flex-direction: column;
  justify-content: center;

  font-style: normal;
  font-weight: 1000;
  line-height: 64px;
  color: #ffffff;

  * span {
    font-size: 72px;
    word-break: normal;
  }
`;

export const OverflowBox = styled.div`
  overflow-x: auto;
  width: 100%;
  > div {
    display: flex;
    width: max-content;
    flex-wrap: nowrap;
  }
`;

export const Con3Img = styled.img`
  width: 100px;
  height: 100px;
`;

export const FooterImg = styled.img`
  width: 100%;
  height: auto;
  margin-top: 200px;
`;
