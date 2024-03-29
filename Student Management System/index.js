import inquirer from "inquirer";
import { Student_Random_Balance, Student_Random_Courses } from "./DATAFILES/StudentData.js";
import { StudentData } from "./DATAFILES/Datatypes-Files.js";
import chalk from "chalk";
import chalkanimation from "chalk-animation";
import figlet from "figlet";
let Animation0 = () => {
    return new Promise((Animation1) => {
        setTimeout(Animation1, 5000);
    });
};
let Animationtitle1 = chalkanimation.rainbow("Starting Your Student Management System !");
await Animation0();
Animationtitle1.stop();
let Text2 = figlet.textSync("Student Management System !", {
    font: "Slant",
});
console.log(chalk.bold(chalk.hex('#9e1b32')(Text2)));
const StudentDataList = [];
let Student_Management_System = async () => {
    let Animation1 = () => {
        return new Promise((Animation1) => {
            setTimeout(Animation1, 5000);
        });
    };
    let Animationtitle1 = chalkanimation.rainbow("Student Management System Start !");
    await Animation1();
    Animationtitle1.stop();
    let continueAdding = true;
    while (continueAdding) {
        const Datalist = await inquirer.prompt([
            {
                message: "Select Your Student Management Datalist:",
                name: "Studentlist",
                type: "list",
                choices: [
                    { name: chalk.bold.greenBright("ADD STUDENT NAME AND ID:"), value: "Add Student Name and ID" },
                    { name: chalk.bold.greenBright("SELECT LIST TO CHECK YOUR STUDENT DATA:"), value: "Select List To Check Your Data" },
                    { name: chalk.bold.greenBright("EXIT:"), value: "Exit" },
                ],
            }
        ]);
        if (Datalist.Studentlist === "Add Student Name and ID") {
            let continuenameandid = true;
            while (continuenameandid) {
                const studentNameandID = await inquirer.prompt([
                    {
                        message: chalk.bold.redBright("Enter Student Name: "),
                        name: "Student_Name",
                        type: "input",
                    },
                    {
                        message: chalk.magentaBright("Enter Your 5 digit Student Roll Number: "),
                        name: "student_UniqueID",
                        type: "input",
                    },
                    {
                        message: chalk.bold.blueBright("Do You Want to Add Another Name and ID:"),
                        type: "list",
                        name: "Continue",
                        choices: [
                            { name: chalk.bold.greenBright("Yes"), value: "Yes" },
                            { name: chalk.bold.greenBright("No"), value: "No" },
                        ],
                    },
                ]);
                const studentfeepaidornot = await inquirer.prompt([
                    {
                        message: chalk.bold.whiteBright("IF Student Paid There Fee then Select 'PAID' IF The Student Did Not Pay there Fee then Select 'NOT PAID':"),
                        type: "list",
                        name: "Pay_tuition_Fees",
                        choices: [
                            { name: chalk.bold.greenBright("PAID:"), value: "Paid" },
                            { name: chalk.bold.greenBright("NOT PAID:"), value: "Not Paid" },
                        ],
                    },
                ]);
                const student = new StudentData(studentNameandID.Student_Name, studentNameandID.student_UniqueID, Student_Random_Courses(), Student_Random_Balance(), studentfeepaidornot.Pay_tuition_Fees === "Paid" ? "Active" : "Inactive", studentfeepaidornot.Pay_tuition_Fees === "Paid");
                StudentDataList.push(student);
                if (studentNameandID.Continue === "No") {
                    continuenameandid = false;
                }
            }
        }
        else if (Datalist.Studentlist === "Select List To Check Your Data") {
            console.log("<<========================================================================================>>");
            let viewbalance = 0;
            let showstatusactive = "Active";
            let showstatusinactive = "Inactive";
            for (let StudentData = 0; StudentData < StudentDataList.length; StudentData++) {
                const studentdataList = StudentDataList[StudentData];
                console.log("-----------------------------------------------------------------------------------------------");
                console.log(chalk.bold.bgCyanBright(`Student Data: ${chalk.bold.whiteBright(StudentData + 1)}:`));
                if (typeof studentdataList.StudentName === "string" && isNaN(Number(studentdataList.StudentName))) {
                    console.log("-----------------------------------------------------------------------------------------------");
                    console.log(chalk.bold.cyanBright(`Student Name:  ${chalk.bold.whiteBright(studentdataList.StudentName)}: `));
                    console.log("-----------------------------------------------------------------------------------------------");
                }
                else {
                    console.log("-----------------------------------------------------------------------------------------------");
                    console.log(chalk.bold.red(`Please Enter A Valid Student Name: You Enterd This ${chalk.bold.redBright(studentdataList.StudentName)}: `));
                    console.log("-----------------------------------------------------------------------------------------------");
                }
                if (!isNaN(studentdataList.StudentID) && studentdataList.StudentID >= 10000 && studentdataList.StudentID <= 99999) {
                    console.log("-----------------------------------------------------------------------------------------------");
                    console.log(chalk.bold.magentaBright(`Student Roll Number: ${chalk.bold.yellowBright(studentdataList.StudentID)}: `));
                    console.log("-----------------------------------------------------------------------------------------------");
                }
                else {
                    console.log("-----------------------------------------------------------------------------------------------");
                    console.log(chalk.bold.red(`Invalid Student ID or Roll Number:  You Enterd This Thats Why You Got This Message ${chalk.bold.redBright(studentdataList.StudentID)}: `));
                    console.log("-----------------------------------------------------------------------------------------------");
                }
                if (studentdataList.PayTuitionFees) {
                    console.log("-----------------------------------------------------------------------------------------------");
                    console.log(chalk.bold.greenBright(`Course Balance: $${chalk.bold.yellow(studentdataList.ViewBalance)}: `));
                    console.log("-----------------------------------------------------------------------------------------------");
                }
                else {
                    console.log("-----------------------------------------------------------------------------------------------");
                    console.log(`Course Balance: ${`You Dont Have Enough Money to buy this Courses`} =>  ${chalk.bold.redBright(viewbalance)}:`);
                    console.log("-----------------------------------------------------------------------------------------------");
                }
                if (studentdataList.PayTuitionFees) {
                    console.log("-----------------------------------------------------------------------------------------------");
                    console.log(chalk.bold.hex('#e0a49c')(`Student Enrolled Courses: [${studentdataList.EnrolledCourses.join(", ")}]: `));
                    console.log("-----------------------------------------------------------------------------------------------");
                }
                else {
                    console.log("-----------------------------------------------------------------------------------------------");
                    console.log(chalk.bold.redBright(`Student Enrolled Courses: ${chalk.greenBright(`You Are Not Allowed To Enter These Courses Because You Didn't paid the fee`)}:`));
                    console.log("-----------------------------------------------------------------------------------------------");
                }
                if (studentdataList.PayTuitionFees) {
                    console.log("-----------------------------------------------------------------------------------------------");
                    console.log(chalk.bold.blueBright(`Student Status: ${chalk.bold.greenBright(showstatusactive)}:`));
                    console.log("-----------------------------------------------------------------------------------------------");
                }
                else {
                    console.log("-----------------------------------------------------------------------------------------------");
                    console.log(chalk.bold.blue(chalk.bold.redBright(`Student Status: ${showstatusinactive}:`)));
                    console.log("-----------------------------------------------------------------------------------------------");
                }
                if (studentdataList.PayTuitionFees) {
                    console.log("-----------------------------------------------------------------------------------------------");
                    console.log(chalk.bold.magentaBright(chalk.bold.greenBright(`Tuition Fees Paid: ${`Yes`}`)));
                    console.log("-----------------------------------------------------------------------------------------------");
                }
                else {
                    console.log("-----------------------------------------------------------------------------------------------");
                    console.log(chalk.bold.magentaBright(`Tuition Fees Paid: ${chalk.bold.redBright `No`}`));
                    console.log("-----------------------------------------------------------------------------------------------");
                }
                console.log("===================================================================================");
            }
        }
        else if (Datalist.Studentlist === "Exit") {
            const EXIT = await inquirer.prompt([
                {
                    message: chalk.bold.hex('#6b58a7')("Are You Sure You Want To Exit Your app:"),
                    name: "exit",
                    type: "list",
                    choices: [
                        { name: chalk.bold.redBright("Yes"), value: "Yes" },
                        { name: chalk.bold.greenBright("No"), value: "No" },
                    ]
                },
            ]);
            if (EXIT.exit === "Yes") {
                continueAdding = false;
            }
        }
    }
};
Student_Management_System();
