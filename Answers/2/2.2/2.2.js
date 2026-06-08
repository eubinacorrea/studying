
const lampada = document.getElementById('foto');
const botaoLigar = document.getElementById('btnLigar');
const botaoDesligar = document.getElementById('btnDesligar');

btnLigar.addEventListener('click', () => {
    lampada.src = 'https://img.magnific.com/vetores-gratis/lampada-iluminada-realista-isolada_1284-41774.jpg?semt=ais_hybrid&w=740&q=80';
}); 

btnDesligar.addEventListener('click', () => {
    lampada.src = 'https://img.magnific.com/vetores-gratis/lampada-realista-isolada_1284-41741.jpg?semt=ais_hybrid&w=740&q=80';
}); 