function showAlertSuccess() {
    document.getElementById("alert-success").classList.add("show");
}

function showAlertError() {
    document.getElementById("alert-danger").classList.add("show");
}

// Función de validación de formulario
function validateForm() {
    // Obtener los valores de los campos
    const nombre = document.getElementById('nombre').value.trim();
    const apellido = document.getElementById('apellido').value.trim();
    const email = document.getElementById('email').value.trim();
    const password1 = document.getElementById('password1').value;
    const password2 = document.getElementById('password2').value;
    const terminos = document.getElementById('terminos').checked;

    // Limpiar mensajes de error y éxito previos
    document.getElementById("alert-success").classList.remove("show");
    document.getElementById("alert-danger").classList.remove("show");

    // Validar que ningún campo esté vacío
    if (nombre === '' || apellido === '' || email === '' || password1 === '' || password2 === '') {
        showAlertError();
        return false;
    }

    // Validar que la contraseña tenga al menos 6 caracteres
    if (password1.length < 6) {
        showAlertError();
        return false;
    }

    // Validar que las contraseñas coincidan
    if (password1 !== password2) {
        showAlertError();
        return false;
    }

    // Validar que se hayan aceptado los términos y condiciones
    if (!terminos) {
        showAlertError();
        return false;
    }

    // Si todas las validaciones pasan
    showAlertSuccess();
}

// Vincular la función de validación al botón de registro
document.getElementById('regBtn').addEventListener('click', function(event) {
    event.preventDefault(); // Evita el envío del formulario
    validateForm(); // Llama a la función de validación
});

