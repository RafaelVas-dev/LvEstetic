// Contato JS

const btn = document.querySelectorAll('.btn');

btn.onmousemove = function(e) {
    let x = e.pageX - btn.offsetLeft;
    let y = e.pageY - btn.offsetTop;

    btn.style.setProperty('--eixoX', x + 'px');
    btn.style.setProperty('--eixoY', y + 'px');
};

// contato.js
export function carregarContato() {
  console.log("Contato carregado");
}