import home from "./home";
import menu from './menu.js';

function header () {
const hdr = document.querySelector('header');

const hdrContainer = document.createElement('div');
hdrContainer.id = "header-container";

const homeLink = document.createElement('div');
homeLink.classList.add("header-link");
homeLink.innerHTML = "home";
homeLink.addEventListener('click',() => {
    clearContent();
    home();
});
hdrContainer.appendChild(homeLink);

const menuLink = document.createElement('div');
menuLink.classList.add("header-link");
menuLink.innerHTML = "menu";
menuLink.addEventListener('click',() => {
    clearContent();
    menu();
});
hdrContainer.appendChild(menuLink);

const aboutLink = document.createElement('div');
aboutLink.classList.add("header-link");
aboutLink.id = "aboutlink";
aboutLink.innerHTML = "about";
hdrContainer.appendChild(aboutLink);

hdr.appendChild(hdrContainer);
return
}

function clearContent () {
    const cntnr = document.querySelector('#content');
    cntnr.innerHTML = "";
}

export default header;