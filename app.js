// // TODO: Include packages needed for this application

// // TODO: Create an array of questions for user input
//     const questions = [];

// // TODO: Create a function to write README file
//     function writeToFile(fileName, data) {}

// // TODO: Create a function to initialize app
//     function init() {}

// // Function call to initialize app
//      init();


const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

//profileDataArgs = readmeDataArgs
const readmeDataArgs = process.argv.slice(2);

//profileDataArgs = readmeDataArgs
const [data] = readmeDataArgs;



fs.writeFile('./README.md', generateMarkdown(data), err => {
    if (err) throw new Error(err);
  
    console.log('READme complete!');
  });