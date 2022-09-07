import styled from "styled-components";
import { IoMdRemove, IoMdAdd } from "react-icons/io";
import { mobile } from "../responsive";
import { useAppSelector } from "../app/hooks";

type TopButtonProps = {
  variant?: "filled";
};

type ProductColorProps = {
  color: string;
};
type SummaryItemProps = {
  variant?: "total";
};

const Container = styled.div`
  padding: 20px;
  ${mobile({
    "padding": "10px",
  })}
`;
const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;
const TopBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 30px;
`;
const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props: TopButtonProps) => props.variant === "filled" && "none"};
  background-color: ${(props: TopButtonProps) =>
    props.variant === "filled" ? "teal" : "transparent"};
  color: ${(props: TopButtonProps) => props.variant === "filled" && "white"};
`;
const TopTexts = styled.div`
  ${mobile({
    "display": "none",
  })}
`;
const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
`;
const BottomBlock = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({
    "flex-direction": "column",
  })}
`;
const Info = styled.div`
  flex: 3;
`;
const Product = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({
    "flex-direction": "column",
  })}
`;
const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;
const Image = styled.img`
  width: 200px;
`;
const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
const ProductName = styled.span``;
const ProductId = styled.span``;
const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props: ProductColorProps) => props.color};
`;
const ProductSize = styled.span``;
const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;
const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;
  ${mobile({
    "margin": "5px 15px",
  })}
`;
const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
  ${mobile({
    "margin-bottom": "20px",
  })}
`;
const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`;
const Summary = styled.div`
  flex: 1;
  border: 1px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
`;
const SummaryTitle = styled.h3`
  font-size: 40px;
  font-weight: 200;
  margin: 0;
`;
const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
font-weight: ${(props: SummaryItemProps) => props.variant === "total" && "700"};
font-size: ${(props: SummaryItemProps) => props.variant === "total" && "24px"};
`;
const SummaryItemText = styled.span`
`;
const SummaryItemPrice = styled.span`
 
`;
const Button = styled.button`
    width: 100%;
    padding: 10px;
    background-color: teal;
    border: none;
    color: white;
`;

export const Cart = () => {
  const products = useAppSelector(state=>state.cart.products)
  const quantity = useAppSelector(state=>state.cart.quantity)
  const total = useAppSelector(state=>state.cart.total)
  return (
    <Container>
      <Title>Your bag</Title>
      <TopBlock>
        <TopButton>Continue shopping</TopButton>
        <TopTexts>
          <TopText>Shopping bag({quantity})</TopText>
          <TopText>Your wishlist(0)</TopText>
        </TopTexts>
        <TopButton variant={"filled"}>Checkout now</TopButton>
      </TopBlock>
      <BottomBlock>
        <Info>
            {products.map(product=>(
          <Product>
              <ProductDetail>
              <Image src={product.image} />
              <Details>
                <ProductName>
                  <b>Product: </b>{product.title}
                </ProductName>
                <ProductId>
                  <b>ID: </b>{product._id}
                </ProductId>
                <ProductColor color={product.color} />
                <ProductSize>
                  <b>Size: </b>{product.size}
                </ProductSize>
              </Details>
            </ProductDetail>
            <PriceDetail>
              <ProductAmountContainer>
                <IoMdRemove />
                <ProductAmount>{product.quantity}</ProductAmount>
                <IoMdAdd />
              </ProductAmountContainer>
              <ProductPrice>$ {product.price*product.quantity}</ProductPrice>
            </PriceDetail>
          </Product>
            ))}
            <Hr />
        </Info>
        <Summary>
          <SummaryTitle>Order Summary</SummaryTitle>
          <SummaryItem>
            <SummaryItemText>Subtotal</SummaryItemText>
            <SummaryItemPrice>$ {total}</SummaryItemPrice>
          </SummaryItem>
          <SummaryItem>
            <SummaryItemText>Estimated shipping</SummaryItemText>
            <SummaryItemPrice>$ 5.90</SummaryItemPrice>
          </SummaryItem>
          <SummaryItem>
            <SummaryItemText>Shipping discount</SummaryItemText>
            <SummaryItemPrice>$ -5.90</SummaryItemPrice>
          </SummaryItem>
          <SummaryItem variant={"total"}>
            <SummaryItemText>Total</SummaryItemText>
            <SummaryItemPrice>$ {total}</SummaryItemPrice>
          </SummaryItem>
          <Button>Checkout now</Button>
        </Summary>
      </BottomBlock>
    </Container>
  );
};
