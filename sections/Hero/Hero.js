import {
  Container,
  HeroWrapper,
  Title,
  SubTitle,
  Paragraph,
  Button,
  WaterMark,
} from "./Hero.styled";

const Hero = () => {
  return (
    <HeroWrapper id="home">
      <Container>
        <Title>Fitness Club</Title>
        <SubTitle>Sweat, Smile And Repeat</SubTitle>
        <Paragraph>
          Check out the most effective exersices personalized for you
        </Paragraph>
        <Button>Explore Exersices</Button>
      </Container>
      {/* <WaterMark>Exersice</WaterMark> */}
    </HeroWrapper>
  );
};

export default Hero;
