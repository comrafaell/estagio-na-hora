function imprimir(){
    var pegar_dados = document.getElementsById('curriculo').innerHTML;

    var janela = window.open('', '', 'width=auto, heigth=auto');
    janela.document.write('<html><head>');
    janela.document.write('<title>pdf</title></head>');
    janela.document.write('<html><head>');
    janela.document.write('<body>');
    janela.document.write(pegar_dados);
    janela.document.write('</body></html>');
    janela.document.close();
    janela.print();


    
}
