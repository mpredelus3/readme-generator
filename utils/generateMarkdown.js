// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'no license') {
    return ''
  }
  return `![License Badge](https://img.shields.io/badge/license-${license}-green)`
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'no license') {
    return ''
  }
  return `## License

  This project is licensed under the ${license} license.`
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === 'no license') {
    return ''
  }
  return
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {

  return `# ${data.title}
  ${renderLicenseBadge(data.license)}

  ## Description

  ${data.description}

  ## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [Contribution](#contribute)
- [Tests](#tests)
- [Questions](#questions)
- ${data.license !== 'no license' ? '[License](#license)' : ''}



## Installation
${data.installation}

## Usage
${data.usage}

## Credits
${data.credits}

## How to contribute
${data.contribution}

## Tests
${data.tests}

## Questions
${data.questions}


${renderLicenseLink(data.license)}


`;
}

module.exports = generateMarkdown;
