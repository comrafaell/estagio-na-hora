function imprimir() {
    let nome = document.getElementById('nome').innerHTML
    let sobrenome = document.getElementById('sobrenome').innerHTML

    document.title = `${nome.toLowerCase()}_${sobrenome.toLowerCase()}_curriculo`

    let conteudo = document.getElementsByTagName('main').innerHTML

    window.print()
    
}



