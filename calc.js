import inquirer from "inquirer";

// Import the readline module
const readline = require('readline');

// Create readline interface
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Display welcome message
console.log('Welcome to the simple calculator!');

// Define operators
const operators = ['+', '-', '*', '/'];

// Define calculation function
function calculate(num1, operator, num2) {
    switch (operator) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            return num1 / num2;
        default:
            throw new Error('Invalid operator');
    }
}

// Start calculation
async function simpleCaculator() {
    // Get the first number
    const num1Str = await new Promise((resolve) => {
        rl.question('Please enter the first number: ', resolve);
    });

    // Check if the first number is valid
    const num1 = parseFloat(num1Str);
    if (isNaN(num1)) {
        console.error('The first number is invalid.');
        return;
    }

    // Get the operator
    const operatorStr = await new Promise((resolve) => {
        rl.question('Please enter the operator (+, -, *, /): ', resolve);
    });

    // Check if the operator is valid
    if (!operators.includes(operatorStr)) {
        console.error('Invalid operator.');
        return;
    }

    // Get the second number
    const num2Str = await new Promise((resolve) => {
        rl.question('Please enter the second number: ', resolve);
    });

    // Check if the second number is valid
    const num2 = parseFloat(num2Str);
    if (isNaN(num2)) {
        console.error('The second number is invalid.');
        return;
    }

    // Calculate the result
    const result = calculate(num1, operatorStr, num2);

    // Display the result
    console.log(`The result is: ${result}`);

    // Continue calculation
    rl.question('Do you want to continue calculating? (y/n): ', (answer) => {
        if (answer === 'y') {
            start();
        } else {
            // Exit calculator
            rl.close();
        }
    });
}

// Start calculation
// simpleCaculator();

module.exports = simpleCaculator
