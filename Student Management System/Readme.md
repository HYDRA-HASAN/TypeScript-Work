# Getting Started:

## Table of Contents:
- [CLI Project 06 Student Management System](##CLI-Project-06-Student-Management-System)
- [Description](#Description)
- [Installation](#Installation)
- [How To Use](#How-To-Use)
- [Acknowledgments](#Acknowledgments)
- [Dependencies](#Dependencies)
- [DevDependencies](#DevDependencies)
- [License](#License)

## CLI Project 06 Student Management System:
This is a command-line interface (CLI) project for managing student data.

## Description:
This CLI application allows you to manage student data. You can add student names and IDs, check student data, and exit the application.

## Installation:
To use this Currency Convertor CLI, follow these steps:

1. ```npm install @azfarmasood21/cli-project-06-student-management-system-06```

## OR:

2. ```npx @azfarmasood21/cli-project-06-student-management-system-06```

## How To Use:
- Start the application by running `npm start` in your terminal.
- You will be greeted with a message "Starting Your Student Management System!" and a menu will appear with the following options:
    - ADD STUDENT NAME AND ID
    - SELECT LIST TO CHECK YOUR STUDENT DATA
    - EXIT
- If you select "ADD STUDENT NAME AND ID", you will be prompted to enter the student's name and a 5-digit unique ID. After entering these details, you will be asked if you want to add another student. You can continue adding as many students as you like.
- After providing the necessary information, the tool will fetch the latest exchange rates and display the converted amount in the selected  currency.
- If you select "SELECT LIST TO CHECK YOUR STUDENT DATA", a list of all the students you have added will be displayed along with their details such as name, roll number, course balance, enrolled courses, status, and whether they have paid their tuition fees.
- If you select "EXIT", you will be asked to confirm if you really want to exit the application.

## Acknowledgments:
- This project was built using inquirer, chalk, chalk-animation and figlet libraries.

## Dependencies:
- chalk
- chalk-animation
- figlet
- inquirer

## DevDependencies:
- @types/chalk: TypeScript type definitions for chalk.
- @types/chalk-animation: TypeScript type definitions for chalk-animation.
- @types/figlet: TypeScript type definitions for figlet.
- @types/inquirer: TypeScript type definitions for inquirer.

## License:
This project is licensed under the ISC License.

## Author:
Created by Hassan Yaseen.