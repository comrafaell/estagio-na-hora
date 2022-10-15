(function () {
    function navegarViaAjax(hash="#/curriculo.html") {
        if (!hash) return

        const link = document.querySelector(`[wm-link='${hash}']`)
        if(!link) return

        let nomeTitle = document.querySelector(`[wm-link='${hash}']`).querySelector('[secao]').attributes['secao'].value

        document.title = `Estudante | ${nomeTitle}`

        const destino = document.querySelector('[wm-link-destino]')

        const url = '/paginas' + hash.substring(1)

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

    function configurarLinks() {
        document.querySelectorAll('[wm-link]')
            .forEach(link => {
                link.href = link.attributes['wm-link'].value
            })
    }

    function navegacaoInicial() {
        if (location.hash) {
            navegarViaAjax(location.hash)
        } else {
            const primeiroLink = document.querySelector('[wm-link="#/curriculo.html"]')
            navegarViaAjax(primeiroLink.hash)
        }
    }

    window.onhashchange = e => navegarViaAjax(location.hash)
    
    configurarLinks()
    navegacaoInicial()
})()

$(function(){
    $('ul li button').click(function(i){
        $('ul li button').removeClass('active');
        $(this).addClass('active');
        $('.content').each(function(index) {
            $(this).toggleClass('active');
        });
    });
});