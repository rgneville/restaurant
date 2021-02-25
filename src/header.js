function header () {
const hdr = document.querySelector('header');

const hdrContainer = document.createElement('div');
hdrContainer.id = "header-container";

const homeLink = document.createElement('div');
homeLink.classList.add("header-link");
homeLink.innerHTML = "home";
hdrContainer.appendChild(homeLink);

const menuLink = document.createElement('div');
menuLink.classList.add("header-link");
menuLink.innerHTML = "menu";
hdrContainer.appendChild(menuLink);

const aboutLink = document.createElement('div');
aboutLink.classList.add("header-link");
aboutLink.innerHTML = "about";
hdrContainer.appendChild(aboutLink);

hdr.appendChild(hdrContainer);
}

export default header;