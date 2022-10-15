/* (function () {
    function navegarViaAjaxVagas(hashVagas="#/vagas.html") {
        if (!hashVagas) return

        const linkVagas = document.querySelector(`[wm-link-vagas='${hashVagas}']`)
        if(!linkVagas) return

        const destino = document.querySelector('[wm-link-vagas-destino]')

        const url = '/' + hashVagas.substring(1)

        fetch(url)
            .then(resp => resp.text())
            .then(html => {
                destino.innerHTML = html
                const resultado = html.match(/\<script\>([\s\S]*)\<\/script\>/)
                if(resultado && resultado.length >= 2) {
                    eval(resultado[1])
                }
            })
    }

    function configurarLinkVagas() {
        document.querySelectorAll('[wm-link-vagas]')
            .forEach(linkVagas => {
                linkVagas.href = linkVagas.attributes['wm-link-vagas'].value
            })
    }

    function navegacaoInicialVagas() {
        if (location.hashVagas) {
            navegarViaAjaxVagas(location.hashVagas)
        } else {
            const primeiroLinkVagas = document.querySelector('[wm-link-vagas="#/vagas.html"]')
            navegarViaAjaxVagas(primeiroLinkVagas.hashVagas)
        }
    }

    window.onhashchange = e => navegarViaAjaxVagas(location.hashVagas)
    
    configurarLinkVagas()
    navegacaoInicialVagas()
})() */


/* document.querySelectorAll('[wm-nav]').forEach(linkVagas => {
    const conteudo = document.getElementById('conteudo')

    console.log(linkVagas.getAttribute('wm-nav'))

    linkVagas.onclick = function(e) {
        e.preventDefault()
        fetch(linkVagas.getAttribute('wm-nav'))
            .then(resp => resp.text())
            .then(html => conteudo.innerHTML = html)
   }
}) */
