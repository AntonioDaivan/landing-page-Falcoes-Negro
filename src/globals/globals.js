import { createGlobalStyle } from "styled-components"

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    a{
        text-decoration: none;
        color: #000;
    }

    :root {
        --clr--black: rgb(4, 4, 4);
        --clr--principal: #FFC700;
        --clr-text: #FFDD64;
        --clr--hover: #C69A00;
        --clr--white: #fff;
        --clr--glass: #ffc40059;
    }

    body{
        height: 100vh;
        width: 100%;
        font-family: 'Poppins', sans-serif;
        background-image: url('src/assets/imgs/fundo falcões mobile.jpg');
        background-repeat: no-repeat;
        background-attachment: fixed;
        background-size: contain;
        background-position: bottom right;
        background-color: var(--clr--black);

        @media (min-width: 480px) {
            background-image: url('src/assets/imgs/fundo falcões.jpg');
        }
    }

`