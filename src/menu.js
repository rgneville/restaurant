function menu () {
    const cntnr = document.querySelector('#content');

    const menuImg = document.createElement('img');
    menuImg.src = "https://lh3.googleusercontent.com/pw/ACtC-3fBiFszBfqvZrSE5-z_JwhzhxpPN4IqbMNC_32QP0ua7LUD2U78lYKDjH-ANNijNs7Ws_ATnNn7SprSGK-cH9ZHYBajLz6pfZ9ExXs8mOpypAThOuZ-7oDRGCHPeZYWPUlZxiXnV4idz5bFlZu9eSQm=w799-h533-no?authuser=0";
    cntnr.appendChild(menuImg);

    const firstItem = document.createElement('p');
    firstItem.innerHTML = "rack of lamb, split peas, fennel, earth  10";
    firstItem.classList.add("menu-item");
    cntnr.appendChild(firstItem);

    const secondItem = document.createElement('p');
    secondItem.innerHTML = "chicken thigh, cranberry, polenta, sage, fire  14";
    secondItem.classList.add("menu-item");
    cntnr.appendChild(secondItem);

    const thirdItem = document.createElement('p');
    thirdItem.innerHTML = "tofu, wasabi, potato fondant, miso, wind  12";
    thirdItem.classList.add("menu-item");
    cntnr.appendChild(thirdItem);

    const fourthItem = document.createElement('p');
    fourthItem.innerHTML = "hake, lemon, capers, the sea  18";
    fourthItem.classList.add("menu-item");
    cntnr.appendChild(fourthItem);
}

export default menu;