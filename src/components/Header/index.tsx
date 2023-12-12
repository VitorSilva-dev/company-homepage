import { HeaderContainer } from "./styles";

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

  return (
    <HeaderContainer>
      <nav>
        <a className="logo">Smith's</a>

        <div className="mobile-menu" onClick={handleClickMenu}>
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>

        <ul className="nav-list">
          <li className="">
            <a className="" href="/">
              Home
            </a>
          </li>
          <li className="">
            <a className="" href="/">
              Clientes
            </a>
          </li>
          <li className="">
            <a className="" href="/">
              Sobre
            </a>
          </li>
          <li className="">
            <a className="" href="/">
              Projetos
            </a>
          </li>
          <li className="">
            <a className="" href="/">
              Contato
            </a>
          </li>
        </ul>
      </nav>
    </HeaderContainer>
  );
}
