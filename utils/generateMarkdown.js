// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== "none") {
    return `![Github license](https://img.shields.io/badge/license-${license}-blue.svg)`;
  }
  return "";
}
// TODO: Create a function to generate markdown for README
//Creating a function to generate markdown for README
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


// Creating a function that returns a license badge based on which license is passed in


