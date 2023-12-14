import styled from "styled-components";

interface ContainerSectionsProps {
  $backgroundcolor: string;
}

export const Container = styled.section<ContainerSectionsProps>`
  background: ${({ $backgroundcolor }) => $backgroundcolor};
  display: flex;
  flex-direction: column;

  z-index: 10;
  position: relative;

  height: 100%;
  gap: 3.5rem;

  padding-top: 5rem;
  padding-bottom: 5rem;

  padding-left: 1.5rem;
  padding-right: 1.5rem;

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

  @media (min-width: 768px) {
    padding-left: 5rem;
    padding-right: 5rem;
  }
`;
