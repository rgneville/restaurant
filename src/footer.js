function footer () {
    const ftr = document.querySelector('footer');
    console.log(ftr);
    const ftrText = document.createElement('div');
    ftrText.innerHTML = "Made by Ryan Neville";
    ftr.appendChild(ftrText);
    return
}

export default footer;