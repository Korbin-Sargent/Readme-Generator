// If there is no license, return an empty string

function renderLicenseBadge(license) {
  if (license !== "None") {
    return `
![License: ${license}](https://img.shields.io/badge/License-${license}-green.svg)
 `;
  }
  return "";
}

// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== "None") {
    return `[License](#license)
    `;
  }
  return "";
}

// If there is no license, return an empty string
function renderLicenseSection(license) {
  //creating myu markdown with template strings
  console.log(license);
  if (license !== "None") {
    return `## License
  This project is covered under the license ${license}.`;
  }
  return "";
}

function generateMarkdown(data) {
  console.log(data);
  return `# ${data.title}

${renderLicenseBadge(data.license)}

## Description
  ${data.description}

## Table of Contents

[Installation](#installation)

[Usage](#usage)

${renderLicenseLink(data.license)}

[Contributing](#contributing)

[Tests](#tests)

[Questions](#questions)

## Installation
  ${data.installation}

## Usage
  ${data.usage}

${renderLicenseSection(data.license)}

## Contributing
  ${data.contributor}

## Tests
  ${data.test}

## Questions
If you have any questions about the repo. open an issue or
contact me directly at ${data.email}. You can find more of my work at 
github.com/${data.github}.
`;
}

module.exports = generateMarkdown;
