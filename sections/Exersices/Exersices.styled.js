import styled from "styled-components";
import media from "../../utils/media";

export const Wrapper = styled.section`
  padding: 3vw 15vmax;
  display: grid;
  grid-template-columns: 33% 33% 33%;
  gap: 40px;
  ${media.tablet} {
    grid-template-columns: 50% 50%;
  }
  ${media.burger} {
    padding: 10vw 5vmax;
    grid-template-columns: 50%;
    justify-content: center;
  }
  ${media.small} {
    grid-template-columns: 100%;
  }
`;

export const CardWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  width: 300px;
  height: auto;
  border-radius: 8px;
  flex-shrink: 0;
  scroll-snap-align: start;
  background-color: #fff;
  border-color: #ddd;
  transition: all 0.3s ease;
  margin: 30px auto;

  &:hover {
    cursor: pointer;
  }

  ${media.small} {
    width: 300px;
    padding-top: 20px;
  }
`;

export const Flex = styled.div`
  display: flex;
  gap: 14px;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 0 20px;
  margin: 10px 0;
`;

export const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 25px;
  width: auto;
  padding: 10px;
  border: none;
  border-radius: 20px;
  background-color: ${({ color }) => color && color};
  color: #fff;
  font-size: 11px;
  margin: 0;
`;

export const Name = styled.p`
  padding-left: 24px;
  line-height: 24px;
  padding-top: 10px;
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 10px;
  margin-top: 0;
`;
