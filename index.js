//dependencies:
const fs = require("fs");
const inquirer = require("inquirer");
const util = require("util");
const api = require("./utils/api");
const generateMarkdown = require("./utils/generateMarkdown");
const writeFileAsync = util.promisify(writeToFile);

// array of questions for user
const questions = [
  {
    type: "input",
    name: "title",
    message: "What is the title of your project?",
    validate: function (value) {
      if (value.length < 1) {
        return console.log("Project Title is required");
      }
    },
  },

  {
    type: "input",
    name: "description",
    message: "Write a description of your project",
    validate: function (value) {
      if (value.length < 1) {
        return console.log("Project Description is required");
      }
    },
  },

  {
    type: "input",
    name: "installation",
    message: "The installation instructions",
  },

  {
    type: "input",
    name: "usage",
    message: "Describe the usage of this project",
  },

  {
    type: "list",
    name: "license",
    message: "Choose the appropriate license for this project",
    choices: [
      "MIT License",
      "Apache License",
      "GPL License",
      "Public Domain (unlicensed)",
    ],
  },

  {
    type: "input",
    name: "contribution",
    message: "State the rules for contributing to this project",
  },

  {
    type: "input",
    name: "authors",
    message: "Who are the authors for this project?",
  },

  {
    type: "input",
    name: "email",
    message: "What is your E-Mail Address",
  },

  {
    type: "input",
    name: "username",
    message: "What is your github username?",
  },
];

// function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      return console.log(err);
    }

    console.log("Your README.md file has been generated!");
  });
}

// function to initialize program
async function init() {
  try {
    const value = await await inquirer.prompt(questions);
    console.log("Your responses: ", value);
    console.log("Thank you for your responses!");

    const markdown = generateMarkdown(data);
    console.log(markdown);

    await writeFileAsync("./test/testREADME.md", generateContent);
    console.log("✔️  Successfully wrote to README.md");
  } catch (err) {
    console.log(err);
  }
}

// function call to initialize program
init();
