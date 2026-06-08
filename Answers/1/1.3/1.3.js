const item1 = document.querySelector('li');
item1.style.color = 'orange';

// Seleciona todas as <li> da página e joga na lista
const todosItens = document.querySelectorAll('li');

// Passa de item em item aplicando a borda pontilhada (dotted)
todosItens.forEach(function(item) {
    item.style.border = '2px dotted black';
});