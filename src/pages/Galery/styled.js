import styled from "styled-components";

export const SectionGalery  = styled.section`
    height: 100%;
    width: 100%;

    header{
        display: grid;
        place-content: center;
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

    div{
        height: 90%;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: repeat(auto);
        border-radius: 15px;
        row-gap: 30px;
        place-items: center;
        overflow-y: auto;
        padding:10px;
        column-gap: 10px;

        img{
            border-radius: 5px;
            width: 100%;
        }
        
        @media (min-width: 468px) {
            grid-template-columns: repeat(3, 1fr);
        }

        @media (min-width: 712px) {
            grid-template-columns: repeat(4, 1fr);
        }
    }

`
