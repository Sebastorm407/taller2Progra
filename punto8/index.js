document.addEventListener("DOMContentLoaded", function() {
    const numberListInput = document.getElementById("numberList");
    const identifyNumbersButton = document.getElementById("identifyNumbers");
    const outputDiv = document.getElementById("output");

    identifyNumbersButton.addEventListener("click", function() {
        const inputText = numberListInput.value;
        const numbers = inputText.split(",");

        outputDiv.innerHTML = "";

        numbers.forEach(function(number) {
            const num = parseFloat(number);

            if (!Number.isInteger(num)) {
                const errorMessage = document.createElement("p");
                errorMessage.textContent = `${number} no es un número entero`;
                errorMessage.style.color = "red";
                outputDiv.appendChild(errorMessage);
            } else {
                const resultMessage = document.createElement("p");
                resultMessage.textContent = `${num} es número ${num % 2 === 0 ? "par" : "impar"}`;
                resultMessage.style.color = num % 2 === 0 ? "blue" : "green";
                outputDiv.appendChild(resultMessage);
            }
        });
    });
});
