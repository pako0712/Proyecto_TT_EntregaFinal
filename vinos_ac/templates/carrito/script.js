// Inicializar el carrito y el total
let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
let total = parseFloat(localStorage.getItem('total')) || 0;

document.addEventListener('DOMContentLoaded', () => {
    actualizarCarrito();
});

// Función para agregar productos al carrito
function agregarAlCarrito(nombre, precio) {
    // Añadir el producto al carrito
    carrito.push({ nombre, precio });
    total += precio;
    
    // Guardar en localStorage
    localStorage.setItem('carrito', JSON.stringify(carrito));
    localStorage.setItem('total', total);
    
    // Actualizar la vista del carrito
    actualizarCarrito();
}

// Función para eliminar productos del carrito
function eliminarDelCarrito(index) {
    total -= carrito[index].precio;
    carrito.splice(index, 1);

    // Guardar en localStorage
    localStorage.setItem('carrito', JSON.stringify(carrito));
    localStorage.setItem('total', total);
    
    // Actualizar la vista del carrito
    actualizarCarrito();
}

// Función para actualizar la vista del carrito
function actualizarCarrito() {
    const carritoList = document.getElementById('carrito');
    const totalElemento = document.getElementById('total');

    // Limpiar el carrito visual
    carritoList.innerHTML = '';

    // Mostrar los productos en el carrito
    carrito.forEach((producto, index) => {
        const li = document.createElement('li');
        li.innerHTML = `${producto.nombre} - $${producto.precio} <button onclick="eliminarDelCarrito(${index})">Eliminar</button>`;
        carritoList.appendChild(li);
    });

    // Mostrar el total
    totalElemento.textContent = total;
}

// Función para vaciar el carrito
function vaciarCarrito() {
    carrito = [];
    total = 0;

    // Eliminar datos del localStorage
    localStorage.removeItem('carrito');
    localStorage.removeItem('total');
    
    // Actualizar la vista del carrito
    actualizarCarrito();
}
function pediAhora() {
    alert("Boton ¡Pedi ahora! presionado");
}

// JavaScript para mostrar el mensaje de "Gracias por su compra"
document.getElementById('finalizarCompra').addEventListener('click', function() {
    var mensajeGracias = document.getElementById('mensajeGracias');
    
    // Muestra el mensaje de agradecimiento
    mensajeGracias.classList.add('visible');

// Oculta el mensaje después de 3 segundos
setTimeout(function() {
    mensajeGracias.classList.remove('visible');
}, 5000); // 3 segundos
});