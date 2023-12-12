import styled from "styled-components";
import { theme } from "../../styles/theme";

export const HeaderContainer = styled.header`
  .logo {
    font-size: 24px;
    text-transform: uppercase;
    letter-spacing: 4px;
  }

  nav {
    display: flex;
    justify-content: space-around;
    align-items: center;
    background: #23232e;
    height: 8vh;
  }

  .nav-list {
    list-style: none;
    display: flex;
  }

  .nav-list li {
    letter-spacing: 3px;
    margin-left: 32px;
  }

  .mobile-menu {
    display: none;
    cursor: pointer;
  }

  .mobile-menu div {
    width: 32px;
    height: 2px;
    background: ${theme.colors.white};
    margin: 8px;
    transition: 0.3s;
  }

  @media (max-width: 999px) {
    .nav-list {
      position: absolute;
      top: 8vh;
      right: 0;
      width: 50vw;
      height: 92vh;
      background: #23232e;
      flex-direction: column;
      align-items: center;
      justify-content: space-around;
      transform: translateX(100%);
      transition: transform 0.3s ease-in;
    }

    .nav-list li {
      margin-left: 0;
      opacity: 0;
    }

    .mobile-menu {
      display: block;
    }

    .nav-list.active {
      transform: translateX(0);
    }

    @keyframes navLinkFade {
      from {
        opacity: 0;
        transform: translateX(50px);
      }
      to {
        opacity: 1;
        transform: translateX(0);
      }
    }

    .mobile-menu.active .line1 {
      transform: rotate(-45deg) translate(-8px, 8px);
    }

    .mobile-menu.active .line2 {
      opacity: 0;
    }

    .mobile-menu.active .line3 {
      transform: rotate(45deg) translate(-5px, -7px);
    }
  }
`;
