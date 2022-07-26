import { CardWrapper, Div, Flex, Name, Wrapper } from "./Exersices.styled";
import { memo } from "react";
import { useRouter } from "next/router";

const Exersices = ({ exersices }) => {
  const router = useRouter();

  const goToExersice = (id) => {
    router.push(`/exersice/${id}`);
  };

  return (
    <Wrapper id="exersices">
      {exersices.map((exersice, idx) => {
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
    </Wrapper>
  );
};

export default memo(Exersices);
