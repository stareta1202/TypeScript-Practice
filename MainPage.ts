class Web {
    textInput: HTMLInputElement;
    textButton: HTMLButtonElement;
    textResult: HTMLTextAreaElement;


    constructor() {
        this.textInput = document.querySelector('#text-input');
        this.textButton = document.querySelector('#change-button');
        this.textResult = document.querySelector('#label');
        
    }

    init() {
        this.textButton.addEventListener('click', () => {
            const value: string = this.textInput.value;

            this.textResult.textContent = value;
        })

    }

}

const app: Web = new Web()
window.onload = () => {
    app.init();

}