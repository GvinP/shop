import styled from "styled-components";
import { IoMdRemove, IoMdAdd } from "react-icons/io";
import { mobile } from "../responsive";

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
  return (
    <Container>
      <Title>Your bag</Title>
      <TopBlock>
        <TopButton>Continue shopping</TopButton>
        <TopTexts>
          <TopText>Shopping bag(2)</TopText>
          <TopText>Your wishlist(0)</TopText>
        </TopTexts>
        <TopButton variant={"filled"}>Checkout now</TopButton>
      </TopBlock>
      <BottomBlock>
        <Info>
          <Product>
            <ProductDetail>
              <Image src="https://lp2.hm.com/hmgoepprod?set=source[/30/8c/308c1b77bfe7c7b4f5631361de4f8e06694e52ac.jpg],origin[dam],category[ladies_shirtsblouses_shirts],type[DESCRIPTIVESTILLLIFE],res[y],hmver[2]&call=url[file:/product/main]" />
              <Details>
                <ProductName>
                  <b>Product: </b>Oversized Corduroy Shirt
                </ProductName>
                <ProductId>
                  <b>ID: </b>312324
                </ProductId>
                <ProductColor color="brown" />
                <ProductSize>
                  <b>Size: </b>XS
                </ProductSize>
              </Details>
            </ProductDetail>
            <PriceDetail>
              <ProductAmountContainer>
                <IoMdRemove />
                <ProductAmount>2</ProductAmount>
                <IoMdAdd />
              </ProductAmountContainer>
              <ProductPrice>$ 20</ProductPrice>
            </PriceDetail>
          </Product>
          <Hr />
          <Product>
            <ProductDetail>
              <Image src="https://lp2.hm.com/hmgoepprod?set=source[/86/ad/86add6324bd249d58526b2c69add27b7e0103389.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[y],hmver[2]&call=url[file:/product/main]" />
              <Details>
                <ProductName>
                  <b>Product: </b>Hooded Sweatshirt Dress
                </ProductName>
                <ProductId>
                  <b>ID: </b>543234
                </ProductId>
                <ProductColor color="black" />
                <ProductSize>
                  <b>Size: </b>XS
                </ProductSize>
              </Details>
            </ProductDetail>
            <PriceDetail>
              <ProductAmountContainer>
                <IoMdRemove />
                <ProductAmount>1</ProductAmount>
                <IoMdAdd />
              </ProductAmountContainer>
              <ProductPrice>$ 30</ProductPrice>
            </PriceDetail>
          </Product>
        </Info>
        <Summary>
          <SummaryTitle>Order Summary</SummaryTitle>
          <SummaryItem>
            <SummaryItemText>Subtotal</SummaryItemText>
            <SummaryItemPrice>$ 70</SummaryItemPrice>
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
            <SummaryItemPrice>$ 70</SummaryItemPrice>
          </SummaryItem>
          <Button>Checkout now</Button>
        </Summary>
      </BottomBlock>
    </Container>
  );
};
