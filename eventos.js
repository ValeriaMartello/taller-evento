function saludar() {
    alert('Hola!');
}

document.getElementById('saludar-boton').addEventListener('click', function(event) {
    saludar();
    event.stopPropagation();
});

document.getElementById('contenedor').addEventListener('click', function() {
    alert('Hola! Soy el div');
});