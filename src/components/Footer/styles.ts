import styled from "styled-components";

export const FooterContainer = styled.section`
  background: #540707;
  height: 100%;
  width: 100%;

  display: flex;
  align-items: center;

  @media (min-width: 768px) {
    height: 9vh;
  }
`;

export const FooterContent = styled.footer`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;

  @media (min-width: 768px) {
    justify-content: space-between;
    flex-direction: row;
    padding-left: 8rem;
    padding-right: 8rem;
  }
`;

export const FooterText = styled.p`
  color: #ffffff;
  font-weight: 700;
  line-height: 3rem;

  @media (min-width: 768px) {
    font-size: 0.95rem;
  }

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

export const FooterSeparator = styled.div`
  background: #ffffff;
  width: 7rem;
  height: 0.125rem;
  border-radius: 2rem;

  @media (min-width: 768px) {
    display: none;
  }
`;
