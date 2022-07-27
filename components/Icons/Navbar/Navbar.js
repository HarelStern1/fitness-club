import {
  LinksWrapper,
  NavWrapper,
  NavLink,
  StyledLink,
  StyledImage,
} from "./Navbar.styled";
import logo from "../../../assets/img/Logo.png";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const Navbar = () => {
  const [active, setActive] = useState(0);
  const router = useRouter();

  useEffect(() => {
    if (router.pathname !== "/") {
      setActive(1);
    }
  }, [router.pathname]);

  return (
    <NavWrapper>
      <Link href="/">
        <Image src={logo} />
      </Link>
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
