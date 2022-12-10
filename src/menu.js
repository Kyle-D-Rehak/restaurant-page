export default function menu() {
    const main = document.getElementById('main');
    console.log('menu() triggered');

    main.innerHTML = '';
    const container = document.createElement('div');
    main.appendChild(container);
    container.classList.add('container');
    container.innerHTML = `<h2 class="text-lrg">Pssch Shaw Special</h2><p>Our signature pizza</p>`;

}