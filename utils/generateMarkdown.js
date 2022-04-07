//create contributor section with Markdown table and styling
const generateCredit = contributorArr => {
  const contributorCredit = contributorArr.filter(contributor => {
    if (contributor.confirmAddCredit) {
      return true;
    } else {
      return false;
    }
  });

  //renders contributor's Github profile image with embedded link to their profile
  const creditGit = contributorCredit.map(({ creditGithub }) => {
  return `[<img src="https://github.com/${creditGithub}.png?" width="100"/>](https://github.com/${creditGithub}) | `;
  });

  //adds required syntax to create Markdown table
  const createGridSpacing = creditGit.map(({ }) => {
  return `:----: | `;
  });

  //adds contributor name to bottom of Markdown table under their GitHub profile image
  const creditText = contributorCredit.map(({ creditName }) => {
  return `**${creditName}** | `;
  });

  return `
  ## Credit  
  ${creditGit.join('')}
  ${createGridSpacing.join('')}
  ${creditText.join('')}
  `;
};

//renders license badge (placed at top of README) with embedded link to license website
const renderLicenseBadge = (license) => {
    let selectLicense = '';

    if (license == 'MIT') {
      selectLicense = `[<img src="https://img.shields.io/badge/License-MIT-yellow.svg"/>](https://www.mit.edu/~amini/LICENSE.md)`
    } else if (license == 'Apache') {
      selectLicense = `[<img src="https://img.shields.io/badge/License-Apache_2.0-blue.svg"/>](https://www.apache.org/licenses/LICENSE-2.0.txt)`
    } else if (license == 'GNU') {
      selectLicense = `[<img src="https://img.shields.io/badge/License-FDL_v1.3-blue.svg"/>](https://www.gnu.org/licenses/gpl-3.0.txt)`
    } else {
      selectLicense = ''
    }
    return selectLicense;
};

//renders license text (also with embedded link) for license footer
function renderLicenseLink(license) {
  let licenseText = '';

  if (license == 'MIT') {
    licenseText = `['MIT'](https://www.mit.edu/~amini/LICENSE.md)`
  } else if (license == 'Apache') {
    licenseText = `['Apache'](https://www.apache.org/licenses/LICENSE-2.0.txt)` 
  } else if (license == 'GNU') {
    licenseText = `['GNU'](https://www.gnu.org/licenses/gpl-3.0.txt)`
  } else {
    licenseText = ''
  }
  return licenseText;
};

//generates a complete README file with input from command line
module.exports = generateMarkdown => {;
const { contributors, ...data } = generateMarkdown;

  return `

  # ${data.title}
  ${renderLicenseBadge(data.license)}

  ## Table of Contents
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credit](#credit)
  - [Contribute](#contribute)
  - [Tests](#tests)
  - [Licenses](#licenses)

  ## Description
  ${data.description}

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ${generateCredit(contributors)}

  ## Contribute 
  Please reach out via either of the following links with any questions, including ways in which
  you can contribute to this project!

  | [<img src="https://github.com/${data.github}.png?" width="150"/>](https://github.com/${data.github}) |
  | :-: |
  | ${data.email} |
  | **${data.userName}** |

  ## Tests
  ${data.tests}

  ## Licenses
  Copyright (c) ${data.copyright}. All rights reserved.  
  Licensed under the ${renderLicenseLink(data.license)} license.
  `;
};

