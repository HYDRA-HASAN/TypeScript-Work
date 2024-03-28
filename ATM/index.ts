import inquirer from 'inquirer';

interface Answers {
    userId: string;
    userPin: number;
    accountType: string;
    transactionType: string;
    fastCashAmount?: number;
    withdrawalAmount?: number;
}

async function startTransaction() {
    const answers: Answers = await inquirer.prompt([
        {
            type: "input",
            name: "userId",
            message: "Kindly enter your ID: "
        },
        {
            type: "number",
            name: "userPin",
            message: "Kindly enter your Pin: "
        },
        {
            type: "list",
            name: "accountType",
            choices: ["Current", "Savings"],
            message: "Select Your Account Type: "
        },
        {
            type: "list",
            name: "transactionType",
            choices: ["Fast Cash", "Withdrawal"],
            message: "Select Your Transaction: ",
            when: (answers) => answers.accountType
        },
        {
            type: "list",
            name: "fastCashAmount",
            choices: [1000, 2000, 5000, 10000, 20000, 50000, 100000, 200000, 500000, 1000000],
            message: "Select Your amount: ",
            when: (answers: Answers) => answers.transactionType === "Fast Cash"
        },
        {
            type: "number",
            name: "withdrawalAmount",
            message: "Enter Your amount: ",
            when: (answers: Answers) => answers.transactionType === "Withdrawal"
        },
    ]);

    if (answers.userId && answers.userPin) {
        const balance = 5000000;
        console.log("Previous Balance", balance);

        let enteredAmount: number | undefined;
        if (answers.transactionType === "Fast Cash") {
            enteredAmount = answers.fastCashAmount;
        } else if (answers.transactionType === "Withdrawal") {
            enteredAmount = answers.withdrawalAmount;
        }

        if (enteredAmount !== undefined && balance >= enteredAmount) {
            const remaining = balance - enteredAmount;
            console.log("Transaction Successful and Your remaining balance is " + remaining);
        } else {
            console.log("Insufficient Balance");
        }
    }
}

startTransaction();
