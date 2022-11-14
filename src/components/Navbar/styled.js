import styled from "styled-components";

const Nav = styled.nav`
    display: flex;
    justify-content: right;
    position: relative;
    top: 5vh;

    ul{
        position: relative;
        right: 0;
        top: 0;
        width: 70%;
        min-width: 340px;
        height: 10vh;
        display: flex;
        align-items: center;
        justify-content: space-around;
        column-gap: 10px;
        padding: 0 7px;
        background-color: var(--clr--principal);
        border-radius: 15px 0 0 15px;
        box-shadow: 0px 0px 15px 0px var(--clr--principal);
        border: none;

        li{
            list-style: none;
            height: 80%;
            width: 100%;
            display: grid;
            place-items: center;
            border-radius: 10px;
            position: relative;

            ::after{
                content: '';
                position: absolute;
                height: 100%;
                width: 0;
                background-color: var(--clr--hover);
                border-radius: 10px;
            }

            :hover{
                ::after{
                    width: 100%;
                    transition: all .5s ease;
                }
        
            }

            a{
                z-index: 1;
            }
        }
    }
`

export default Nav