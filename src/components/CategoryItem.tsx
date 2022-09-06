import styled from "styled-components";
import { mobile } from "../responsive";
import { CategoryItemType } from "./Categories";
import {Link} from "react-router-dom"

const Container = styled.div`
    flex: 1;
    margin: 3px;
    height: 70vh;
    position: relative;
`;

const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    ${mobile({
    "height": "40vh",
  })}
`;
const Info = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;
const Title = styled.h3`
    color: white;
    margin-bottom: 20px;
`;
const Button = styled.button`
    border: none;
    padding: 10px;
    background-color: white;
    color: gray;
    font-weight: 600;
    cursor: pointer;
`;

type CategoryItemProps = {
    item: CategoryItemType
}

export const CategoryItem = ({item}:CategoryItemProps) => {
  return (
    <Container>
        <Link to={`/products/${item.category}`}>
        <Image src={item.image}/>
        <Info>
            <Title>{item.title}</Title>
            <Button>Shop now</Button>
        </Info>
        </Link>
    </Container>
  )
}
