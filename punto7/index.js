document.addEventListener("DOMContentLoaded", function() {
    const numberAInput = document.getElementById("numberA");
    const numberBInput = document.getElementById("numberB");
    const checkDivisibilityButton = document.getElementById("checkDivisibility");
    const resultParagraph = document.getElementById("result");

    checkDivisibilityButton.addEventListener("click", function() {
        const numberA = parseFloat(numberAInput.value);
        const numberB = parseFloat(numberBInput.value);

        if (!Number.isInteger(numberA) || !Number.isInteger(numberB) || numberA < 0 || numberB <= 0) {
            resultParagraph.textContent = "Por favor, ingrese dos números enteros positivos.";
        } else if (numberA % numberB === 0) {
            resultParagraph.textContent = `El número ${numberA} es divisible entre el número ${numberB}.`;
            resultParagraph.classList.add("green");
        } else {
            resultParagraph.textContent = `El número ${numberA} no es divisible entre el número ${numberB}.`;
            resultParagraph.classList.remove("green");
        }
    });
});
