import {
  AboutContainer,
  AboutDescription,
  AboutTitle,
  AboutImagesContainer,
  AboutImage,
} from "./styles";
import { Separator } from "../Separator";

import image1 from "../../assets/ryoan-sushi-bar.jpg";
import image2 from "../../assets/ryoan-sushi-bar-2.jpg";

export function About() {
  return (
    <AboutContainer id="about">
      <div>
        <AboutTitle>Sobre a Smith's</AboutTitle>
        <Separator />
        <AboutDescription>
          Bem-vindo à Smith's, onde a tradição da culinária oriental encontra a
          inovação tecnológica. Em um ambiente futurista, nossos cardápios
          interativos proporcionam uma experiência única, permitindo que você
          explore pratos e sua história por meio da realidade aumentada.
        </AboutDescription>

        <AboutDescription>
          Na cozinha, nossos chefs trabalham em colaboração com robôs culinários
          e inteligência artificial para garantir a perfeição em cada prato.
        </AboutDescription>

        <AboutDescription>
          Comprometidos com a sustentabilidade, adotamos embalagens
          biodegradáveis e práticas eco-friendly. Em Smith's, oferecemos uma
          fusão única entre tradição e inovação, proporcionando uma experiência
          gastronômica excepcional. Venha nos visitar e descubra como a
          tecnologia eleva a culinária oriental a novas alturas.
        </AboutDescription>
      </div>

      <AboutImagesContainer>
        <AboutImage $imageID="img1" $image={image1} alt="Smith's" />

        <AboutImage $imageID="img2" $image={image2} alt="Smith's" />
      </AboutImagesContainer>
    </AboutContainer>
  );
}
