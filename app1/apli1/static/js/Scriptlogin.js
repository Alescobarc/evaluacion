// login.js

document.addEventListener('DOMContentLoaded', function() {
    var form = document.getElementById('login-form');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Evita que el formulario se envíe por defecto

        // Aquí puedes realizar la validación de campos si es necesario

        // Redirigir a la página index
        window.location.href = "{% url 'indexlogin' %}";
    });
});
