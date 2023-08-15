const buttons = document.querySelectorAll('button'); // Get all button elements

// Add a click event listener to each button
buttons.forEach(button => {
    button.addEventListener('click', () => {
        const buttonText = button.textContent; // Get the text content of the clicked button

        // Check if the button text is a number
        if (!isNaN(buttonText)) {
            console.log(buttonText);
        } else {
            console.log(buttonText);
        }
    });
});

class Calculator{
    constructor(){
        this._result = 0;
        this._inputs = [];
        this.operation = '';
    }

    add(){
        this._result = this._inputs.reduce((res,num)=>res + num,this._result);
    }
    subtract(){
        this._result = this._inputs.reduce((res, num) => res - num, this._result);
    }

    multiply() {
        this._result = this._inputs.reduce((res, num) => res * num, this._result);
    }
    divide() {
        this._result = this._inputs.reduce((res, num) => res / num, this._result);
    }

    get output(){
        return this._result;
    }

    set inputs(values){
        this._inputs = values;
    }
}

// const calc = new Calculator();
// calc.inputs = [1,2];
// calc.add();
// console.log(calc.output);