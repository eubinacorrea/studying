const botao = document.getElementById('botao');
const paragrafo = document.getElementById('paragrafo');

botao.addEventListener('click', function() {
    const textoDoParagrafo = paragrafo.textContent;
    console.log(textoDoParagrafo);
});