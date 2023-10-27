class GradeVerifier {
    constructor(nameInput, subjectInput, grade1Input, grade2Input, grade3Input, resultElement) {
        this.nameInput = nameInput;
        this.subjectInput = subjectInput;
        this.grade1Input = grade1Input;
        this.grade2Input = grade2Input;
        this.grade3Input = grade3Input;
        this.resultElement = resultElement;
        this.verifyGrade = this.verifyGrade.bind(this);

        // Escuchar eventos de clic en el botón
        document.getElementById('check-button').addEventListener('click', this.verifyGrade);
    }

    verifyGrade() {
        const name = this.nameInput.value;
        const subject = this.subjectInput.value;
        const grade1 = parseFloat(this.grade1Input.value);
        const grade2 = parseFloat(this.grade2Input.value);
        const grade3 = parseFloat(this.grade3Input.value);

        if (isNaN(grade1) || isNaN(grade2) || isNaN(grade3)) {
            this.resultElement.textContent = 'Por favor, ingresa notas válidas.';
            return;
        }

        const average = (grade1 + grade2 + grade3) / 3;

        if (average >= 3.0) {
            this.resultElement.style.color = 'green';
            this.resultElement.textContent = `Felicitaciones ${name}, su nota es ${average.toFixed(2)}, Pasaste la materia ${subject}.`;
        } else {
            this.resultElement.style.color = 'red';
            this.resultElement.textContent = `Lo siento ${name}, su nota es ${average.toFixed(2)}, No pasaste la materia ${subject}.`;
        }
    }
}

// Obtener elementos del DOM
const nameInput = document.getElementById('name');
const subjectInput = document.getElementById('subject');
const grade1Input = document.getElementById('grade1');
const grade2Input = document.getElementById('grade2');
const grade3Input = document.getElementById('grade3');
const resultElement = document.getElementById('result');

// Crear una instancia de GradeVerifier
const gradeVerifier = new GradeVerifier(nameInput, subjectInput, grade1Input, grade2Input, grade3Input, resultElement);
