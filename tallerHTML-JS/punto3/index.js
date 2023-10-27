class AgeVerifier {
    constructor(nameInput, ageInput, resultElement) {
        this.nameInput = nameInput;
        this.ageInput = ageInput;
        this.resultElement = resultElement;
        this.verifyAge = this.verifyAge.bind(this);

        // Escuchar eventos de clic en el botón
        document.getElementById('check-button').addEventListener('click', this.verifyAge);
    }

    verifyAge() {
        const name = this.nameInput.value;
        const age = parseInt(this.ageInput.value, 10);

        if (isNaN(age) || age < 0) {
            this.resultElement.textContent = 'No es una edad válida.';
        } else if (age >= 18) {
            this.resultElement.textContent = `Hola ${name}, eres mayor de edad.`;
        } else {
            this.resultElement.textContent = `Hola ${name}, no eres mayor de edad.`;
        }
    }
}

// Obtener elementos del DOM
const nameInput = document.getElementById('name');
const ageInput = document.getElementById('age');
const resultElement = document.getElementById('result');

// Crear una instancia de AgeVerifier
const ageVerifier = new AgeVerifier(nameInput, ageInput, resultElement);
