// Aqui, o código tenta obter o tamanho atual da fonte usando document.body.style.fontSize. No entanto, se o tamanho da fonte ainda não tiver sido definido diretamente no estilo do corpo (ou seja, se for uma string vazia), o parseInt retornará NaN, o que pode causar problemas ao tentar aumentar a fonte. 
// No caso foi adicionado em <body> um font-size: 16px; para garantir que o tamanho da fonte seja definido desde o início, evitando assim o problema do NaN e permitindo que o aumento da fonte funcione corretamente.
const botaoAumentarFonte = document.getElementById("btnAumentarFonte");

botaoAumentarFonte.addEventListener("click", function () {
  const tamanhoAtualTexto = document.body.style.fontSize;
  const numeroPuro = parseInt(tamanhoAtualTexto);
  const novoTamanho = numeroPuro + 2;
  document.body.style.fontSize = novoTamanho + "px";
  console.log(novoTamanho);
});

// Nessa versão abaixo, adicionamos uma verificação para garantir que, caso o tamanho da fonte ainda não tenha sido definido (ou seja, seja uma string vazia), ele seja inicializado com um valor padrão de "16px". Isso evita que o parseInt retorne NaN e permite que o aumento da fonte funcione corretamente desde o início.
const botaoAumentarFonte = document.getElementById("btnAumentarFonte");

botaoAumentarFonte.addEventListener("click", function () {
  let tamanhoAtual = document.body.style.fontSize;
  if (!tamanhoAtual) {
    tamanhoAtual = "16px";
  }
  const numeroPuro = parseInt(tamanhoAtual, 10);
  const novoTamanho = numeroPuro + 2;
  document.body.style.fontSize = novoTamanho + "px";
});
