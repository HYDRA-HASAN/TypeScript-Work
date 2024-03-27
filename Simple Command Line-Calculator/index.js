import inquirer from "inquirer";
const answer = await inquirer.prompt([
    {
        type: 'number',
        name: 'num1',
        message: 'Enter the first number: '
    },
    {
        type: 'number',
        name: 'num2',
        message: 'Enter the second number: '
    },
    {
        type: 'list',
        name: 'operation',
        message: 'Choose an operation',
        choices: ['Addition', 'Subtraction', 'Multiplication', 'Division']
    }
]);
let result;
switch (answer.operation) {
    case 'Addition':
        result = answer.num1 + answer.num2;
        console.log("The answer for addition is " + result);
        break;
    case 'Subtraction':
        result = answer.num1 - answer.num2;
        console.log("The answer for subtraction is " + result);
        break;
    case 'Multiplication':
        result = answer.num1 * answer.num2;
        console.log("The answer for multiplication is " + result);
        break;
    case 'Division':
        result = answer.num1 / answer.num2;
        console.log("The answer for division is " + result);
        break;
    default:
        result = 0;
}
