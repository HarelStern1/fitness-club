import {
  CardWrapper,
  Container,
  Wrapper,
  Flex,
  Div,
  Name,
  Title,
  Span,
} from "./SimilarExersices.styled";
import gym from "../../assets/icons/gym.png";
import Image from "next/image";
import useMediaQuery from "../../hooks/useMediaQuery";
import { fetchData, exersicesOptions, url } from "../../utils/api/index";
import { useRouter } from "next/router";

const SimilarExersices = ({ similarExersices, type }) => {
  const isMobile = useMediaQuery("767");
  const router = useRouter();

  const goToExersice = (id) => {
    router.push(`/exersice/${id}`);
  };

  return (
    <Wrapper>
      {type === "target" ? (
        <Title>
          Similar <Span>Target Muscle</Span> Exersices
        </Title>
      ) : (
        <Title>
          Similar <Span>Equipment</Span> Exersices
        </Title>
      )}
      <Container>
        {similarExersices.map((exersice, idx) => {
          return (
            <CardWrapper onClick={() => goToExersice(exersice.id)} key={idx}>
              <img src={exersice.gifUrl} height="200px" width="100%" />
              <Flex>
                <Div color="pink">{exersice.bodyPart}</Div>
                <Div color="rgb(255, 219, 88)">{exersice.target}</Div>
              </Flex>
              <Name>{exersice.name}</Name>
            </CardWrapper>
          );
        })}
      </Container>
    </Wrapper>
  );
};

export default SimilarExersices;
