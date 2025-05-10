const carousel = document.getElementById('carousel');
const images = [
    '../imagenes/Restaurantes.png',
    '../imagenes/Cafeteria.png',
    '../imagenes/bares.png'
];

let index = 0;

function changeBackground() {
    carousel.style.backgroundImage = `url('${images[index]}')`;
    index = (index + 1) % images.length;
}

setInterval(changeBackground, 4000);
changeBackground();

function toggleForm() {
    const registerForm = document.getElementById('registerForm');
    const loginForm = document.getElementById('loginForm');
    if (registerForm.style.display === 'none') {
        registerForm.style.display = 'block';
        loginForm.style.display = 'none';
    } else {
        registerForm.style.display = 'none';
        loginForm.style.display = 'block';
    }
}

function showLogin() {
    document.getElementById('loginTab').classList.add('active');
    document.getElementById('registerTab').classList.remove('active');
    document.getElementById('loginForm').classList.add('active');
    document.getElementById('registerForm').classList.remove('active');
}

function showRegister() {
    document.getElementById('registerTab').classList.add('active');
    document.getElementById('loginTab').classList.remove('active');
    document.getElementById('registerForm').classList.add('active');
    document.getElementById('loginForm').classList.remove('active');
}

// Mostrar la sección de registro si el hash es #registerForm
if (window.location.hash === "#registerForm") {
    showRegister(); // Llama a la función que activa la vista de registro
}

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('register').addEventListener('submit', function (event) {
        event.preventDefault();

        const username = document.getElementById('username').value;
        const usernameMessage = document.getElementById('usernameMessage');
        const existingUsernames = ['user123', 'johndoe', 'admin']; // Simulamos un array de usuarios existentes

        if (existingUsernames.includes(username)) {
            usernameMessage.innerHTML = 'Nombre de usuario ya existe. ¿Por qué no pruebas con "user123_1"?';
            usernameMessage.style.color = 'red';
        } else {
            alert('¡Registrado con éxito!');
        }
    });
});
