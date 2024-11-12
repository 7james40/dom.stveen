function cambiarTexto() {
    const selectorTitulo = document.getElementById('titulo');
    const nombreUsuario = prompt("Ingrese su nombre");
    const contenedor = document.getElementById('cont-general');

    // Cambiando contenido de una etiqueta desde JS
    selectorTitulo.innerText = "James Segura";
    selectorTitulo.innerHTML = "<strong>USUARIO:</strong> " + nombreUsuario;
   
    selectorTitulo.style.backgroundColor = "white";
    selectorTitulo.style.color = "#000";
    selectorTitulo.style.padding = "20px";
    contenedor.classList.add('dia');
}

function circulo() {
    const selectorTitulo = document.getElementById('titulo');
    const circulo = document.getElementById('figura');

    selectorTitulo.innerText = "Circulo";
    circulo.style.borderRadius = "50%";
    circulo.style.backgroundColor = "orange";
}

function rombo() {
    const selectorTitulo = document.getElementById('titulo');
    const rombo = document.getElementById('figura');

    selectorTitulo.innerText = "Rombo";
    rombo.style.transform = "rotate(45deg)";
    rombo.style.borderRadius = "0";
    rombo.style.backgroundColor = "orange";
}

function fondoColor() {
    const fondo = document.getElementById('cont-general');
    fondo.style.background = "blue";
}

function fondoImagen() {
    const fondoImg = document.getElementById('cont-general');
    fondoImg.style.backgroundImage = "url('img/one1.jpg')";
}

function btnTop() {
    const figura = document.getElementById('figura');

    figura.style.position = "absolute";
    figura.style.top = "0";
    figura.style.right = "0";
    figura.style.left = "0";
}

function btnLeft() {
    const figura = document.getElementById('figura');

    figura.style.position = "absolute";
    figura.style.top = "0";
    figura.style.left = "0";
}

function btnRight() {
    const figura = document.getElementById('figura');

    figura.style.position = "absolute";
    figura.style.top = "0";
    figura.style.right = "0";
}

function btnBottom() {
    const figura = document.getElementById('figura');

    figura.style.position = "absolute";
    figura.style.top = "1000px";
    figura.style.right = "0";
    figura.style.left = "0";
}

function btnEstrella() {
    const selectorTitulo = document.getElementById('titulo');
    const estrella = document.getElementById('figura');

    selectorTitulo.innerText = "Estrella";
    estrella.style.clipPath = "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)";
    estrella.style.backgroundColor = "orange";
}

function panelLateral() {
    const panel = document.getElementById('panel-lateral');
    panel.classList.toggle('active');
}

function panelSuperior() {
    const panel = document.getElementById('panel-superior');
    panel.classList.toggle('active');
}

function diagonal() {
    const figura = document.getElementById('figura');
    figura.classList.toggle('diagonal');
}

function animation() {
    const figura = document.getElementById('figura');
    figura.classList.toggle('animation');
}

function fondoDegradado() {
    const contenedor = document.getElementById('cont-general');
    contenedor.classList.toggle('gradient');
}
