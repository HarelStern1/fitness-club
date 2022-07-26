import styled from "styled-components";
import hero from "../../assets/img/banner.png";
import media from "../../utils/media";

export const HeroWrapper = styled.section`
  z-index: 999;
  position: relative;
  margin: 0;
  display: flex;
  flex-direction: row;
  height: 100vh;
  color: #000;
  padding: 10vw 150px;
  background-image: url(${hero.src});
  background-repeat: no-repeat;
  background-position: right;
  background-size: contain;

  ${media.tablet} {
    background-image: none;
    height: auto;
  }

  ${media.mobile} {
    padding: 130px 30px;
    padding-bottom: 0;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  align-items: flex-start;

  ${media.burger} {
    height: 400px;
  }
`;

export const Title = styled.h2`
  color: orangered;
  font-size: 45px;
  margin: 0;

  ${media.mobile} {
    font-size: 30px;
  }
`;

export const SubTitle = styled.h1`
  color: #000;
  font-size: 80px;
  max-width: 500px;
  line-height: 100px;
  font-weight: 700;
  margin: 0;

  ${media.mobile} {
    line-height: 60px;
    font-size: 50px;
  }
`;

export const Paragraph = styled.p`
  font-size: 23px;
  max-width: 400px;
`;

export const Button = styled.button`
  border: none;
  background-color: rgb(255, 0, 0, 0.8);
  color: #fff;
  padding: 15px 20px;
  font-size: 20px;
  border-radius: 6px;
  transition: all 0.3s ease;
  &:hover {
    cursor: pointer;
    background-color: rgb(255, 0, 0, 0.7);
  }
`;

export const WaterMark = styled.h1`
  z-index: -1;
  font-size: 200px;
  color: pink;
  opacity: 0.2;
  position: absolute;
  top: 25vw;
  left: 140px;
`;
