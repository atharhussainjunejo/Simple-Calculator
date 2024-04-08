#! /usr/bin/env d
import inquirer from "inquirer";
let answers = await inquirer.prompt([
    {
        type: "number",
        name: "firstNumber",
        message: "Enter first number"
    },
    {
        type: "number",
        name: "secondNumber",
        message: "Enter second number"
    },
    {
        message: "Select any operator from list to performe your operations",
        type: "list",
        name: "operator",
        choices: ['Addition', 'Subtraction', 'Multiplication', 'Divion'],
    }
]);
if (answers.operator === "Addition") {
    console.log(answers.firstNumber + answers.secondNumber);
}
else if (answers.operator === "Subtraction") {
    console.log(answers.firstNumber - answers.secondNumber);
}
else if (answers.operator === "Multiplication") {
    console.log(answers.firstNumber * answers.secondNumber);
}
else if (answers.operator === "Divion") {
    console.log(answers.firstNumber / answers.secondNumber);
}
else {
    console.log(`please put any value`);
}
