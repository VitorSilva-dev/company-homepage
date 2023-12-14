import { createGlobalStyle } from "styled-components";
import { theme } from "./theme";

export const GlobalStyles = createGlobalStyle`
* {
    margin: 0;
    padding: 0;

    box-sizing: border-box;

    font-family: "Plus Jakarta Sans";
    color: ${theme.colors.white};
}

a {
    text-decoration: none;
}

@media (max-width: 999px) {
    html, body {
        overflow-x: hidden;
    }

    body {
        position: relative;
    }
}
`;
