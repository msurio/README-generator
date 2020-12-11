//dependencies:
const fs = require("fs");
const inquirer = require("inquirer")
const util = require("util");
const api = require("./utils/api")
const generateMarkdown = require("./utils/generateMarkdown")

// array of questions for user
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the title of your project?",
        validate: function(value){
            if(value.length < 1) {
                return console.log("Project Title is required");
            }
        }
    },

    {
        type: "input",
        name: "description",
        message: "Write a description of your project",
        validate: function(value){
            if (value.length < 1){
                return console.log("Project Description is required");
            }
        }
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
    fs.writeFile(fileName, data, err => {
        if (err) {
            return console.log(err);
        }

        console.log("Your README.md file has been generated!");
    })
}

// function to initialize program
async function init() {
    
}

// function call to initialize program
init();
