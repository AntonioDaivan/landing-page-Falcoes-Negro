import styled from "styled-components";

export const SectionServices = styled.div`
    height: 75vh;
    width: 100%;

    .content-servicos{
        height: 100%;
        width: 95%;
        margin: auto;
        display: flex;
        row-gap: 10px;
        flex-direction: column;
    }
`

export const DivServices = styled.div`
    background-color: var(--clr--glass);
    border-radius: 15px;
    -webkit-backdrop-filter: blur(5px);
    backdrop-filter: blur(5px);
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around; 

    div{
        display: flex;
        align-items: center;
        flex-direction: column;
        width: 80%;
    }
`