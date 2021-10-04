// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
    {
        name: 'title',
        type: 'input',
        message: 'What is the title of your project?'
    },
    {
        name: 'description',
        type: 'input',
        message: 'Enter a description for your project:'   
    },
    {
        name: 'installation',
        type: 'input',
        message: 'Enter any installation instructions for your project:'  
    },
    {
        name: 'usage',
        type: 'input',
        message: 'Enter any usage information for your project:'  
    },
    {
        name: 'contribution',
        type: 'input',
        message: 'Enter any contribution guidelines for your project:'  
    },
    {
        name: 'test',
        type: 'input',
        message: 'Enter any test instructions for your project:'  
    },
    {
        name: 'license',
        type: 'list',
        message: 'Choose a license for your project:',
        choices: ['Apache 2.0', 'GNU GPL v3.0', 'MIT', 'BSD 3-Clause', 'Mozilla Public License 2.0', 'WTFPL'],
        defualt: 'MIT'
    },
    {
        name: 'username',
        type: 'input',
        message: 'What is your GitHub user name?'
    },
    {
        name: 'email',
        type: 'input',
        message: 'Enter your email address:'
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) {
            console.log(err)
        } else {
            console.log('File written successfully!')
        }
    })
}

// TODO: Create a function to initialize app
function init() {
    
        inquirer.prompt(questions)
    
        .then ((userAnswers) => {
            const markDown = generateMarkdown(userAnswers);
            writeToFile('./README.md', markDown);
        });
    
    
}

// Function call to initialize app
init();
