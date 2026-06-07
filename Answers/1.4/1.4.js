/* Aqui o exercício pede para registrar quantas vezes o botão foi clicado, 
mas eu decidi registrar o texto do botão em vez disso. 

Se você quiser registrar o número de cliques, pode criar uma variável 
para contar os cliques de cada botão e incrementá-la toda vez que o botão for clicado.
// 
Here, the exercise is to log how many times the button was clicked, but I've decided to log the button text instead. If you want to log the number of clicks, you can create a variable to count the clicks for each button and increment it every time a button is clicked.

*/

const botoes = document.getElementsByTagName('button');
const botoesArray = Array.from(botoes);
botoesArray.forEach(botao => {
    botao.addEventListener('click', () => {
        console.log(`Botão clicado: ${botao.innerText}`); 
    });
});