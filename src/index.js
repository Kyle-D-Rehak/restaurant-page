import './style.css';
import pageLoad from './pageload.js';
import home from './home.js';
import menu from './menu.js';
import contact from './contact.js';

pageLoad();

document.getElementById('home').addEventListener('click', (e) => {e.preventDefault(); home();} );

document.getElementById('menu').addEventListener('click', (e) => {e.preventDefault(); menu();} );

document.getElementById('contact').addEventListener('click', (e) => {e.preventDefault(); contact();} );
