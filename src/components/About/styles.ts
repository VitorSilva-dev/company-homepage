import styled from "styled-components";

interface MyImageProps {
  $image: string;
  $imageID: string;
}

export const AboutContainer = styled.section`
  display: flex;
  flex-direction: column;

  height: 92vh;
  margin-top: 3rem;

  gap: 3.5rem;

  margin-left: 5rem;

  @media (max-width: 768px) {
    margin-left: 1.5rem;
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

  padding: 0 1rem 0 1rem;
  margin-bottom: 2.75rem;
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

      @media (max-width: 768px) {
        width: 14rem;
        right: 1rem;  
        bottom: -4rem;
      }
    `
      : `
      width: 15rem;

      @media (max-width: 768px) {
        width: 12rem;
        bottom: -5rem;
      }      
    `};
`;
