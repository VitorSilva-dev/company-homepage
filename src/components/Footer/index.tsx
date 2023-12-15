import {
  FooterContainer,
  FooterContent,
  FooterSeparator,
  FooterText,
} from "./styles";

export function Footer() {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterText>Copyright © 2023 Smith's Oriente Flavors</FooterText>
        <FooterSeparator />
        <FooterText>smiths.flavors@gmail.com</FooterText>
      </FooterContent>
    </FooterContainer>
  );
}
