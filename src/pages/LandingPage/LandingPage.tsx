import React, { useEffect, useRef, useState } from "react";
import styled, { keyframes } from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import {
  Container,
  SectionWrapper,
  CenterFlexBox,
  Stack,
  StyledMainText,
  SubText,
  Con1Link,
  Con3StyleDiv,
  Con3Img,
} from "./styles";
import { CenterFlexContainer } from "../ConnectingAccoutPage/styles";
import LandingPageSlider from "../../components/LandingPage/LandingPageSlider";
import hand from "../../images/꿈돌이손.png";
import thumb from "../../images/thumb.png";
import trophy from "../../images/trophy.png";

// Slider 설정을 위한 인터페이스
interface SliderSettings {
  dots: boolean;
  draggable: boolean;
  infinite: boolean;
  slidesToShow: number;
  slidesToScroll: number;
  autoplay: boolean;
  speed: number;
  autoplaySpeed: number;
  variableWidth: boolean;
  cssEase: string;
  arrows: boolean;
}

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const float = keyframes`
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-20px);
  }
  100% {
    transform: translateY(0px);
  }
`;

const AnimatedMainText = styled(StyledMainText)`
  opacity: 0;
  animation: ${fadeIn} 1s ease-out forwards;
  animation-delay: 0.3s; // 가장 먼저 나타남
`;

const AnimatedSubText = styled(SubText)`
  opacity: 0;
  animation: ${fadeIn} 1s ease-out forwards;
  animation-delay: 0.6s; // 메인 텍스트 다음
`;

const AnimatedLink = styled(Con1Link)`
  opacity: 0;
  animation: ${fadeIn} 1s ease-out forwards;
  animation-delay: 0.9s; // 서브 텍스트 다음
`;

// 이미지를 위한 래퍼 컴포넌트
const FloatingImageWrapper = styled.div`
  opacity: 0;
  animation:
    ${fadeIn} 1s ease-out forwards,
    ${float} 3s ease-in-out infinite;
  animation-delay: 0.6s;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;
interface AnimatedTextProps {
  opacity: number;
  translateY: number;
  isVisible: boolean;
}

const AnimatedText = styled.div<AnimatedTextProps>`
  font-style: normal;
  font-weight: 700;
  font-size: 72px;
  line-height: 104px;
  letter-spacing: -0.02em;
  color: ${(props) => `rgba(33, 37, 41, ${props.opacity})`};
  transform: translateY(${(props) => props.translateY}px);
  opacity: ${(props) => (props.isVisible ? 1 : 0)}; // 전체 요소의 투명도
  transition: all 1.2s cubic-bezier(0.22, 1, 0.36, 1);
  will-change: transform, opacity, color; // 성능 최적화
