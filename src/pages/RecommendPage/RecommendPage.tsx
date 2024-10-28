import React, { useRef } from "react";
import { Link } from "react-router-dom";

import {
  BodyWrapper,
  PageTitle,
  PageDescription,
  ProductList,
  RecommendProduct,
  TestCard,
  CustomList,
  IconWrapper,
} from "./styles";
import travelLogImage from "../../images/recommend_travellog.png";
import sweatHanaImage from "../../images/recommend_sweathana.png";
import youthAccountImage from "../../images/recommend_youthaccount.png";
import { ReactComponent as WalletIcon } from "../../images/recommend_wallet.svg";
import { ReactComponent as RecommendIcon } from "../../images/recommend_producticon.svg";
import ProductCard from "../../components/ProductCard/ProductCard";
import { ProductType } from "../../type";

const RecommendPage: React.FC = () => {
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
    <BodyWrapper>
      <PageTitle>
        <span>맞춤형 상품 추천</span>
      </PageTitle>
      <PageDescription>
        <span>목표와 소비성향에 따른 맞춤 상품을 추천 받아보세요.</span>
      </PageDescription>
      {/* 상품 리스트가 표시되는 섹션 */}
      <ProductList>
        {productList.current.map((v, i) => (
          <ProductCard key={i} product={v} />
        ))}
      </ProductList>
      {/* 추천 적금 */}
      <CustomList>
        <RecommendProduct>
          <div>
            <span>
              홍길동님께
              <br />
              추천하는 적금
            </span>
          </div>
          <div>
            <IconWrapper>
              <RecommendIcon />
            </IconWrapper>
          </div>
        </RecommendProduct>
        <Link
          to="/teststart"
          style={{
            textDecoration: "none",
            color: "inheirt",
          }}
        >
          <TestCard>
            <div>
              <span>
                소비성향
                <br />
                Test
              </span>
            </div>
            <div>
              <IconWrapper>
                <WalletIcon />
              </IconWrapper>
            </div>
          </TestCard>
        </Link>
      </CustomList>
    </BodyWrapper>
  );
};

export default RecommendPage;
