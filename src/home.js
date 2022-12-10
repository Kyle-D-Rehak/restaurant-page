export default function home() {
    const main = document.getElementById('main');
    console.log('home() triggered');

    main.innerHTML = '';
    const container = document.createElement('div');
    main.appendChild(container);
    container.classList.add('container');
    container.innerHTML = `<h2 class="text-xl">Pssch Shaw Pizza Co.</h2><p class="text-lrg">eat it.</p>`;

}