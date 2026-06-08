const texto = document.getElementById('campoTexto');
const botao = document.getElementById('botaoAdicionar');
botao.addEventListener('click', function() {
    const novaTarefa = document.createElement('li');
    novaTarefa.textContent = texto.value;
    const minhaLista = document.getElementById('minhaLista');
    minhaLista.appendChild(novaTarefa);
    texto.value = '';
});