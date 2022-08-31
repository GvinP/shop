import styled from "styled-components";
import { AiOutlineSearch, AiOutlineShoppingCart } from "react-icons/ai";

const Container = styled.div`
  height: 60px;
`;
const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-beetween;
`;
const LeftBlock = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;
const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
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
`;
const CenterBlock = styled.div`
  flex: 1;
  text-align: center;
`;
const Logo = styled.h1`
  font-weight: bold;
  margin: 0;
`;
const RightBlock = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  position: relative;
  margin-left: 25px;
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
  return (
    <Container>
      <Wrapper>
        <LeftBlock>
          <Language>en</Language>
          <SearchContainer>
            <Input />
            <AiOutlineSearch size={16} color={'gray'} />
          </SearchContainer>
        </LeftBlock>
        <CenterBlock>
          <Logo>Shop</Logo>
        </CenterBlock>
        <RightBlock>
          <MenuItem>Sign In</MenuItem>
          <MenuItem>Registration</MenuItem>
          <MenuItem>
            <AiOutlineShoppingCart />
            <Badge>0</Badge>
          </MenuItem>
        </RightBlock>
      </Wrapper>
    </Container>
  );
};
