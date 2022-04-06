// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
  //function renderLicenseBadge(license) {}
function renderLicenseBadge(license) {
    let selectLicense = '';

    if (license == 'MIT') {
      selectLicense = `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`
    } else if (license == 'GNU GPLv3') {
      selectLicense = `![License: FDL 1.3](https://img.shields.io/badge/License-FDL_v1.3-blue.svg)`
    } else {
      selectLicense = 'nope'
    }
    console.log(license);
    return selectLicense;
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
  //function renderLicenseLink(license) {}


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string

//function renderLicenseSection(license) {}


// generateMarkdown = generateReadme
// TODO: Create a function to generate markdown for README
const generateMarkdown = (data) => {

  return `

  # ${data.title}
  ${renderLicenseBadge(data.license)}

  ## Table of Contents
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [Licenses](#licenses)
  - [Questions](#questions)
  - [Tests](#tests)

  ## Description
  ${data.description}

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## Credits
  [<img src="https://github.com/${data.githubContributor}.png?" width="100"/>](https://github.com/${data.githubContributor})  

  **${data.credits}**

  ## Contributing & Feedback 

  Please reach out via either of these links with any questions, including ways in which  
  you can contribute to this project!

  [<img src="https://github.com/${data.github}.png?" width="150"/>](https://github.com/${data.github})  
  
  ${data.email}

  ## Tests
  ${data.tests}

  ## Licenses
  
  Copyright (c) ${data.copyright}. All rights reserved.  
  Licensed under the ${data.license} license.

  `;
};


module.exports = generateMarkdown;
