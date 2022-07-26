import { LinksWrapper, NavWrapper, NavLink } from "./navbar.styled";
import logo from "../../../assets/img/Logo.png";
import Image from "next/image";
import { useState } from "react";

const Navbar = () => {
  const [active, setActive] = useState(0);

  return (
    <NavWrapper>
      <Image src={logo} />
      <LinksWrapper>
        <NavLink href="/" onClick={() => setActive(0)} active={active}>
          Home
        </NavLink>
        <NavLink
          href="/#exersices"
          onClick={() => setActive(1)}
          active={active}
        >
          Exersices
        </NavLink>
      </LinksWrapper>
    </NavWrapper>
  );
};

export default Navbar;
