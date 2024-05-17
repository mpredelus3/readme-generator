// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown')
const fs = require('fs')
// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: "What is the title of your project?",
        name: "title",
    },

    {
        type: "input",
        message: "Write a description of your project",
        name: "description",
    },

    {
        type: "input",
        message: "Provide installation instructions",
        name: "installation",
    },

    {
        type: "input",
        message: "Provide usage instructions and examples for use of the project.",
        name: "usage",
    },

    {
        type: "input",
        message: "List your collaborators, if any, with links to their GitHub profiles.",
        name: "credits",
    },
/*
will come back to fix contribute link
*/
    {
        type: "input",
        message: "Enter any contribution guidelines such as if would like other developers to contribute it",
        name: "Contribute",
    },

    {
        type: "input",
        message: "If there are tests, provide examples on how to run them here.",
        name: "tests",
    },

    {
        type: "input",
        message: "Are there any questions you would like to ask?",
        name: "questions",
    },

    {
        type: "list",
        message: "Which license would you like to use?",
        name: "license",
        choices: ["MIT", "APACHE", "GNU", "no license"],
    }

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err, result) => {
        err ? console.error(err) : console.log('README has been written');;
    })
}

// TODO: Create a function to initialize app
function init() {


    inquirer.prompt(questions)
        .then((response) => {


            const templete = generateMarkdown(response)
            writeToFile('README.md', templete)
        });

}



// Function call to initialize app
init();
