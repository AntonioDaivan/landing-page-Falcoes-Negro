import styled from "styled-components";

export const SectionServices = styled.div`
    height: 100%;
    width: 100%;

    >div{
        height: 100%;
        width: 95%;
        margin: auto;
        display: flex;
        row-gap: 10px;
        flex-direction: column;
    }

    img{
        height: 20px;
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
        margin: 10px;

        :nth-child(3),
        :nth-child(4){
            row-gap: 10px;
        }

        :nth-child(5){
            div{
                flex-direction: row;
                justify-content:center;
                column-gap: 15px;
            }
        }
        
        ul{
            align-self: flex-start;
        }
    }

    table{
        border: 1px solid #000;
        width: 100%;
        text-align: center;
        
        tbody{
            td{
                border-top: 1px solid #000;
                height: 30px;
                width: 100px;
            }
        }
    }
`