`;

const ScrollAnimatedText: React.FC = () => {
  const [opacity, setOpacity] = useState<number>(0.3);
  const [translateY, setTranslateY] = useState<number>(200); // 시작 위치를 200px로 증가
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const textRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const options: IntersectionObserverInit = {
      threshold: Array.from({ length: 100 }, (_, i) => i / 100),
      rootMargin: "0px 0px -150px 0px", // 더 일찍 시작하도록 수정
    };

    const callback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry: IntersectionObserverEntry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);

          // 부드러운 움직임을 위해 비율 조정
          const ratio = Math.pow(entry.intersectionRatio, 1.5); // 이동 곡선을 더 자연스럽게

          // 투명도 계산 - 더 부드러운 변화
          const newOpacity = 0.3 + ratio * 0.7;
          setOpacity(newOpacity);

          // 이동 거리 계산 - 더 부드러운 변화
          const newTranslateY = 200 - ratio * 200;
          setTranslateY(Math.max(0, newTranslateY)); // 음수 값 방지
        } else {
          setIsVisible(false);
          setOpacity(0.3);
          setTranslateY(200);
        }
      });
    };

    const observer = new IntersectionObserver(callback, options);

    if (textRef.current) {
      observer.observe(textRef.current);
    }

    return () => {
      if (textRef.current) {
        observer.unobserve(textRef.current);
      }
    };
  }, []);

  return (
    <AnimatedText
      ref={textRef}
      opacity={opacity}
      translateY={translateY}
      isVisible={isVisible}
    >
      꾸준히 도전하고 성취감까지!
    </AnimatedText>
  );
};

const LandingPage: React.FC = () => {
  const settings: SliderSettings = {
    dots: false,
    draggable: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    speed: 5000,
    autoplaySpeed: 5000,
    variableWidth: true,
    cssEase: "linear",
    arrows: false,
  };

  return (
    <Container>
      <SectionWrapper style={{ height: "88vh" }}>
        <div
          style={{
            width: "inherit",
            height: "100%",
            display: "flex",
            flexWrap: "wrap-reverse",
          }}
        >
          <div style={{ flex: 1 }}>
            <CenterFlexBox>
              <Stack>
                <AnimatedMainText>자산을 하나로</AnimatedMainText>
                <AnimatedSubText>
                  오늘도 부자될 생각만 하셨나요?
                  <br /> 당신의 자산을 하나로 관리하세요.
                </AnimatedSubText>
                <AnimatedLink to="/login">
                  <span>시작하기</span>
                </AnimatedLink>
              </Stack>
            </CenterFlexBox>
          </div>
          <div style={{ flex: 1 }}>
            <CenterFlexBox>
              <FloatingImageWrapper>
                <img src={hand} alt="hand" />
              </FloatingImageWrapper>
            </CenterFlexBox>
          </div>
        </div>
      </SectionWrapper>
      <LandingPageSlider />
      <SectionWrapper>
        <CenterFlexContainer style={{ width: "100%", height: "50%" }}>
          <ScrollAnimatedText />
        </CenterFlexContainer>
        <Con3StyleDiv>
          <div style={{ marginTop: "40px" }}>
            <Slider {...settings}>
              <span>함께&nbsp;</span>
              <span>도전하고&nbsp;</span>
              <span>목표를&nbsp;</span>
              <span>이루어&nbsp;</span>
              <span>성취감까지 </span>
              <span>
                <Con3Img src={thumb} alt="thumb" />
              </span>
              <span>즐거운&nbsp;</span>
              <span>도전</span>
              <span>
                <Con3Img src={trophy} alt="trophy" />
              </span>
              <span>함께&nbsp;</span>
              <span>도전하고&nbsp;</span>
              <span>목표를&nbsp;</span>
              <span>이루어&nbsp;</span>
              <span>성취감까지</span>
              <span>
                <Con3Img src={thumb} alt="thumb" />
              </span>
              <span>즐거운&nbsp;</span>
              <span>도전</span>
              <span>
                <Con3Img src={trophy} alt="trophy" />
              </span>
            </Slider>
          </div>
          <div>
            <Slider {...settings}>
              <span>
                <Con3Img src={thumb} alt="thumb" />
              </span>
              <span>즐거운</span>
              <span>도전</span>
              <span>
                <Con3Img src={trophy} alt="trophy" />
              </span>
              <span>도전하고&nbsp;</span>
              <span>목표를&nbsp;</span>
              <span>이루어&nbsp;</span>
              <span>성취감까지</span>
              <span>
                <Con3Img src={thumb} alt="thumb" />
              </span>
              <span>즐거운&nbsp;</span>
              <span>도전</span>
              <span>
                <Con3Img src={trophy} alt="trophy" />
              </span>
              <span>도전하고&nbsp;</span>
              <span>목표를&nbsp;</span>
              <span>이루어&nbsp;</span>
              <span>성취감까지</span>
            </Slider>
          </div>
        </Con3StyleDiv>
      </SectionWrapper>
    </Container>
  );
};

export default LandingPage;
