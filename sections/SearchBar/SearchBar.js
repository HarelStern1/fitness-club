import { useState } from "react";
import Search from "../../components/Icons/Search";
import {
  Wrapper,
  Title,
  InputWrapper,
  Input,
  IconWrapper,
} from "../SearchBar/SearchBar.styled";
import { fetchData, exersicesOptions, url } from "../../utils/api/index";
import Carusel from "../Carusel/Carusel";
import Exersices from "../Exersices/Exersices";
import { useRouter } from "next/router";
import Link from "next/link";

const SearchBar = () => {
  const [search, setSearch] = useState("");
  const [exersices, setExersices] = useState([]);
  const router = useRouter();

  const handleChange = (e) => {
    setSearch(e.target.value.toLowerCase());
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    if (search) {
      const exersicesData = await fetchData(url, exersicesOptions);
      const searchedExersices = exersicesData.filter((exersice) => {
        return (
          exersice.name.toLowerCase().includes(search) ||
          exersice.target.toLowerCase().includes(search) ||
          exersice.equipment.toLowerCase().includes(search) ||
          exersice.bodyPart.toLowerCase().includes(search)
        );
      });
      setSearch("");
      setExersices(searchedExersices);
      router.push("#exersices");
    }
  };

  return (
    <>
      <Wrapper onSubmit={handleSearch}>
        <Title>Awesome Exersices You Should Know</Title>
        <InputWrapper>
          <Input
            value={search}
            onChange={handleChange}
            placeholder="Search Exersices"
          />
          <IconWrapper onClick={handleSearch}>
            <Search />
          </IconWrapper>
        </InputWrapper>
      </Wrapper>
      <Carusel setSearch={setSearch} setExersices={setExersices} />
      <Exersices exersices={exersices} />
    </>
  );
};

export default SearchBar;
