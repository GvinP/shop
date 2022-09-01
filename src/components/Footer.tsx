import styled from "styled-components";
import {
  AiFillInstagram,
  AiFillFacebook,
  AiFillTwitterSquare,
  AiFillLinkedin,
} from "react-icons/ai";
import { FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import { GrMail } from "react-icons/gr";

type SocialIconProps = {
  color: string;
};

const Container = styled.div`
  display: flex;
`;
const LeftBlock = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;
const Logo = styled.h3``;
const Description = styled.p`
  margin: 20px 0px;
`;
const SocialConteiner = styled.div`
  display: flex;
`;
const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props: SocialIconProps) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;
const CenterBlock = styled.div`
  flex: 1;
  padding: 20px;
`;
const Title = styled.h3`
  margin-bottom: 30px;
`;
const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;
const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;

const RightBlock = styled.div`
  flex: 1;
  padding: 20px;
`;
const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;
const Payment = styled.img`
  width: 50%;
`;

export const Footer = () => {
  return (
    <Container>
      <LeftBlock>
        <Logo>Shop</Logo>
        <Description>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
          blanditiis quam at cupiditate, velit architecto ad eum quia ipsum
          quidem pariatur debitis omnis excepturi distinctio iure sint iusto
          reprehenderit consequatur.
        </Description>
        <SocialConteiner>
          <SocialIcon color="3b5999">
            <AiFillInstagram size={24} />
          </SocialIcon>
          <SocialIcon color="e4405f">
            <AiFillFacebook size={24} />
          </SocialIcon>
          <SocialIcon color="55acee">
            <AiFillTwitterSquare size={24} />
          </SocialIcon>
          <SocialIcon color="e60023">
            <AiFillLinkedin size={24} />
          </SocialIcon>
        </SocialConteiner>
      </LeftBlock>
      <CenterBlock>
        <Title>Usefull links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Man fasion</ListItem>
          <ListItem>Woman fasion</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>My account</ListItem>
          <ListItem>Order tracking</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Terms</ListItem>
        </List>
      </CenterBlock>
      <RightBlock>
        <Title>Contact</Title>
        <ContactItem>
          <FaMapMarkerAlt style={{ marginRight: "10px" }} />
          109 Bagrationi St, Batumi 6000
        </ContactItem>
        <ContactItem>
          <FaPhoneAlt style={{ marginRight: "10px" }} />
          0422221133
        </ContactItem>
        <ContactItem>
          <GrMail style={{ marginRight: "10px" }} />
          shop@shop.com
        </ContactItem>
        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
      </RightBlock>
    </Container>
  );
};
