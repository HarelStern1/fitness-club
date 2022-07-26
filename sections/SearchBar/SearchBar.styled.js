import styled from "styled-components";
import media from "../../utils/media";

export const Wrapper = styled.form`
  padding: 5vw 10vmax;
  padding-bottom: 10px;
  ${media.mobile} {
    padding: 10vw 30px;
    padding-bottom: 10px;
  }
`;

export const Title = styled.h1`
  font-size: 40px;
  text-align: center;
  margin: 60px 0;
  ${media.mobile} {
    font-size: 30px;
  }
`;

export const InputWrapper = styled.div`
  position: relative;
  display: flex;
`;

export const Input = styled.input`
  width: 100%;
  height: 60px;
  padding-left: 20px;
  font-size: 20px;
  border: 1px solid #ddd;
  border-radius: 6px;

  &:focus {
    outline: none;
  }

  ${media.mobile} {
    font-size: 18px;
  }
`;

export const IconWrapper = styled.a`
  position: absolute;
  right: 15px;
  top: 15px;
  border: none;
  background-color: transparent;

  > svg {
    &:hover {
      cursor: pointer;
    }
  }
`;
