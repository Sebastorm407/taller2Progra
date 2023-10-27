document.getElementById('check-button').addEventListener('click', function () {
    const numberInput = document.getElementById('number');
    const resultElement = document.getElementById('result');

    // Obtener el número ingresado por el usuario
    const number = parseFloat(numberInput.value);

    // Verificar si el número es un entero positivo
    if (!isNaN(number) && Number.isInteger(number) && number > 0) {
        // Determinar si el número es par o impar
        if (number % 2 === 0) {
            resultElement.textContent = 'Par';
        } else {
            resultElement.textContent = 'Impar';
        }
    } else {
        resultElement.textContent = 'Debe ingresar números enteros positivos.';
    }
});
