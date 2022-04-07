const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

//questions about project and respository owner
const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the name of your project? (Input Required)',
            validate: projectName => {
                if (projectName) {
                    return true;
                } else {
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Please provide a description explaining the what, why, and how of your project. (Input Required)',
            validate: projectDescription => {
                if (projectDescription) {
                    return true;
                } else {
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'installation',
            message: 'What are the steps required to install your project? (Input Required)',
            validate: projectInstallation => {
                if (projectInstallation) {
                    return true;
                } else {
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Please provide instructions and examples for how your project should be used. (Input Required)',
            validate: projectUsage => {
                if (projectUsage) {
                    return true;
                } else {
                    return false;
                }
            }
        },  
        {
            type: 'input',
            name: 'tests',
            message: 'What testing has your project been through? (Input Required)',
            validate: projectTests => {
                if (projectTests) {
                    return true;
                } else {
                    return false;
                }
            }
        },
        {
            type: 'list',
            name: 'license',
            message: 'Which license would you like to include in your README?',
            choices: ['MIT', 'GNU GPLv3'],
            default: 0
        },
        {
            type: 'input',
            name: 'copyright',
            message: "Enter the copyright holder's (individual or corporation) name for this project. (Input Required)",
            validate: projectCopyright => {
                if (projectCopyright) {
                    return true;
                } else {
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'userName',
            message: 'What is your first and last name? (Input Required)',
            validate: projectUserName => {
                if (projectUserName) {
                    return true;
                } else {
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: 'What is your GitHub user name? (Input Required)',
            validate: projectGithub => {
                if (projectGithub) {
                    return true;
                } else {
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter the preferred email address you can be contacted at for additional questions. (Input Required)',
            validate: projectEmail => {
                if (projectEmail) {
                    return true;
                } else {
                    return false;
                }
            }
        },
    ])
}; 

//creates an array if any contributors are added to the project
const promptContributer = creditData => {
    if (!creditData.contributors) {
        creditData.contributors = [];
    }
    return inquirer.prompt([
        {
            type: 'confirm',
            name: 'confirmAddCredit',
            message: 'Would you like to enter additional contributors?',
            default: false
        },
        {
            type: 'input',
            name: 'creditName',
            message: 'Enter first and last name of contributor. (Input Required)',
            when: ({ confirmAddCredit }) => {
                if (confirmAddCredit) {
                    return true;
                } else {
                    return false;
                }
            },
            validate: contributorCreditName => {
                if (contributorCreditName) {
                    return true;
                } else {
                    return false;
                }
            }
        }, 
        {
            type: 'input',
            name: 'creditGithub',
            message: 'Please enter the GitHub user name for contributor. (Input Required)',
            when: ({ creditName }) => {
                if (creditName) {
                    return true;
                } else {
                    return false;
                }
            },
            validate: contributorCreditGithub => {
                if (contributorCreditGithub) {
                    return true;
                } else {
                    return false;
                }
            }
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
});