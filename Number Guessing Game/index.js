import inquirer from "inquirer";
async function startFunc() {
    const systemNum = Math.floor(Math.random() * 10);
    const userNum = await inquirer.prompt([
        {
            type: "number",
            name: "userGuess",
            message: "Guess a number B/W 1 & 10: ",
        }
    ]);
    const { userGuess } = userNum;
    console.log("Your Guess: ", userGuess, "\nSystem's Guess: ", systemNum);
    if (userGuess === systemNum) {
        console.log("Your Guess is Correct \nYou Won!");
    }
    else {
        console.log("Your Guess is Incorrect \nYou Lost!");
    }
}
async function startAgain() {
    do {
        await startFunc();
        var again = await inquirer
            .prompt([
            {
                type: "input",
                name: "restart",
                message: "Do you want to play again? Y or N : ",
            }
        ]);
    } while (again.restart === "Y" || again.restart === "y");
}
startAgain();
