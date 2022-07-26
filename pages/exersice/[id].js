import { getExersiceById } from "../../utils/functions";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import styled from "styled-components";
import media from "../../utils/media";
import bodyPartImage from "../../assets/icons/body-part.png";
import targetImage from "../../assets/icons/target.png";
import equipmentImage from "../../assets/icons/equipment.png";

const Wrapper = styled.div`
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90vw;
  height: 100vh;
  padding-top: 100px;
  ${media.tablet} {
    flex-direction: column;
  }
`;

const Left = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  > img {
    border-radius: 10px;
  }
  ${media.tablet} {
    padding-top: 200px;
    margin-top: 130px;
  }
`;

const Right = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-left: 60px;
  padding-top: 40px;
  ${media.tablet} {
    padding-left: 10px;
    padding-bottom: 60px;
  }
`;

const Title = styled.h1`
  font-size: 50px;
  ${media.mobile} {
    font-size: 35px;
  }
`;

const Paragraph = styled.p`
  font-size: 24px;
`;

const Column = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Row = styled.div`
  font-size: 24px;
  display: flex;
  gap: 30px;
  align-items: center;
`;

const Detail = styled.p`
  font-size: 30px;
  ${media.mobile} {
    font-size: 26px;
    font-weight: 400;
  }
`;

const ImageWrapper = styled.div`
  position: relative;
  background-color: rgb(255, 242, 219);
  border-radius: 50%;
  height: 80px;
  width: 80px;
`;

const StyledImg = styled.img`
  position: absolute;
  height: 40px;
  width: 40px;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

const Exersice = () => {
  const [exersice, setExersice] = useState({});
  const router = useRouter();

  useEffect(() => {
    const getExersice = async () => {
      const data = await getExersiceById(router.query.id);
      setExersice(data);
      console.log(exersice);
    };
    getExersice();
  }, []);

  const extraDetails = [
    {
      icon: bodyPartImage,
      name: exersice.bodyPart,
    },
    {
      icon: targetImage,
      name: exersice.target,
    },
    {
      icon: equipmentImage,
      name: exersice.equipment,
    },
  ];

  return (
    <Wrapper>
      <Left>
        <img src={exersice.gifUrl} height="90%" width="100%" />
      </Left>
      <Right>
        <Title>{exersice.name}</Title>
        <Paragraph>
          {`Exercises keep you strong. ${exersice.name} is one of the best
          exercises to target your ${exersice.target}. It will help you improve your mood and
          gain energy.`}
        </Paragraph>
        <Column>
          {extraDetails.map((detail, idx) => {
            return (
              <Row key={idx}>
                <ImageWrapper>
                  <StyledImg src={detail.icon.src} />
                </ImageWrapper>
                <div>
                  <Detail>{detail.name}</Detail>
                </div>
              </Row>
            );
          })}
        </Column>
      </Right>
    </Wrapper>
  );
};

export default Exersice;
