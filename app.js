// // TODO: Include packages needed for this application

// // TODO: Create an array of questions for user input
//     const questions = [];

// // TODO: Create a function to write README file
//     function writeToFile(fileName, data) {}

// // TODO: Create a function to initialize app
//     function init() {}

// // Function call to initialize app
//      init();


const inquirer = require('inquirer');

// const fs = require('fs');
// const generateMarkdown = require('./utils/generateMarkdown.js');

// const pageData = generateMarkdown(data)

// fs.writeFile('./README.md', pageData, err => {
//     if (err) throw err;
  
//     console.log('READme complete!');
//   });


//add validate prompts in 9.3.6
const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'description',
            message: 'Please provide a short description explaining the what, why, and how of your project.'
        },
        {
            type: 'input',
            name: 'installation',
            message: 'What are the steps required to install your project?'
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Please provide instructions and examples for how your project should be used.'
        },
        {
            type: 'input',
            name: 'credits',
            message: 'List your collaborators, if any, with links to their GitHub profiles.'
        },
        {
            type: 'input',
            name: 'licenses',
            message: 'How are other developers allowed to use your project?'
        },
        {
            type: 'input',
            name: 'questions',
            message: 'What is your GitHub user name and email? How can you be reached for additional questions?'
        },
        {
            type: 'input',
            name: 'tests',
            message: 'What testing has your project been through?'
        },
    ]);
};

promptUser().then(answers => console.log(answers));