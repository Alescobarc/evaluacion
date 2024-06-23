// checkout.js

$(document).ready(function() {
    $('#checkout-form').on('submit', function(e) {
        e.preventDefault();
        $('#loader').show();
        var campos = ['firstName', 'lastName', 'email', 'telefono', 'direccion', 'pais', 'region', 'comuna', 'cpostal', 'cc-name', 'cc-number', 'cc-expiration', 'cc-cvv'];
        for (var i = 0; i < campos.length; i++) {
            if ($('#' + campos[i]).val() === '') {
                alert('Por favor rellene el campo ' + campos[i]);
                $('#loader').hide();
                return false;
            }
        }

        var email = $('#email').val();
        var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
        if (!emailReg.test(email)) {
            alert('Por favor ingrese un correo electrónico válido');
            $('#loader').hide();
            return false;
        }

        // Validación del número de tarjeta con la nueva expresión regular
        var ccNumber = $('#cc-number').val();
        var ccReg = /^[0-9]{16}$/;
        if (!ccReg.test(ccNumber)) {
            alert('Por favor ingrese un número de tarjeta válido (16 dígitos)');
            $('#loader').hide();
            return false;
        }

        setTimeout(function() {
            $('#loader').html('<p class="text-light">Gracias por su compra</p>');
            setTimeout(function() {
                $('#loader').hide();
            }, 2000);
            setTimeout(function() {
                window.location.href = '/';  // O la URL correcta de tu página principal


            }, 5000);
        }, 2000);
    });
});
