document.querySelector('.menu-open').addEventListener('click', open);
document.querySelector('.menu-close').addEventListener('click', close);

function open() {
    document.getElementById("menu-itens").style.display = 'flex';
}

function close() {
    document.getElementById("menu-itens").style.display = 'none';
}