import styled, { css } from "styled-components";
import media from "../../../utils/media";
import Link from "next/link";
import Image from "next/image";

export const NavWrapper = styled.nav`
  position: absolute;
  top: 0;
  z-index: 10;
  width: 100vw;
  height: 70px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-left: 50px;
  padding-top: 20px;
  gap: 70px;

  ${media.mobile} {
    padding-left: 25px;
  }
`;

export const LinksWrapper = styled.ul`
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  gap: 30px;
`;

export const NavLink = styled.a`
  font-size: 20px;
  color: #333;
  ${({ active }) => {
    if (active !== null) {
      return css`
        &:nth-child(${active + 1}) {
          color: orange;
        }
      `;
    }
  }}
  &:hover {
    cursor: pointer;
  }
`;
export const StyledLink = styled(Image)`
  &:hover {
    cursor: pointer;
  }
`;
