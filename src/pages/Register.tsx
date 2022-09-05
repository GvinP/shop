import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;    
`;
const Wrapper = styled.div`
    width: 25%;
    padding: 20px;
    ${mobile({
    "width": "75%",
  })}
`;
const Title = styled.h1`
    font-size: 24px;
    font-weight: 300;
`;
const Form = styled.form`
    display: flex;
    flex-direction: column;
`;
const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 10px 0px;
    padding: 10px;
`;
const Aggreement = styled.span`
    font-size: 12px;
    margin: 20px 0px;
`;
const Button = styled.button`
    width: 40%;
    border: none;
    padding: 15px 20px;
    background-color: teal;
    color: white;
    cursor: pointer;
`;

export const Register = () => {
  return (
    <Container>
        <Wrapper>
            <Title>Create an acount</Title>
            <Form>
                <Input placeholder="first name"/>
                <Input placeholder="last name"/>
                <Input placeholder="username"/>
                <Input placeholder="email"/>
                <Input placeholder="password"/>
                <Input placeholder="confirm password"/>
                <Aggreement>
                    By creating an account, I consent to the proccessing of my personal
                    data in accordance with the <b>PRIVACY POLICY</b> 
                </Aggreement>
                <Button>Create</Button>
            </Form>
        </Wrapper>
    </Container>
  )
}
