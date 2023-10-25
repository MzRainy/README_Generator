// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const generateMarkdown = require("../utils/generateMarkdown");

const questions = [
    {
        // Project Title
        type: 'input',
        name: 'title',
        message: 'Please enter your project name?',
      },
      {
        //Description
        type: 'input',
        message: 'Describe your application.',
        name: 'description',
      },
      {
        //Table of Contents
        type: 'checkbox',
        message: 'Select your Table of content Sections.',
        name: 'table of content',
        choices: ['Description', 'Table of Contents', 'Usage', 'Tips', 'Contribution', 'License', 'Badges', 'Installation', 'Tests', 'Questions', 'Technologies'],
      },
      {
        //Installation
        type: 'input',
        message: 'How do you install your application?',
        name: 'install',
      },
      {
        // License
        type: 'checkbox',
        message: 'Please select a license applicable to this project.',
        name: 'license',
        choices:['MIT', 'BSD2', 'BSD03', 'None'],
      },
      {
        //Usage
        type: 'input',
        message: 'What is the usage purposes of your application?',
        name: 'contact',
      },
      {
        //Contributing
        type: 'input',
        message: 'How can someone contribute?',
        name: 'contributing',
      },
      {
        //Tests
        type: 'input',
        message: 'Are there any tests that need to be run?',
        name: 'tests',
      },
      {
        //Questions: Github link, email
        type: 'input',
        message: 'What is your github url?',
        name: 'questions',
      },
      {
        //Questions: Github link, email
        type: 'input',
        message: 'What is your email address?',
        name: 'questions',
      },

    ];
    // Writing README.md File
function writeToFile(fileName, data) {
  return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// Initializing app
function init() {
  inquirer.prompt(questions).then((responses) => {
    console.log("Creating Professional README.md File...");
    writeToFile("./dist/README.md", generateMarkdown({ ...responses }));
  });
}
init();