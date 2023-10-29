// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const generateMarkdown = require('./utils/generateMarkdown');

const questions = [];
function init(){
inquirer.prompt([
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
        name: 'tableOfContent',
        choices: ['Description', 'Table of Contents', 'Usage', 'Tips', 'Contribution', 'License', 'Badges', 'Installation', 'Tests', 'Questions', 'Technologies'],
      },
      {
        //Installation
        type: 'installation',
        message: 'How can the users install your application?',
        name: 'install',
      },
      {
        // License
        type: 'list',
        message: 'Please select a license applicable to this project.',
        name: 'license',
        choices:['MIT', 'BSD2', 'BSD03', 'None'],
      },
      {
        //Usage
        type: 'input',
        message: 'Describe the use case for your application',
        name: 'usage',        
      },
      {
        //Contributing
        type: 'input',
        message: 'How can other developers contribute?',
        name: 'contribution',
      },
      {
        //Tests
        type: 'input',
        message: 'How can other test your application?',
        name: 'test',
      },
      {
        //Questions: Github link, email
        type: 'input',
        message: 'How can user reach you for questions?',
        name: 'questions',
      },
      {
        type: 'input',
        message: 'What is your github username?',
        name: 'github',
    },
    ])
    .then((data) => {
      const filename = `${data.title.toUpperCase().split(' ').join('')}.md`;
  
      fs.writeFile(filename, generateMarkdown(data), (err) =>
        err ? console.log(err) : console.log('Success!')
      );
    }).catch(err => {
      console.log(err);
    });
  }
// TODO: Create a function to write README file
// fs.appendFile('README.md', `${process.argv[2]}\n`, (err) =>
// err ? console.error(err) : console.log('Commit logged!')
// );


// TODO: Create a function to initialize app
// function init() {
//     inquirer.prompt(questions).then(responses) => {
//         console.log('Creating professional README file:');
//         writeToFile('./utils/READMEGEN.md',)
//     }
// }

// Function call to initialize app
init();
