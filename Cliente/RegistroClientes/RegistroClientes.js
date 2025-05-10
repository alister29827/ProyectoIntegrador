const carousel = document.getElementById('carousel');
const images = [
    '../imagenes/restaurante.png',
    '../imagenes/cafeteria.png',
    '../imagenes/bar.png'
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


    // Verificación de inicio de sesión con fetch
    document.getElementById('loginForm').addEventListener('submit', function (event) {
        event.preventDefault();

        const correo = document.querySelector('input[name="correo"]').value;
        const contrasena = document.querySelector('input[name="contrasena"]').value;

        const formData = new FormData();
        formData.append('correo', correo);
        formData.append('contrasena', contrasena);

        fetch('LoginCliente.php', {
            method: 'POST',
            body: formData
        })
        .then(response => response.text())
        .then(result => {
            if (result === "success") {
                window.location.href = '../InicioCliente/inicio.html';
            } else if (result === "wrong_password") {
                alert("Contraseña incorrecta");
            } else if (result === "not_found") {
                alert("Correo no registrado");
            } else {
                alert("Error al procesar los datos");
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert("Fallo de conexión");
        });
    });
});
