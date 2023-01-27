import { Section, DivTitle, DivDescription, DivButtons, DivMidiasSociais, ContentHome } from './styled'
import { Link } from 'react-router-dom'

export const HomePage = _ => {
    return (
        <Section>
            <ContentHome>
                <DivTitle>
                    <h2 className='em-desenvolvimento' >Em desenvolvimento...</h2>
                    <h4>Equipe</h4>
                    <h1>Falcões Negro</h1>
                    <h4>Boxe e Kickboxing</h4>
                </DivTitle>
                <DivDescription>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat.
                </DivDescription>
                <DivButtons>
                    <Link to="/Services"><button>Juntar-se</button></Link>
                    <Link to="/About"><button>Saiba mais</button></Link>
                </DivButtons>
                <DivMidiasSociais>
                    <p>Nossas redes sociais.</p>
                    <div>
                        <div>
                            <p>Kickboxing</p>
                            <div>
                                <a href="https://www.instagram.com/falcoes_negro/" target='_blank'><img src="src\assets\imgs\icons\instagram.png" alt="Logo instagram" /></a>
                            </div>
                        </div>
                        <div>
                            <p>Boxe</p>
                            <div>
                                <a href="https://www.instagram.com/efnboxe/" target='_blank'><img src="src\assets\imgs\icons\instagram.png" alt="Logo instagram" /></a>
                            </div>
                        </div>
                    </div>
                </DivMidiasSociais>
            </ContentHome>
        </Section>
    )
}