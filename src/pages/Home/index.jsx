import { Section, DivTitle, DivDescription, DivButtons, DivMidiasSociais, ContentHome } from './styled'

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
                    <button className="btn contato"><a href="#">Juntar-se</a></button>
                    <button className="btn saiba-mais"><a href="#">Saiba mais</a></button>
                </DivButtons>
                <DivMidiasSociais>
                    <p className="title">Nossas redes sociais.</p>
                    <div className="midia">
                        <div className="midias-kick">
                            <p>Kickboxing</p>
                            <div className="icons">
                                <a href="https://www.instagram.com/falcoes_negro/"><img src="src\assets\imgs\icons\instagram.png" alt="Logo instagram" /></a>
                                <a href="#"><img src="src\assets\imgs\icons\whatsapp.png" alt="Logo whatsapp" /></a>
                            </div>
                        </div>
                        <div className="midias-boxe">
                            <p>Boxe</p>
                            <div className="icons">
                                <a href="https://www.instagram.com/efnboxe/"><img src="src\assets\imgs\icons\instagram.png" alt="Logo instagram" /></a>
                                <a href="#"><img src="src\assets\imgs\icons\whatsapp.png" alt="Logo whatsapp" /></a>
                            </div>
                        </div>
                    </div>
                </DivMidiasSociais>
            </ContentHome>
        </Section>
    )
}