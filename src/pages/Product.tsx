import styled from "styled-components";
import { IoMdRemove, IoMdAdd } from "react-icons/io";
import { mobile } from "../responsive";
import {useState, useEffect} from 'react'
import { useLocation } from "react-router-dom";
import { ProductType } from "../components/Products";
import { publicRequest } from "../api/config";

type FilterColorProps = {
  color: string;
};

const Container = styled.div`
  padding: 50px;
  display: flex;
  ${mobile({
    "flex-direction": "column",
    "padding": "10px",
  })}
`;
const ImageContainer = styled.div`
  flex: 1;
`;
const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;
  ${mobile({
    "height": "40vh",
  })}
`;
const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
  ${mobile({
    "padding": "10px",
  })}
`;
const Title = styled.h3`
  font-weight: 200;
  font-size: 36px;
`;
const Description = styled.p`
  margin: 20px 0px;
`;
const Price = styled.span`
  font-weight: 100;
  font-size: 36px;
`;
const FilterContainer = styled.div`
  width: 50%;
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  ${mobile({
    "width": "100%",
  })}
`;
const Filter = styled.div`
  display: flex;
  align-items: center;
`;
const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
`;
const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props: FilterColorProps) => props.color};
  margin: 0px 5px;
  cursor: pointer;
`;
const FilterSize = styled.select`
  margin-left: 10px;
  padding: 5px;
`;
const FilterSizeOption = styled.option``;
const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({
    "width": "100%",
  })}
`;
const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;
const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;
const Button = styled.button`
  padding: 15px;
  border: 2px solid teal;
  background-color: white;
  cursor: pointer;
  font-weight: 500;
  &:hover {
    background-color: #f8f4f4;
  }
`;

export const Product = () => {
  const location = useLocation()
  const id = location.pathname.split('/')[2]
  const [product, setProduct] = useState<ProductType>({} as ProductType)
  const [quantity, setQuantity] = useState(1)
  const [color, setColor] = useState('')
  const [size, setSize] = useState('')

  useEffect(()=>{
    const getProduct = async () => {
      try {
        const res = await publicRequest.get(`products/${id}`)
        setProduct(res.data)
      } catch (error) {
        
      }
    }
    getProduct()
  }, [id])

  const handleClick = () => {
    console.log({color, size});
  }

  return (
    <Container>
      <ImageContainer>
        <Image src={product.image} />
      </ImageContainer>
      <InfoContainer>
        <Title>{product.title}</Title>
        <Description>{product.description}</Description>
        <Price>$ {product.price}</Price>
        <FilterContainer>
          <Filter>
            <FilterTitle>Color</FilterTitle>
            {product?.color?.map(item=><FilterColor color={item} key={item} onClick={()=>setColor(item)}/>)}
          </Filter>
          <Filter>
            <FilterTitle>Size</FilterTitle>
            <FilterSize onChange={(e)=>setSize(e.target.value)}>
            {product?.size?.map(item=><FilterSizeOption key={item}>{item}</FilterSizeOption>)}
            </FilterSize>
          </Filter>
        </FilterContainer>
        <AddContainer>
          <AmountContainer>
            <IoMdRemove onClick={()=>{
              if(quantity>1) {
                setQuantity(prev=>prev-1)
              }
              }} />
            <Amount>{quantity}</Amount>
            <IoMdAdd onClick={()=>setQuantity(prev=>prev+1)} />
          </AmountContainer>
          <Button onClick={handleClick}>Add to cart</Button>
        </AddContainer>
      </InfoContainer>
    </Container>
  );
};
