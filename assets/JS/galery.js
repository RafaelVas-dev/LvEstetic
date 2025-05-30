function iniciarGaleria({
    containerSelector,
    btnNavSelector,
    sliderSelector,
    btnAnteriorSelector,
    btnProximoSelector,
    autoplay = false,
    intervalo = 7000
})
{
    const sliders = document.querySelectorAll(containerSelector + ' ' + sliderSelector);
    const btnsNav = document.querySelectorAll(btnNavSelector);
    const btnAnterior = document.querySelector(btnAnteriorSelector);
    const btnProximo = document.querySelector(btnProximoSelector);
    let indexAtual = 0;
    const total = sliders.length;

    function mostrarSlider(i) {
        sliders.forEach(slide => slide.classList.remove('ativo'));
        btnsNav.forEach(btn => btn.classList.remove('ativo'));

        sliders[i].classList.add('ativo');
        if (btnsNav[i]) btnsNav[i].classList.add('ativo');
    }

    btnProximo?.addEventListener('click', () => {
        indexAtual = (indexAtual + 1) % total;
        mostrarSlider(indexAtual);
    });

    btnAnterior?.addEventListener('click', () => {
        indexAtual = (indexAtual - 1 + total) % total;
        mostrarSlider(indexAtual);
    });

    btnsNav.forEach((btn, i) => {
        btn.addEventListener('click', () => {
            indexAtual = i;
            mostrarSlider(indexAtual);
        });
    });

    if (autoplay) {
        setInterval(() => {
            indexAtual = (indexAtual + 1) % total;
            mostrarSlider(indexAtual);
        }, intervalo);
    }

    mostrarSlider(indexAtual); 
}

// Iniciar Galeria Desktop
iniciarGaleria({
    containerSelector: '.galery-desktop .cont-img',
    btnNavSelector: '.galery-desktop .btn-nav',
    sliderSelector: '.slider-img',
    btnAnteriorSelector: '#anter',
    btnProximoSelector: '#prox',
    autoplay: true
});

// Iniciar Galeria Mobile
iniciarGaleria({
    containerSelector: '.galery-mobile .cont-img',
    btnNavSelector: '.galery-mobile .btn-nav-mob',
    sliderSelector: '.slider-img',
    btnAnteriorSelector: '#anter-mobile',
    btnProximoSelector: '#prox-mobile',
    autoplay: false 
});


// galeria.js
export function carregarGaleria() {
  console.log("Galeria carregada");
};