import Image from "next/image";
import styled from "styled-components";
import media from "../../utils/media";

export const Wrapper = styled.section`
  padding: 3vw 10vmax;
  ${media.mobile} {
    padding: 10vw 30px;
  }
`;

export const Container = styled.div`
  display: flex;
  gap: 40px;
  scroll-snap-type: x mandatory;
  overflow-x: scroll;
  scroll-behavior: smooth;
  &::-webkit-scrollbar {
    height: 5px;
  }
  &::-webkit-scrollbar-thumb {
    background: #ccc;
    border-radius: 10px;
  }
  ${media.small} {
    gap: 30px;
  }
`;

export const CardWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 40px;
  width: 270px;
  height: 270px;
  border: 1px solid;
  border-radius: 6px;
  flex-shrink: 0;
  scroll-snap-align: start;
  background-color: #fff;
  border-color: #ddd;
  transition: all 0.3s ease;

  &:hover {
    cursor: pointer;
    background-color: #f9f9f9;
  }

  ${media.small} {
    width: 180px;
    height: 180px;
    padding-top: 20px;
  }
`;

export const Card = styled.div`
  display: flex;
  overflow: auto;
  border: 1px solid;
  width: 100%;
  height: 200px;
`;

export const Paragraph = styled.p`
  font-size: 22px;
  font-weight: 700;
`;
