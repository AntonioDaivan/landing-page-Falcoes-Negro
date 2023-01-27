import styled from "styled-components";

export const FundoDourado = styled.div`
    height: 100%;
    width: 100%;
    padding: 10px;
    border-radius: 15px;
    text-align: center;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    row-gap: 1.5rem; 

    background: var(--clr--glass);
    -webkit-backdrop-filter: blur(5px);
    backdrop-filter: blur(5px);

    p{
        width: 90%;
        align-self: center;
        font-size: 1.2rem;
    }
`

export const SectionAbout = styled.section`
    height: 100%;
    padding: 0 20px;
`