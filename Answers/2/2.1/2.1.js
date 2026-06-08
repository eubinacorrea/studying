const areaResultado = document.getElementById('resultado');
const btnInnerHTML = document.getElementById('btnInnerHTML');
const btnTextContent = document.getElementById('btnTextContent');

const textoComTags = "<strong>Texto em negrito</strong>";

btnInnerHTML.addEventListener('click', () => {
    areaResultado.innerHTML = textoComTags;
});

btnTextContent.addEventListener('click', () => {
    areaResultado.textContent = textoComTags;
});

// O botão "Texto em negrito com innerHTML" irá renderizar o texto em negrito, enquanto o botão "Texto em negrito com textContent" irá exibir as tags HTML como texto normal.