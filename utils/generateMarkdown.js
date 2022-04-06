// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
  //function renderLicenseBadge(license) {}


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
  
  ## Licenses
  ${data.licenses}

  ## Questions
  I can be contacted at the following:  

  [<img src="https://github.com/${data.github}.png?" width="150"/>](https://github.com/${data.github})  
  
  ${data.email}

  ## Tests
  ${data.tests}

  `;
};


module.exports = generateMarkdown;
