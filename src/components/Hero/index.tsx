import {
  HeroContainer,
  HeroContent,
  HeroContentTitle,
  HeroContentSubtitle,
} from "./styles";

export function Hero() {
  return (
    <HeroContainer>
      <HeroContent>
        <HeroContentTitle>
          SMITH'S <br /> ORIENTE FLAVORS
        </HeroContentTitle>
        <HeroContentSubtitle>
          Tradição e tecnologia lado a lado
        </HeroContentSubtitle>
      </HeroContent>
    </HeroContainer>
  );
}
