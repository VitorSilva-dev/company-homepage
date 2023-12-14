import styled from "styled-components";

interface MyImageProps {
  $image: string;
  $imageID: string;
}

export const AboutContainer = styled.section`
  display: flex;
  flex-direction: column;

  height: 100%;
  gap: 3.5rem;

  padding-top: 5rem;
  padding-bottom: 5rem;
  padding-left: 5rem;

  @media (min-width: 1024px) {
    flex-direction: row;
    justify-content: space-between;

    padding-top: 10rem;
    padding-bottom: 10rem;
  }

  @media (min-width: 1536px) {
    padding-left: 8rem;
    padding-right: 8rem;
  }

  @media (max-width: 768px) {
    margin-left: 1.5rem;
  }

  @media (max-width: 768px) {
    padding-left: 5rem;
    padding-right: 5rem;
  }
`;

export const AboutTitle = styled.strong`
  color: #0a0a0a;
  font-weight: 700;

  font-size: 1.875rem;
  line-height: 1.25;
`;

export const AboutDescription = styled.p`
  color: #7d8a92;
  font-weight: 500;
  /* color: #404040; */
  max-width: 45rem;

  @media (max-width: 768px) {
    max-width: 20rem;
  }

  margin-top: 1rem;

  font-size: 1rem;
  line-height: 1.5rem;
`;

export const AboutImagesContainer = styled.div`
  display: flex;
  position: relative;

  flex-direction: column;
  justify-content: flex-end;

  padding-left: 1rem;
  padding-right: 1rem;
  margin-bottom: 2.75rem;

  @media (min-width: 1024px) {
    margin-top: 4rem;
    margin-right: 5rem;
    margin-bottom: 4rem;
  }
`;

export const AboutImage = styled.img<MyImageProps>`
  content: url(${({ $image }) => $image});
  border-radius: 1rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  height: auto;

  ${({ $imageID }) =>
    $imageID == "img1"
      ? `
      position: absolute;
      bottom: -2.5rem;
      right: 4rem;  

      width: 24rem;

      @media (min-width: 1024px) {
        width: 100%;
        left: -50%;
        bottom: -4rem;
      }

      @media (max-width: 768px) {
        width: 14rem;
        right: 1rem;  
        bottom: -4rem;
      }

      @media (min-width: 640px) {
        width: 24rem;
      }

      @media (min-width: 1536px) {
        min-width: 30vw;
        right: 12rem; 
      }
    `
      : `
      width: 15rem;
      
      @media (max-width: 768px) {
        width: 12rem;
        bottom: -5rem;
      }      

      @media (min-width: 1024px) {
        width: 24rem;
      }
    `};
`;
