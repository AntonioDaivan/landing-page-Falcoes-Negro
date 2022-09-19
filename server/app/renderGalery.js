import arrayUrl from '../data/imagens.js'

const gerarImagem = array => {
    let divFotos = document.querySelector('div.fotos')
    for(let i = 0; i < array.length; i++){
        let img = document.createElement('img')
        img.setAttribute('src', img[i])
        img.setAttribute('alt', 'Treino Falcões Negro')
        img.classList.add('foto')
        divFotos.append(img)
    }
}
gerarImagem(arrayUrl)