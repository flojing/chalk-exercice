import chalk from "chalk";
const wilders = ["Emma", "Cédric", "Mike", "Charlotte"];

console.log(chalk.blue(wilders[0]));
console.log(chalk.red(wilders[1]));
console.log(chalk.green(wilders[2]));
console.log(chalk.rgb(255, 255, 0)(wilders[3]));
