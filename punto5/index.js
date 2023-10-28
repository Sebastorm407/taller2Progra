document.addEventListener("DOMContentLoaded", function() {
    const numberInput = document.getElementById("numberInput");
    const identifyNumberButton = document.getElementById("identifyNumber");
    const resultParagraph = document.getElementById("result");

    identifyNumberButton.addEventListener("click", function() {
        const inputText = numberInput.value;
        const number = parseFloat(inputText);

        if (isNaN(number)) {
            resultParagraph.textContent = "Debe ingresar números enteros.";
        } else if (!Number.isInteger(number) || number <= 0) {
            resultParagraph.textContent = "Debe ingresar números enteros positivos.";
        } else if (number % 2 === 0) {
            resultParagraph.textContent = "Par";
        } else {
            resultParagraph.textContent = "Impar";
        }
    });
});
