import { HeaderContainer, FooterLinksMenuGroupListItem } from "./styles";

import logo from "../../assets/smithslogo.png";

export function Header() {
  const animateLinks = () => {
    const navLinks = document.querySelectorAll(".nav-list li");

    navLinks.forEach((link, index) => {
      if (link instanceof HTMLElement) {
        link.style.animation
          ? (link.style.animation = "")
          : (link.style.animation = `navLinkFade 0.5s ease forwards ${
              index / 7 + 0.3
            }s`);
      }
    });
  };

  const handleClickMenu = () => {
    const mobileMenu = document.querySelector(".mobile-menu");
    const navList = document.querySelector(".nav-list");

    navList?.classList.toggle("active");
    mobileMenu?.classList.toggle("active");
    animateLinks();
  };

  const scrollToSection = (section: string) => {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <HeaderContainer>
      <nav>
        {/* <a className="logo">Smith's</a> */}
        {/* <Logo alt="Smith's" /> */}
        <img src={logo} alt="Smith's" width={50} onClick={() => scrollToSection("home")} />

        <div className="mobile-menu" onClick={handleClickMenu}>
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>

        <ul className="nav-list">
        <FooterLinksMenuGroupListItem
            onClick={() => {
              handleClickMenu();
              scrollToSection("home");
            }}
          >
            <a href="#">Home</a>
          </FooterLinksMenuGroupListItem>
          <FooterLinksMenuGroupListItem
            onClick={() => {
              handleClickMenu();
              scrollToSection("about");
            }}
          >
            <a href="#About">Sobre</a>
          </FooterLinksMenuGroupListItem>
          <FooterLinksMenuGroupListItem
            onClick={() => {
              handleClickMenu();
              scrollToSection("contact");
            }}
          >
            <a href="#Contact">Contato</a>
          </FooterLinksMenuGroupListItem>
        </ul>
      </nav>
    </HeaderContainer>
  );
}
