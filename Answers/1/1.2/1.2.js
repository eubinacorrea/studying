const botao = document.getElementById("botao");

botao.addEventListener("click", function () {
  const elemntos = document.getElementsByClassName("caixa");
  const quantidade = elemntos.length;
  alert(`Existem ${quantidade} caixas`);
});
