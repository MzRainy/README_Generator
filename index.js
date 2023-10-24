// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');


// TODO: Create an array of questions for user input
// README.md is generated with the title of my project and sections entitled Description, Table of Contents,
// Installation, Usage, License, Contributing, Tests, and Questions
// WHEN I enter my project title
// THEN this is displayed as the title of the README
// WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
// THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
// WHEN I choose a license for my application from a list of options
// THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
// WHEN I enter my GitHub username
// THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
// WHEN I enter my email address
// THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
// WHEN I click on the links in the Table of Contents
// THEN I am taken to the corresponding section of the README
const questions = [];
inquirer
  .prompt([
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
        type: 'list',
        message: 'What is your preferred method of communication?',
        name: 'contact',
        choices: ['email', 'phone', 'telekinesis'],
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
        type: 'list',
        message: 'What is your preferred method of communication?',
        name: 'contact',
        choices: ['email', 'phone', 'telekinesis'],
      },
      {
        //Contributing
        type: 'list',
        message: 'What is your preferred method of communication?',
        name: 'contact',
        choices: ['email', 'phone', 'telekinesis'],
      },
      {
        //Tests
        type: 'list',
        message: 'What is your preferred method of communication?',
        name: 'contact',
        choices: ['email', 'phone', 'telekinesis'],
      },
      {
        //Questions: Github link, email
        type: 'list',
        message: 'What is your preferred method of communication?',
        name: 'contact',
        choices: ['email', 'phone', 'telekinesis'],
      },
    ])
    .then((data) => {
      const filename = `${data.name.toUpperCase().split(' ').join('')}.md`;
  
      fs.writeFile(filename, JSON.stringify(data, null, '\t'), (err) =>
        err ? console.log(err) : console.log('Success!')
      );
    });
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
