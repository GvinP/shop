import {useState, ChangeEvent} from 'react'
import styled from "styled-components";
import { mobile } from "../responsive";
import { useLocation } from "react-router-dom"
import { Products } from '../components/Products';

const Container = styled.div``;
const Title = styled.h1`
  margin: 20px;
`;
const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Filter = styled.div`
  margin: 20px;
  ${mobile({
    "margin": "0px 20px",
    "display": "flex",
    "flex-direction": "column",
  })}
`;
const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
  ${mobile({
    "margin-right": "0px",
  })}
`;
const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
  ${mobile({
    "margin": "10px 0px",
  })}
`;
const Option = styled.option``;

export const ProductList = () => {
  const [filters, setFilters] = useState({})
  const [sort, setSort] = useState("newest")
  const location = useLocation()
  const category = location.pathname.split('/')[2]

  const handleFilters = (e: ChangeEvent<HTMLSelectElement>) => {
      setFilters({
        ...filters,
        [e.target.name]: e.target.value
      })
  }
  
  return (
    <Container>
      <Title>WOMEN'S TOPS</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter products: </FilterText>
          <Select defaultValue={"Color"} name="color" onChange={handleFilters}>
            <Option disabled>
              Color
            </Option>
            <Option>white</Option>
            <Option>black</Option>
            <Option>red</Option>
            <Option>blue</Option>
            <Option>brown</Option>
            <Option>green</Option>
          </Select>
          <Select defaultValue={"Size"} name="size" onChange={handleFilters}>
            <Option disabled>
              Size
            </Option>
            <Option>XS</Option>
            <Option>S</Option>
            <Option>M</Option>
            <Option>L</Option>
            <Option>XL</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort products: </FilterText>
          <Select defaultValue={"Newest"} onChange={(e)=>setSort(e.target.value)}>
            <Option value={'newest'}>Newest</Option>
            <Option value={'asc'}>Price (asc)</Option>
            <Option value={'desc'}>Price (desc)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products category={category} filters={filters} sort={sort}/>
    </Container>
  );
};
