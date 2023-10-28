class DataTypeIdentifier {
    constructor(userInput, dataTypeElement) {
        this.userInput = userInput;
        this.dataTypeElement = dataTypeElement;
        this.checkDataType = this.checkDataType.bind(this);

        document.getElementById('check-button').addEventListener('click', this.checkDataType);
    }

    checkDataType() {
        const input = this.userInput.value;
        console.log(input)
        const dataType = this.identifyDataType(input);
        this.dataTypeElement.textContent = `Tipo de dato: ${dataType}`;
    }

    identifyDataType(value) {
        if (!isNaN(value)) {
            return 'número';
        } else {
            return 'texto';
        }
       

    }
}

const userInput = document.getElementById('user-input');
const dataTypeElement = document.getElementById('data-type');

const dataTypeIdentifier = new DataTypeIdentifier(userInput, dataTypeElement);
