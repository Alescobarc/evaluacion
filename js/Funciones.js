var isDollar = true; // Estado inicial: los precios están en dólares
var exchangeRate = 926; // Tasa de cambio de dólares a pesos chilenos
document.getElementById('convertToPesos').addEventListener('click', function() {
       var priceElements = document.querySelectorAll('.pesoschilenos');
        priceElements.forEach(function(priceElement) {
           var price = parseFloat(priceElement.textContent.replace('$', '').replace(' CLP', ''));
              if (isDollar) {
              // Si los precios están en dólares, conviértelos a pesos chilenos
              var priceInPesos = Math.round(price * exchangeRate);
              priceElement.textContent = '$' + priceInPesos + ' CLP';
              } else {
              // Si los precios están en pesos chilenos, conviértelos a dólares
              var priceInDollars = Math.round(price / exchangeRate);
              priceElement.textContent = '$' + priceInDollars;
             }
});
// Cambiar el estado
isDollar = !isDollar;
});




document.querySelector('.w-100.btn.btn-primary.btn-lg').addEventListener('click', function(event) {
// Evita la acción predeterminada del enlace
event.preventDefault();

// Muestra el loader
document.getElementById('loader').style.display = 'block';

// Espera 2 segundos, luego muestra el mensaje de agradecimiento y oculta el loader
setTimeout(function() {
    document.getElementById('loader').innerHTML = '<p class= text-light>Gracias por su compra</p>';
    setTimeout(function() {
        document.getElementById('loader').style.display = 'none';
    }, 2000);
}, 2000);
});
