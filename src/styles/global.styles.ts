import { createGlobalStyle } from "styled-components";
import { theme } from "./theme";

export const GlobalStyles = createGlobalStyle`
* {
    margin: 0;
    padding: 0;

    box-sizing: border-box;

    font-family: "Roboto", sans-serif;
}

a {
    color: ${theme.colors.white};
    text-decoration: none;
    transition: 0.3s;
}

a:hover {
    opacity: 0.7;
}

@media (max-width: 999px) {
    body {
      overflow: hidden;
    }
}
`;
