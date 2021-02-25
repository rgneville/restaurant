function footer () {
    ftr = document.querySelector('footer');
    ftrText = document.createElement('p');
    ftrText.innerHTML = "Made by Ryan Neville";
    ftr.appendChild(ftrText);
}

export default footer;