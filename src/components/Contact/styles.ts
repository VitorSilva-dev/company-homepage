import styled from "styled-components";

interface ContactImageProps {
  $image: string;
}

export const ContactContainer = styled.section`
  background: #b6abab;
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
    justify-content: space-between;
  }

  @media (min-width: 768px) {
    padding-left: 5rem;
    padding-right: 5rem;
  }

  @media (min-width: 1536px) {
    padding-left: 8rem;
    padding-right: 8rem;
  }
`;

export const ContactTitle = styled.strong`
  color: #0a0a0a;
  font-weight: 700;

  font-size: 1.875rem;
  line-height: 1.25;
`;

export const ContactSeparatorLine = styled.div`
  --tw-bg-opacity: 1;
  background-color: #870c0c;

  width: 2.5rem;
  height: 0.25rem;

  border-radius: 0.25rem;
  margin-top: 0.5rem;
`;

export const ContactContent = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  justify-content: space-around;
  align-items: center;

  width: 100%;
  gap: 4rem;
`;

export const ContactImage = styled.img<ContactImageProps>`
  content: url(${({ $image }) => $image});
  border-radius: 100%;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  width: 12rem;
  height: 12rem;
`;

export const ContactProfile = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;

  gap: 1rem;
`;

export const ContactProfileLinksContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
`;

export const ContactProfileInfosContainer = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;

  gap: 0.5rem;
`;

// #404040
// #7d8a92
export const ContactSubtitleText = styled.p`
  color: #ffffff;
  font-weight: 700;
  margin-top: 2.5rem;

  @media (min-width: 768px) {
    font-size: 1.5rem;
  }

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;
