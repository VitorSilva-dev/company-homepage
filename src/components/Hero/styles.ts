import styled from "styled-components";
import backgroundImage from "../../assets/background.jpg";

export const HeroContainer = styled.section`
  background: url(${backgroundImage}) no-repeat center center;
  background-size: cover;
  height: 92vh;
`;

export const HeroContent = styled.div`
  height: 100%;

  display: flex;
  justify-content: center;
  flex-direction: column;

  margin-left: 5rem;

  @media (max-width: 768px) {
    margin-left: 1.5rem;
  }
`;

export const HeroContentTitle = styled.h1`
  font-weight: 700;

  @media (min-width: 768px) {
    line-height: 1.25;
    font-size: 3rem;
  }

  @media (max-width: 768px) {
    font-size: 2.25rem;
    line-height: 1;
  }

  display: flex;
  flex-direction: column;

  margin-bottom: 2rem;
  row-gap: 0.5rem;
`;

export const HeroContentSubtitle = styled.p`
  font-weight: 700;

  @media (min-width: 768px) {
    font-size: 1.875rem;
    line-height: 2.25rem;
  }

  @media (max-width: 768px) {
    font-size: 1.5rem;
    line-height: 2rem;
  }
`;
