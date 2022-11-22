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
                    <h1>Em desenvolvimento...</h1>
                    <h1>Galeria Falcões</h1>
                </header>
                <div>
                    {links.map((link) => (
                        <ImgBox>
                            <img crossOrigin="anonymous" key={link.src} src={link.src}/>
                            <label htmlFor={link.src}>{link.alt}</label>
                        </ImgBox>
                    ))}
                </div>
            </DivGalery>
        </SectionGalery>
    )
}