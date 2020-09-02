const fs = require("fs");
const inquirer = require("inquirer")

// array of questions for user
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the title of your project?"
    },

    {
        type: "input",
        name: "description",
        message: "Write a description of your project"
    },

    {
        type: "input",
        name: "installation",
        message: "The installation instructions"
    },

    {
        type: "input",
        name: "usage",
        message: "describe usage of this project"
    },

    {
        type: "checkbox",
        name: "license",
        message: [
            "MIT License",
            "Apache License",
            "GPL License",
            "Public Domain (unlicensed)"
        ]
    },

    {
        type: "input",
        name: "contribution",
        message: "The rules for contributing to this project"
    },

    {
        type: "input",
        name: "authors",
        message: "who are the authors for this project?"
    },

    {
        type: "input",
        name: "email",
        message: "E-Mail Address"
    },

    {
        type: "input",
        name: "toc",
        message: "Table of Contents seperated commas"
    }
];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
