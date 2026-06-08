
const quadrado = document.querySelector('.quadrado');
const botao = document.getElementById('toggleButton');

botao.addEventListener('click', function() {
    quadrado.classList.toggle('borda-azul');
    
});