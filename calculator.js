import chalk from 'chalk';
console.log(chalk.bgYellowBright.bold.redBright.italic("Calculate Now!"));
import inquirer from "inquirer";
let check = "Yes";
while (check == "Yes") {
    let user = await inquirer.prompt([
        {
            type: 'number',
            name: 'num1',
            message: chalk.bgRedBright.bold('Enter 1st number: ')
        },
        {
            type: 'number',
            name: 'num2',
            message: chalk.bgRed.bold('Enter 2nd number: ')
        },
        {
            type: 'list',
            name: 'sign',
            message: 'Select the Operator: ',
            choices: ['+', '-', '*', '/']
        }
    ]);
    let result = 0;
    if (user.sign === "+") {
        result = user.num1 + user.num2;
    }
    else if (user.sign === "-") {
        result = user.num1 - user.num2;
    }
    else if (user.sign === "*") {
        result = user.num1 * user.num2;
    }
    else if (user.sign === "/") {
        result = user.num1 / user.num2;
    }
    else {
        result = 0;
    }
    console.log(chalk.bgYellow.italic.underline(`Result =  ${result}`));
    let user2 = await inquirer.prompt({
        type: 'list',
        name: 'check',
        message: 'Do you want to perform another calculation',
        choices: ['Yes', 'No']
    });
    check = user2.check;
}
