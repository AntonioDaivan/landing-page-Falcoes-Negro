import styled from "styled-components";

export const SectionGalery = styled.section`
    height: 100%;
    width: 100vw;

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

    > div{
        height: 95%;
        width: 100%;
        display: grid;
        grid-template-columns: repeat(2, 49%);
        grid-template-rows: repeat(auto);
        border-radius: 15px;
        row-gap: 30px;
        place-items: center;
        overflow-y: auto;
        padding:10px;
        column-gap: 10px;  

        ::-webkit-scrollbar{
            background-color: transparent;
        }

        @media (min-width: 468px) {
            grid-template-columns: repeat(3, 32%);
        }

        @media (min-width: 712px) {
            grid-template-columns: repeat(4, 24%);
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
        height: 75px;
        width: 90%;
        overflow-x: hidden;
        flex-wrap: wrap;
        font-size: .75rem;

        ::-webkit-scrollbar{
            background-color: transparent;
        }
    }
`