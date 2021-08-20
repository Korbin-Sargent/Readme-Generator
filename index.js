// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");
// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    message: "What is your GitHub username?",
    name: "github",
  },
  {
    type: "input",
    message: "What is your email address?",
    name: "email",
  },
  {
    type: "input",
    message: "What is your project's name?",
    name: "title",
  },
  {
    type: "input",
    message: "Please type a brief description of your project",
    name: "description",
  },
  {
    type: "list",
    message: "What kind of license does your project use?",
    name: "license",
    choices: ["MIT", "APACHE2.0", "GPL3.0", "BSD3", "None"],
  },
  {
    type: "input",
    message: "What command should be run for dependencies?",
    name: "installation",
  },
  {
    type: "input",
    message: "What command should be run for tests?",
    name: "test",
  },
  {
    type: "input",
    message: "What does the user need to know about using the repo?",
    name: "usage",
  },
  {
    type: "input",
    message: "How does a user contribute to this project?",
    name: "contributor",
  },
];

// inquirer.prompt(questions).then((data) => {
//     console.log(data);
// });
// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    err ? console.log(err) : console.log("File was written");
  });
}

// TODO: Create a function to initialize app
function init() {
  //present the user with questions
  inquirer.prompt(questions).then((data) => {
    // console.log(data);
    // fs.writeFile("README.md", JSON.stringify(data), (err) => {
    //   err ? console.log(err) : console.log("File was written");
    // });
    const userData = generateMarkdown(data);
    // console.log(userData);
    writeToFile("README.md", userData);
  });
}

// Function call to initialize app
init();
