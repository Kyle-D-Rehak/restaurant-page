import homeLoader from './home.js';

export default function pageLoad() {
    const content = document.getElementById('content');

    const header = document.createElement('div');
    header.id = 'header';
    content.appendChild(header);

    const title = document.createElement('h1');
    title.innerHTML = 'Pssch Shaw Pizza Co.';
    header.appendChild(title);

    const list = document.createElement('ul');
    list.id = 'nav-links';
    header.appendChild(list);

    const home = document.createElement('li');
    list.appendChild(home);
    home.innerHTML = `<a href="" id="home">Home</a>`;

    const menu = document.createElement('li');
    list.appendChild(menu);
    menu.innerHTML = `<a href="" id="menu">Menu</a>`;

    const contact = document.createElement('li');
    list.appendChild(contact);
    contact.innerHTML = `<a href="" id="contact">Contact Us</a>`;

    const main = document.createElement('div');
    main.id = 'main';
    content.appendChild(main);

    homeLoader();
}