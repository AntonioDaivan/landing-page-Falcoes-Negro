import styled from "styled-components";

export const SectionGalery  = styled.section`
    height: 75vh;
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
    border-radius: 15px;
    background: var(--clr--glass);
    -webkit-backdrop-filter: blur(5px);
    backdrop-filter: blur(5px);

    div{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: repeat(auto);
        row-gap: 30px;
        place-items: center;
        overflow-y: auto;
        padding: 25px 10px;
        column-gap: 10px;

        img{
            border-radius: 5px;
            width: 100%;
        }
    }

`
