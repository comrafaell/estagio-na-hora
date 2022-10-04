const menu_toggle = document.querySelector('.menu-toggle')
const navigation = document.querySelector('.navigation')
const conteudo = document.querySelector('.conteudo')
const rodape = document.querySelector('.rodape')

menu_toggle.onclick = function() {
    navigation.classList.toggle('active')

    if(navigation.classList[1] === 'active') {
        navigation.style.width = '245px'
        conteudo.style.width = '1fr'
        rodape.style.width = '100%'
        console.log('Ativado')
    } else {
        navigation.style.width = '80px'
        conteudo.style.width = '1fr'
        rodape.style.width = '100%'
        console.log('Desativado')
    }
} 













