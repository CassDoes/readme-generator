//create contributor section
const generateCredit = contributorArr => {
  const contributorCredit = contributorArr.filter(contributor => {
    if (contributor.confirmAddCredit) {
      return true;
    } else {
      return false;
    }
  });
  const creditArr = contributorCredit.map(({ creditName, creditGithub }) => {
    return `
    [<img src="https://github.com/${creditGithub}.png?" width="100"/>](https://github.com/${creditGithub})  
  
    **${creditName}**
    `;
  });
  console.log(creditName);

  return `
  ## Credit
  ${creditArr.join('')}
  `;
};

//renders license badge and link to license test
const renderLicenseBadge = (license) => {
    let selectLicense = '';

    if (license == 'MIT') {
      selectLicense = `[<img src="https://img.shields.io/badge/License-MIT-yellow.svg"/>](https://choosealicense.com/licenses/mit/)`
    } else if (license == 'GNU GPLv3') {
      selectLicense = `[<img src="https://img.shields.io/badge/License-FDL_v1.3-blue.svg"/>](https://www.gnu.org/licenses/gpl-3.0)`
    } else {
      selectLicense = ''
    }
    return selectLicense;
};


//renders license text (with link) for license section
function renderLicenseLink(license) {
  let licenseText = '';

  if (license == 'MIT') {
    licenseText = `['MIT'](https://choosealicense.com/licenses/mit/)`
  } else if (license == 'GNU GPLv3') {
    licenseText = `['GNU GPLv3'](https://www.gnu.org/licenses/gpl-3.0)`
  } else {
    licenseText = ''
  }
  return licenseText;
};


//generates a complete README file with input from command line
module.exports = generateMarkdown => {;
const { contributorArr, ...data } = generateMarkdown;

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

  ${generateCredit(contributorArr)}

  ## Contributing & Feedback 

  Please reach out via either of these links with any questions, including ways in which
  you can contribute to this project!

  [<img src="https://github.com/${data.github}.png?" width="150"/>](https://github.com/${data.github})  
  
  ${data.email}  
  **${data.userName}**

  ## Tests
  ${data.tests}

  ## Licenses
  
  Copyright (c) ${data.copyright}. All rights reserved.  
  Licensed under the ${renderLicenseLink(data.license)} license.
  `;
};

