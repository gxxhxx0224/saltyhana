import React, { useRef } from "react";

import * as styled from "../RecommendPage/styles";
import { Calendar, GoalProgressContainer, PageContainer } from "./styles";
import travelLogImage from "../../images/recommend_travellog.png";
import sweatHanaImage from "../../images/recommend_sweathana.png";
import youthAccountImage from "../../images/recommend_youthaccount.png";
import { ProductType } from "../../type";
import ProductCard from "../../components/ProductCard/ProductCard";

// HomePage 컴포넌트: 홈, 대시보드 페이지를 렌더링하는 함수형 컴포넌트
const HomePage: React.FC = () => {
  const productList = useRef<ProductType[]>([
    {
      title: "트래블 로그 여행 적금",
      subtitle: "여행 준비의 시작",
      image: travelLogImage,
      description: "연(세전, 5년)\n4.50% ~ 6.00%",
    },
    {
      title: "달달하나",
      subtitle: "",
      image: sweatHanaImage,
      description: "혜택(2백만원까지)\n기본 0.10%~최고 3.00%(연, 세전)",
    },
    {
      title: "하나 청년도약 계좌",
      subtitle: "하나와 함께 도약",
      image: youthAccountImage,
      description: "연(세전, 5년)\n4.50% ~ 6.00%",
    },
  ]);

  return (
    <PageContainer>
      {/* 목표, 진행도 박스 레이아웃  */}
      <GoalProgressContainer
        goal={"여행"}
        startdate={"2024.10.01"}
        enddate={"2024.12.23"}
        progress={80}
      />
      {/* 주간 캘린더 레이아웃 */}
      <Calendar showStamp={[true, false, false, false, false, false, false]} />
      {/* 상품 리스트가 표시되는 섹션 */}
      <styled.ProductList>
        {productList.current.map((v, i) => (
          <ProductCard key={i} product={v} />
        ))}
      </styled.ProductList>
    </PageContainer>
  );
};

export default HomePage;
