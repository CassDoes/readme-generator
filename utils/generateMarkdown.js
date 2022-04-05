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

  # Table of Content
  -[Description](#description)
  -[Installation](#installation)
  -[Usage](#usage)
  -[Credits](#credits)
  -[Licenses](#licenses)
  -[Questions](#questions)
  -[Tests](#tests)

  ## Description:
  ${data.description}

  ## Installation:
  ${data.installation}

  ## Usage:
  ${data.usage}

  ## Credits:
  ${data.credits}
  ${data.githubContributor}

  ## Licenses:
  ${data.licenses}

  ## Questions:
  ${data.guthub}
  ${data.email}

  ## Tests:
  ${data.tests}

  `;
};


module.exports = generateMarkdown;
