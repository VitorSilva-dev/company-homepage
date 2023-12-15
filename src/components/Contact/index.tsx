import {
  ContactContainer,
  ContactContent,
  ContactImage,
  ContactProfile,
  ContactProfileInfosContainer,
  ContactProfileLinksContainer,
  ContactSeparatorLine,
  ContactSubtitleText,
  ContactTitle,
} from "./styles";

import { FaGithub, FaLinkedin } from "react-icons/fa";

import imageVitor from "../../assets/fotoVitor.jpg";

export function Contact() {
  const profiles = Array.from({ length: 5 }, (_, index) => ({
    name: "Vitor Santos",
    function: "Desenvolvedor Front End",
    git: "https://github.com/VitorSilva-dev",
    linkedIn: "https://www.linkedin.com/in/vitors-santos/",
    key: index,
    picture: imageVitor,
  }));

  return (
    <ContactContainer id="contact">
      <div>
        <ContactTitle>Contato</ContactTitle>
        <ContactSeparatorLine />
        <ContactSubtitleText>Contato dos desenvolvedores.</ContactSubtitleText>
      </div>

      <ContactContent>
        {profiles.map((profile) => (
          <ContactProfile key={profile.key}>
            <ContactImage $image={profile.picture} />
            <ContactProfileInfosContainer>
              <strong>{profile.name}</strong>
              <p>{profile.function}</p>
            </ContactProfileInfosContainer>
            <ContactProfileLinksContainer>
              <FaGithub
                size={24}
                style={{ fill: "#e6edf3", cursor: "pointer" }}
                onClick={() => window.open(profile.git, "_blank")}
              />
              <FaLinkedin
                size={24}
                style={{ fill: "#0a66c2", cursor: "pointer" }}
                onClick={() => window.open(profile.linkedIn, "_blank")}
              />
            </ContactProfileLinksContainer>
          </ContactProfile>
        ))}
      </ContactContent>
    </ContactContainer>
  );
}
