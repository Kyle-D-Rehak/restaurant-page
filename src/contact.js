export default function contact() {
    const main = document.getElementById('main');
    console.log('contact() triggered');

    main.innerHTML = '';
    const container = document.createElement('div');
    main.appendChild(container);
    container.classList.add('container');
    container.innerHTML = `<h2 class="text-lrg">Contact</h2><p>Please don't call us.</p>`;

}