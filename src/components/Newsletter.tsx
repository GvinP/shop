import styled from "styled-components";
import {MdSend} from 'react-icons/md'
import { mobile } from "../responsive";

const Container = styled.div`
    height: 60vh;
    background-color: #fcf5f5;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;
const Title = styled.h3`
    font-size: 70px;
    margin-bottom: 20px;
`;
const Description = styled.p`
    font-size: 24px;
    font-weight: 300;
    margin-bottom: 20px;
    ${mobile({
    "text-align": "center",
  })}
`;
const InputContainer = styled.div`
    width: 50%;
    height: 40px;
    background-color: white;
    display: flex;
    justify-content: space-between;
    border: 1px solid lightgray;
    ${mobile({
    "width": "80%",
  })}
`;
const Input = styled.input`
    border: none;
    flex: 8;
    padding-left: 20px;
`;
const Button = styled.button`
    border: none;
    background-color: teal;
    color: white;
    flex: 1;
`;

export const Newsletter = () => {
  return (
    <Container>
        <Title>Newsletter</Title>
        <Description>Get timely updates from your favorite products.</Description>
        <InputContainer>
            <Input placeholder="Your email"/>
            <Button>
                <MdSend size={24}/>
            </Button>
        </InputContainer>
    </Container>
  )
}
