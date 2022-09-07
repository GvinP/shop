import { useState, useEffect } from "react";
import styled from "styled-components";
import { publicRequest } from "../api/config";
import { Product } from "./Product";

const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export type ProductsPropsType = {
  category?: string;
  filters?: {
    color?: string;
    size?: string;
  };
  sort?: string;
};
export type ProductType = {
  _id: string;
  image: string;
  title: string;
  description: string;
  color: string[];
  size: string[];
  category: string[];
  price: number;
  createdAt: string;
};

export const Products = ({ category, filters, sort }: ProductsPropsType) => {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<ProductType[]>([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await publicRequest.get(`products${category ? "?category=" + category : ""}`);
        setProducts(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getProducts();
  }, [category]);

  useEffect(() => {
    //@ts-ignore
    category &&setFilteredProducts(products.filter((item) =>Object.entries(filters).every(([key, value]) =>item[key].includes(value))));
  }, [products, filters, category]);

  useEffect(() => {
    if (sort === "newest") {
      setFilteredProducts((prev) =>
        prev.sort((a, b) => Date.parse(b.createdAt) - Date.parse(a.createdAt))
      );
    } else if (sort === "asc") {
      setFilteredProducts((prev) => prev.sort((a, b) => a.price - b.price));
    } else if (sort === "desc") {
      setFilteredProducts((prev) => prev.sort((a, b) => b.price - a.price));
    }
  }, [sort]);

  return (
    <Container>
      {category
        ? filteredProducts.map((item) => <Product item={item} key={item._id} />)
        : products
            .slice(0, 8)
            .map((item) => <Product item={item} key={item._id} />)}
    </Container>
  );
};
