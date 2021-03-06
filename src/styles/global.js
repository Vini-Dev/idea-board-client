import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Roboto:400,500,700&display=swap');

    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    body {
        background-color: white;
        -webkit-font-smoothing: antialiased;
    }

    body, input, button {
        font: 14px 'Roboto', sans-serif;
    }

    button {
        cursor: pointer;
        user-select: none;
    }
    
    #root {
        color: ${({ theme }) => theme.content.text};
        background-color: ${({ theme }) => theme.content.background};
    }
    
`;
