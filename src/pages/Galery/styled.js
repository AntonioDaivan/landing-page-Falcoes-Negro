import styled from "styled-components";

export const SectionGalery = styled.section`
    height: 100%;
    width: 100%;

    header{
        display: grid;
        place-content: center;
        flex-wrap: wrap;
        text-align: center;
    }
`

export const DivGalery = styled.div`
    height: 100%;
    width: 95%;
    margin: auto;
    padding: 10px 0;
    border-radius: 15px;
    background: var(--clr--glass);
    -webkit-backdrop-filter: blur(5px);
    backdrop-filter: blur(5px);

    > div{
        height: 100%;
        width: 100%;
        display: grid;
        place-content: center;
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: repeat(auto);
        border-radius: 15px;
        gap: 30px 20px;
        place-items: center;
        overflow-y: auto;
        padding: 20px;

        ::-webkit-scrollbar{
            background-color: transparent;
        }

        @media (max-width: 390px) {
            grid-template-columns: repeat(1, 1fr);
        }

        @media (min-width: 580px) {
            grid-template-columns: repeat(3, 1fr);
        }

        @media (min-width: 712px) {
            grid-template-columns: repeat(4, 1fr);
        }
    }

`

export const ImgBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;

    img{
        border-radius: 5px;
        width: 100%;
    }
        

    label{
        display: flex; 
        height: 50px;
        width: 90%;
        overflow-x: hidden;
        flex-wrap: wrap;
        font-size: .75rem;

        ::-webkit-scrollbar{
            background-color: transparent;
        }
    }
`