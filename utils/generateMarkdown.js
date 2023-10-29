// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
## Description
${data.description}
## Table of Contents
${data.tableOfContent}
## Installation
${data.install};
## License
${data.license};
## Usage
${data.usage};
## Contribution
${data.contribution};
## Tests
${data.test};
## Questions?
If you have further questions you can reach me by email at ${data.questions} or on Github at ${data.github} 
## Table of Contents
${data.tableOfContent}`;
   
}

module.exports = generateMarkdown;
