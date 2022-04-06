const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the name of your project?'
        },
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
            name: 'github',
            message: 'What is your GitHub user name?'
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter the preferred email address you can be contacted at for additional questions.',

        },
        {
            type: 'input',
            name: 'tests',
            message: 'What testing has your project been through?'
        },
        {
            type: 'confirm',
            name: 'confirmCredits',
            message: 'Would you like to add any contributors to your project?',
            default: true
        },
        {
            type: 'input',
            name: 'credits',
            message: 'Enter name of contributor.',
            when: ({ confirmCredits }) => {
                if (confirmCredits) {
                    return true;
                } else {
                    return false;
                }
            }
        }, 
        {
            type: 'input',
            name: 'githubContributor',
            message: 'Please enter the GitHub user name for contributor.',
            when: ({ credits }) => {
                if (credits) {
                    return true;
                } else {
                    return false;
                }
            }
        },
        {
            type: 'confirm',
            name: 'confirmAddContributors',
            message: 'Would you like to enter another contributor?',
            default: false
        },
        {
            type: 'checkbox',
            name: 'license',
            message: 'Which open source license would you like to include in your README?',
            choices: ['MIT', 'GNU GPLv3']
        },
        {
            type: 'input',
            name: 'copyright',
            message: 'Enter copyright holder name'
        },
    ]);
};

promptUser().then(answers => {

    fs.writeFile('./dist/README.md', generateMarkdown(answers), err => {
        if (err) {
            console.log(err);
            return;
        }
        console.log('README created!');
    });

});

//promptUser().then(answers => console.log(answers));

// const promptContributer = contributorData => {

//     if (!contributorData.info) {
//         contributorData.info = [];
//     }

//     return inquirer.prompt([
        
//     ])

//     .then(creditData => {
//         contributorData.info.push(creditData);
//         if (creditData.confirmAddContributors) {
//             return promptContributer(contributorData);
//         } else {
//             return contributorData;
//         }
//     });
// };