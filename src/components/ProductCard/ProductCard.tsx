import { ProductType } from "../../type";
import {
  Card,
  CardTitle,
  CardSubTitle,
  Info,
  Wrapper,
  ProductTitle,
} from "./styles";

interface Props {
  product: ProductType;
}

export default function ProductCard(props: Props) {
  const { product } = props;
  return (
    <Wrapper>
      <Card style={{ backgroundImage: `url(${product.image})` }}>
        <CardTitle>{product.title}</CardTitle>
        <CardSubTitle>{product.subtitle}</CardSubTitle>
        <Info>{product.description}</Info>
      </Card>
      <ProductTitle>{product.title}</ProductTitle>
    </Wrapper>
  );
}
