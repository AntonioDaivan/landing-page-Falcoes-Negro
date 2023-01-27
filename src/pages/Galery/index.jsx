import { DivGalery, ImgBox, SectionGalery } from "./styled"
import { useEffect, useState } from "react"

export const Galery = _ => {

    const [ links, setLinks ] = useState([])

    useEffect(() => {
        async function gerarImgs() {
            const dados = await fetch('../../instagram.json')
            const json = await dados.json()
            const urls = json.map((link) => link)
            setLinks(urls)
        }

        gerarImgs()
    }, [])

    return (
        <SectionGalery>
            <DivGalery>
                <header>
                    <h1 className="em-desenvolvimento">Em desenvolvimento...</h1>
                    <h1>Galeria Falcões</h1>
                </header>
                <div>
                    {links.map((link) => (
                        <ImgBox key={link.src}>
                            <img crossOrigin="anonymous" key={link.src} src='src\data\imagem-temporaria.png'/>
                            <label htmlFor={link.src}>{link.alt}</label>
                        </ImgBox>
                    ))}
                </div>
            </DivGalery>
        </SectionGalery>
    )
}