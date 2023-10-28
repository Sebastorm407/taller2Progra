class CharCounter {
    constructor(textArea, charCountElement) {
        this.textArea = textArea;
        this.charCountElement = charCountElement;
        this.updateCharCount = this.updateCharCount.bind(this);

        document.getElementById('count-button').addEventListener('click', this.updateCharCount);

        this.updateCharCount();
    }

    updateCharCount() {
        const text = this.textArea.value;
        const charCount = text.length;
        this.charCountElement.textContent = `${charCount} caracteres`;
    }
}

const textArea = document.getElementById('text-input');
const charCountElement = document.getElementById('char-count');

const charCounter = new CharCounter(textArea, charCountElement);
