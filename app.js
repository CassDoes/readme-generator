const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');


//command line questions to generate README
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
            message: 'Please provide a description explaining the what, why, and how of your project.'
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
            name: 'userName',
            message: 'What is your first and last name?'
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
            type: 'checkbox',
            name: 'license',
            message: 'Which license would you like to include in your README?',
            choices: ['MIT', 'GNU GPLv3']
        },
        {
            type: 'input',
            name: 'copyright',
            message: 'Enter copyright holder name'
        },
        {
            type: 'confirm',
            name: 'confirmCredits',
            message: 'Would you like to add any contributors to your project?',
            default: false,
        },
    ])
}; 


//questions about contributors
const promptContributer = creditData => {
    if (!creditData.contributors) {
        creditData.contributors = [];
    }
    return inquirer.prompt([
        {
            type: 'input',
            name: 'creditName',
            message: 'Enter first and last name of contributor.'
        }, 
        {
            type: 'input',
            name: 'creditGithub',
            message: 'Please enter the GitHub user name for contributor.',
            when: ({ creditName }) => {
                if (creditName) {
                    return true;
                } else {
                    return false;
                }
            }
        },
        {
            type: 'confirm',
            name: 'confirmAddCredit',
            message: 'Would you like to enter another contributor?',
            default: true
        },
    ])
    
    .then(contributeInfo => {
        creditData.contributors.push(contributeInfo);
        if (contributeInfo.confirmAddCredit) {
            return promptContributer(creditData);
        } else {
            return creditData;
        }
    });
};

 

//callback function to generate README.md


promptUser()
    .then(promptContributer)
    .then(creditData => {

        const pageMd = generateMarkdown(creditData);

    fs.writeFile('./dist/README.md', pageMd, err => {
      if (err) {
        console.log(err);
        return;
      }
      console.log('Page created!');
    });
})

// promptUser().then(answers => {


//     fs.writeFile('./dist/README.md', generateMarkdown(answers), err => {
//         if (err) {
//             console.log(err);
//             return;
//         }
//         console.log('README created!');
//     });

// });

//promptUser().then(answers => console.log(answers));