import styled from "styled-components";
import { AiOutlineSearch, AiOutlineShoppingCart } from "react-icons/ai";
import { mobile } from "../responsive";
import { useAppSelector } from "../app/hooks";
import { Link } from "react-router-dom";

const Container = styled.div`
  height: 60px;
  ${mobile({
    height: "50px",
  })}
`;
const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-beetween;
  ${mobile({
    padding: "10px 0px",
  })}
`;
const LeftBlock = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;
const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobile({
    display: "none",
  })}
`;
const SearchContainer = styled.div`
  border: 1px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;
const Input = styled.input`
  border: none;
  ${mobile({
    width: "50px",
  })}
`;
const CenterBlock = styled.div`
  flex: 1;
  text-align: center;
`;
const Logo = styled.h1`
  font-weight: bold;
  color: black;
  margin: 0;
  ${mobile({
    "font-size": "24px",
  })}
`;
const RightBlock = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({
    "justify-content": "center",
    flex: "2",
  })}
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  position: relative;
  margin-left: 25px;
  ${mobile({
    "font-size": "12px",
    "margin-left": "10px",
  })}
`;
const Badge = styled.div`
  border-radius: 50%;
  background-color: teal;
  color: white;
  width: 15px;
  height: 15px;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  top: -10px;
  left: 10px;
`;
export const Navbar = () => {
  const quantity = useAppSelector((state) => state.cart.quantity);
  return (
    <Container>
      <Wrapper>
        <LeftBlock>
          <Language>en</Language>
          <SearchContainer>
            <Input placeholder="Search" />
            <AiOutlineSearch size={16} color={"gray"} />
          </SearchContainer>
        </LeftBlock>
        <CenterBlock>
          <Link to={'/'} style={{textDecoration: "none"}}>
            <Logo>Shop</Logo>
          </Link>
        </CenterBlock>
        <RightBlock>
          <Link to={"/login"}>
            <MenuItem>Sign In</MenuItem>
          </Link>
          <Link to={"/register"}>
            <MenuItem>Registration</MenuItem>
          </Link>
          <Link to={"/cart"}>
            <MenuItem>
              <AiOutlineShoppingCart />
              {!!quantity && <Badge>{quantity}</Badge>}
            </MenuItem>
          </Link>
        </RightBlock>
      </Wrapper>
    </Container>
  );
};
