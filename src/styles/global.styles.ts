import { createGlobalStyle } from "styled-components";
import { theme } from "./theme";

export const GlobalStyles = createGlobalStyle`
* {    
    @media (min-width: 768px) {
        ::-webkit-scrollbar {
            display: block;

            width: 5px;
            height: 5px;       
        }
        
        ::-webkit-scrollbar-thumb {
            background-color: #870c0c; 
            border-radius: 6px; 
        }
        
        ::-webkit-scrollbar-track {
            background-color: #f0f0f0; 
            border-radius: 6px; 
        }
        
        ::-webkit-scrollbar-thumb:hover {
            background-color: #5a0606; 
        }
    }

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
