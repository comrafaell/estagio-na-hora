function marcarBotao() {
    let buttons = document.querySelectorAll('[wm-nav]')
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            buttons.forEach(bnt => bnt.classList.remove('selected'))
            this.classList.add('selected')
        })
    })
    
    abrirPagina()
}


function abrirPagina() {
    document.querySelectorAll('[wm-nav]').forEach(link => {
        const conteudo = document.getElementById('conteudo')
        link.onclick = function(evento) {
            evento.preventDefault()
            fetch(link.getAttribute('wm-nav'))
                .then(resp => resp.text())
                .then(html => conteudo.innerHTML = html)
        }
    })
}

marcarBotao()









