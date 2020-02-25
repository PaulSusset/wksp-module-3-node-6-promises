const inquirer = require("inquirer");
const hiddenNum = Math.ceil(Math.random()* 100);
let guesses = 5;
const message = () => {
    return `Find a number between 1 and 100, you have ${guesses} guess(es) left`
}
const question = [
    {type: 'input',
    name: 'numberGuess',
    message: message
}];

const takeAGuess = () => {
    inquirer.prompt(question)
    .then(answer => {
        if (answer.numberGuess === hiddenNum){console.log('Well Done!')}
        else if (answer.numberGuess < hiddenNum){ 
            console.log('Your guess was lower than the number');
            if (guesses > 0){
                guesses = guesses-1;
                console.log(guesses);
                takeAGuess()}
        } else if (answer.numberGuess > hiddenNum) {
            console.log('Your guess was higher than the number');
            if (guesses > 0){
            guesses = guesses-1;
            takeAGuess()}
        }
        if (guesses === 0){console.log('you lose')}
        })
}
takeAGuess()