function imprimir() {
    let nome = document.getElementById('nome').innerHTML
    let sobrenome = document.getElementById('sobrenome').innerHTML

    const nomeTitle = document.title

    document.title = `${nome.toLowerCase()}_${sobrenome.toLowerCase()}_curriculo`

    window.print()

    document.title = nomeTitle
}



