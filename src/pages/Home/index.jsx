import { Section, DivTitle, DivDescription, DivButtons, DivMidiasSociais, ContentHome } from './styled'
import { Link } from 'react-router-dom'

export const HomePage = _ => {
    return (
        <Section>
            <ContentHome>
                <DivTitle>
                    <h3>Em desenvolvimento...</h3>
                    <h1>Falcões Negro</h1>
                </DivTitle>
                <DivDescription>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat.
                </DivDescription>
                <DivButtons>
                    <button><Link to="/Services">Juntar-se</Link></button>
                    <button><Link to="/About">Saiba mais</Link></button>
                </DivButtons>
                <DivMidiasSociais>
                    <p>Nossas redes sociais.</p>
                    <div>
                        <div>
                            <p>Kickboxing</p>
                            <div>
                                <a href="https://www.instagram.com/falcoes_negro/"><img src="src\assets\imgs\icons\instagram.png" alt="Logo instagram" /></a>
                            </div>
                        </div>
                        <div>
                            <p>Boxe</p>
                            <div>
                                <a href="https://www.instagram.com/efnboxe/"><img src="src\assets\imgs\icons\instagram.png" alt="Logo instagram" /></a>
                            </div>
                        </div>
                    </div>
                </DivMidiasSociais>
            </ContentHome>
        </Section>
    )
}