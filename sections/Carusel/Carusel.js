import { CardWrapper, Container, Wrapper, Paragraph } from "./Carusel.styled";
import { data } from "./data";
import gym from "../../assets/icons/gym.png";
import Image from "next/image";
import useMediaQuery from "../../hooks/useMediaQuery";
import { fetchData, exersicesOptions, url } from "../../utils/api/index";
import { useRouter } from "next/router";

const Carusel = ({ setSearch, setExersices }) => {
  const isMobile = useMediaQuery("767");
  const router = useRouter();

  const handleSearch = async (group) => {
    const exersicesData = await fetchData(url, exersicesOptions);
    const searchedExersices = exersicesData.filter((exersice) => {
      return (
        exersice.name.toLowerCase().includes(group.toLowerCase()) ||
        exersice.target.toLowerCase().includes(group.toLowerCase()) ||
        exersice.equipment.toLowerCase().includes(group.toLowerCase()) ||
        exersice.bodyPart.toLowerCase().includes(group.toLowerCase())
      );
    });
    setSearch("");
    setExersices(searchedExersices);
    router.push("#exersices");
  };

  return (
    <Wrapper>
      <Container>
        {data.map((group, idx) => {
          return (
            <CardWrapper onClick={() => handleSearch(group)} key={idx}>
              <Image
                src={gym}
                height={isMobile ? 40 : 50}
                width={isMobile ? 40 : 50}
              />
              <Paragraph>{group}</Paragraph>
            </CardWrapper>
          );
        })}
      </Container>
    </Wrapper>
  );
};

export default Carusel;
