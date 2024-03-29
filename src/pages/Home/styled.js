import styled from "styled-components";

const Section = styled.section`
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
    row-gap: 50px;
`
const ContentHome = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0 1.875rem;
    height: 80%;
    row-gap: 1.875rem;
`

const DivTitle = styled.div`
    display: flex;
    flex-direction: column;
    
    h1{
        color: var(--clr--principal);
        font-size: 4rem;
        margin-block-start: 0;
        margin-block-end: 0;
    }

    h4{
        color: var(--clr--principal);
        padding-left: 0.2rem;
    }
`

const DivDescription = styled.div`
    color: var(--clr-text);
    max-width: 400px;   
    min-width: 300px; 
    padding-right: 15px;
`

const DivButtons = styled.div`
    display: flex;
    flex-direction: row !important;
    column-gap: 10px;

    button{
        display: grid;
        place-items: center;
        position: relative;
        width: 130px;
        height: 45px;
        border-radius: 30px;
        background-color: var(--clr--principal);
        border: none;
        cursor: pointer;

        :hover{
            transition: all .1s ease;
            box-shadow: none;
            transform: translateX(1px) translateY(1px);
            background-color: var(--clr--hover);
        }
    }
`

const DivMidiasSociais = styled.div`
    display: flex;
    flex-direction: column; 
    
    p{
        color: var(--clr--principal);
        font-size: 400;
        margin-bottom: 0.3125rem;
    }

    img{
        height: 20px;
    }

    div{
        display: flex;
        flex-direction: row;
        column-gap: 30px;

        div{
            row-gap: 5px;
            display: grid;
            place-items: center;
            
            div{
                display: flex;
                flex-direction: row;
                column-gap: 10px;
            }
        }
    }
`

export {
    Section,
    DivDescription,
    DivTitle,
    DivButtons,
    DivMidiasSociais,
    ContentHome
}