$(document).ready(function() {
    // Manejar clic en el botón "Pagar"
    $('#pagar-btn').click(function(event) {
        event.preventDefault();  // Evitar el comportamiento por defecto del enlace
        var checkoutUrl = $(this).data('checkout-url');  // Obtener la URL desde el atributo de datos
        window.location.href = checkoutUrl;  // Redireccionar a la URL de checkout
    });

    // Resto del código JavaScript para manejar la lógica de tu carrito de compras
    var isDollar = true; // Estado inicial: los precios están en dólares
    var exchangeRate = 926; // Tasa de cambio de dólares a pesos chilenos

    function updateTotal() {
        var total = 0;
        $('.product-row').each(function() {
            var price = parseFloat($(this).find('.product-price').data('price'));
            var quantity = parseInt($(this).find('input[name="quantity"]').val());
            total += price * quantity;
        });
        if (isDollar) {
            $('#cart-total').text('$' + total.toFixed(2));
        } else {
            $('#cart-total').text('$' + Math.round(total * exchangeRate) + ' CLP');
        }

        var pagarBtn = $('#pagar-btn');
        if (total > 0) {
            pagarBtn.removeClass('disabled').attr('href', pagarBtn.data('checkout-url'));
        } else {
            pagarBtn.addClass('disabled').removeAttr('href');
        }
    }

    $('#convertToPesos').click(function() {
        $.getJSON('https://mindicador.cl/api', function(data) {
            exchangeRate = data.dolar.valor;

            $('.product-price').each(function() {
                var price = parseFloat($(this).data('price'));
                if (isDollar) {
                    var priceInPesos = Math.round(price * exchangeRate);
                    $(this).text('$' + priceInPesos + ' CLP');
                    $(this).data('price-in-pesos', priceInPesos); // Guardar el precio en pesos
                } else {
                    var priceInDollars = price;
                    if ($(this).data('price-in-pesos')) {
                        priceInDollars = (parseFloat($(this).data('price-in-pesos')) / exchangeRate).toFixed(2);
                    }
                    $(this).text('$' + priceInDollars);
                }
            });

            isDollar = !isDollar;
            updateTotal();
        }).fail(function() {
            console.log('Error al consumir la API!');
        });
    });

    $('.quantity-change').click(function() {
        var input = $(this).parent().find('input[name="quantity"]');
        var newValue = parseInt(input.val()) + ($(this).hasClass('increase') ? 1 : -1);
        if (newValue >= 0) {
            input.val(newValue);
            updateTotal();
        }
    });

    $('.remove-product').click(function() {
        $(this).closest('.product-row').remove();
        updateTotal();
    });

    $('input[name="quantity"]').change(function() {
        if ($(this).val() < 0) {
            $(this).val(0);
        }
        updateTotal();
    });

    updateTotal();
});
