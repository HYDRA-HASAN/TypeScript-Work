import chalk from "chalk";
export let Student_Random_Balance = () => {
    return Math.floor(Math.random() * (5000 - 1000 + 1)) + 1000;
};
export let Student_Random_Courses = () => {
    const courses = [chalk.bold.yellowBright("Python"), chalk.bold.blueBright("TypeScript"), chalk.bold.redBright("C++"), chalk.bold.greenBright("Java"), chalk.bold.magentaBright("JavaScript"), chalk.bold.hex('#df0000')("PHP"), chalk.bold.hex('#ffa500')("MongoDB"), chalk.bold.hex('#d9fcc9')("React")];
    const randomCourses = [];
    while (randomCourses.length < 4) {
        const randomIndex = Math.floor(Math.random() * courses.length);
        const course = courses[randomIndex];
        if (!randomCourses.includes(course)) {
            randomCourses.push(course);
        }
    }
    return randomCourses;
};
