class TextSearch {
    constructor() {
        this.inputText = document.getElementById('inputText');
        this.searchText = document.getElementById('searchText');
        this.outputText = document.getElementById('outputText');
        this.searchButton = document.getElementById('searchButton');

        this.searchButton.addEventListener('click', () => this.searchAndHighlight());
    }

    searchAndHighlight() {
        const textToSearch = this.searchText.value;
        const textToHighlight = this.inputText.value;

        const regex = new RegExp(textToSearch, 'gi');
        const highlightedText = textToHighlight.replace(regex, match => `<span class="highlight">${match}</span>`);

        this.outputText.innerHTML = highlightedText;
    }
}

window.addEventListener('DOMContentLoaded', () => {
    new TextSearch();
});
