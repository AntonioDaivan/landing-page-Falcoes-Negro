const links = document.querySelectorAll('a.link')
links.forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault()

        const content = document.querySelector('.content')
        
        fetch(link.getAttribute('href'))
            .then(response => response.text())
            .then(newHTML => content.innerHTML = newHTML)

        const paginaAtual = e.target.parentElement
        links.forEach(link => link.parentElement.classList.remove('pagina-atual') )
        paginaAtual.classList.add('pagina-atual')
    })
})