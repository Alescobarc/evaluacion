// login.js

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('login-form').addEventListener('submit', function(event) {
        event.preventDefault(); // Evitar que el formulario se envíe por defecto
        
        // Obtener valores de los campos
        var email = document.getElementById('email').value.trim();
        var contraseña = document.getElementById('contraseña').value.trim();

        // Validar que los campos no estén vacíos
        if (email === '' || contraseña === '') {
            alert('Por favor completa todos los campos.');
            return;
        }

        // Redirigir a la página de inicio (index)
        window.location.href = "{% url 'indexlogin' %}";
    });

    // Escuchar el evento 'keydown' para la tecla Enter
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            event.preventDefault(); // Evitar que el formulario se envíe por defecto
            
            // Obtener el elemento enfocado
            var focusedElement = document.activeElement;

            // Verificar si el elemento enfocado es un campo de formulario
            if (focusedElement.tagName === 'INPUT' || focusedElement.tagName === 'TEXTAREA') {
                // Simular clic en el botón de ingresar
                document.getElementById('login-form').submit();
            }
        }
    });
});
