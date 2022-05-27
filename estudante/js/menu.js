function mudarCor(valor) {
    let ident = valor.id
    let elemento = document.getElementById(ident)
    let cor = elemento.style.backgroundColor
    
    if(cor != "rgb(255, 255, 255)"){
        outraCor(ident)
        corNormal(ident)
        idAntigo = ident
    }
    
}

function outraCor(ident2){
    let elemento = document.getElementById(ident2)
    elemento.style.backgroundColor = "#fff";
    elemento.style.color = "#48975d";
}

function corNormal(ident2){
    let ident = valor.id
    let elemento = document.getElementById(ident)
    elemento.style.backgroundColor = "#397D4B";
    elemento.style.color = "#fff";
}