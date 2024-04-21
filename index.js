#! /usr/bin/env node
import inquirer from "inquirer";
const randomnumber = Math.floor(Math.random() * 6 + 1);
console.log(randomnumber);
const answers = await inquirer.prompt([
    {
        name: "userguessednumber",
        type: "number",
        message: "please guess a number between 1-6",
    }
]);
if (answers.userguessednumber === randomnumber) {
    console.log("congo!! you guessed a right number");
}
else {
    console.log("you guessed a wrong number");
}
