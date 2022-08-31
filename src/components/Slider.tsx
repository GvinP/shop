import styled from "styled-components";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useState } from "react";

type ArrowProps = {
  direction: "left" | "right";
};
type WrapperProps = {
    slideIndex: number;
};

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  overflow: hidden;
`;
const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: whitesmoke;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props: ArrowProps) => props.direction === "left" && "10px"};
  right: ${(props: ArrowProps) => props.direction === "right" && "10px"};
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
  z-index: 2;
`;
const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 1.5s ease;
  transform: translateX(${(props: WrapperProps)=>props.slideIndex * -100}vw);
`;
const Slide = styled.div`
  display: flex;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;
const ImageContainer = styled.div`
  flex: 1;
  height: 100%;
`;
const Image = styled.img`
  height: 80%;
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
`;
const Title = styled.h2`
  font-size: 70px;
`;
const Description = styled.p`
  margin: 50px 0px;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
`;
const Button = styled.button`
  padding: 10px;
  font-style: 20px;
  background-color: transparent;
  cursor: pointer;
`;

const sliderItems = [
  {
    id: 1,
    img: "https://lp2.hm.com/hmgoepprod?set=width[1920],quality[80],options[limit]&source=url[https://www2.hm.com/content/dam/divided_s06/july_2022/5016c/5016C-3x2-2.jpg]&scale=width[global.width],height[15000],options[global.options]&sink=format[jpg],quality[global.quality]",
    title: "Friends to wear",
    description: "Start (and stay) smart and stylish",
  },
  {
    id: 2,
    img: "https://lp2.hm.com/hmgoepprod?set=width[1920],quality[80],options[limit]&source=url[https://www2.hm.com/content/dam/home_s06/august_2022/7026a/7026A-3x2.jpg]&scale=width[global.width],height[15000],options[global.options]&sink=format[jpg],quality[global.quality]",
    title: "Must-haves for the new season",
    description: "Big little things that make your home come alive.",
  },
  {
    id: 3,
    img: "https://lp2.hm.com/hmgoepprod?set=width[1920],quality[80],options[limit]&source=url[https://www2.hm.com/content/dam/home_s05/july_2022/7016b/7016B-3x2-compact-living-ideas-fall-news.jpg]&scale=width[global.width],height[15000],options[global.options]&sink=format[jpg],quality[global.quality]",
    title: "Living large in a small space",
    description: "Make the most of your home with these stylish and clever ideas.",
  },
];

export const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const handleClick = (direction: "left" | "right") => {
    if(direction==="left") {
        setSlideIndex(slideIndex>0?slideIndex-1 : 2)
    }else{
        setSlideIndex(slideIndex<2?slideIndex+1 : 0)
    }
  };
  return (
    <Container>
      <Arrow direction="left" onClick={() => handleClick("left")}>
        <IoIosArrowBack />
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
        {sliderItems.map((slide) => (
          <Slide key={slide.id}>
            <ImageContainer>
              <Image src={slide.img} alt={slide.title} />
            </ImageContainer>
            <InfoContainer>
              <Title>{slide.title}</Title>
              <Description>{slide.description}</Description>
              <Button>Shop now</Button>
            </InfoContainer>
          </Slide>
        ))}
      </Wrapper>
      <Arrow direction="right" onClick={() => handleClick("right")}>
        <IoIosArrowForward />
      </Arrow>
    </Container>
  );
};
