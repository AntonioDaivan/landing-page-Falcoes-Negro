import { ReptileList } from "../../components/Galery/Imagens"
import { DivGalery, SectionGalery } from "./styled"

export const Galery = _ => {

    fetch('../../../instagram.json')
        .then(res => res.json())
        .then(res => RenderGalery(res))
        // .then(res => res.forEach(imagem => array2.push(imagem)))
        // .then(data => array.push(data))

    function RenderGalery(array){
        console.log('chegou aqui')
        console.log(array)
        return(
            <div>
                {array.map(imagem => <img key={imagem.src} src={imagem.src} />)}
            </div>
        )
    }

    return (
        <SectionGalery>
            <DivGalery>
                <header>
                    <h1>Em desenvolvimento...</h1>
                    <h1>Galeria Falcões</h1>
                </header>
                <div>
                    <ReptileList />
                </div>
            </DivGalery>
        </SectionGalery>
    )
}