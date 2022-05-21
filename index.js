// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const utils = require('utils');
const generateMarkdown = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
const questions = [{
    type: 'input',
    message: 'What would you like to title this project?',
    name:'Title'
}, {
    type: 'input',
    message: 'In detail, describe what this project entails.',
    name:'Description'
}, {
    type: 'input',
    message: 'Tabel of Contents',
    name: 'Tabel of Contents'
}, {
    type: 'input',
    message: 'What is required for the user to install to run this app?',
    name: 'Installation'
}, {
    type: 'input',
    message: 'How is this app used?',
    name: 'Usage'
}, {
    type: 'input',
    message: 'Who contributed to this project?',
    name: 'Contribution'
}, {
    type: 'input',
    message: 'What commads are used to test this application?',
    name: 'Tests'
},{
    type: 'input',
    message: 'Input the license that is being used.',
    name: 'License'
}, {
    type: 'input',
    message: 'Please enter your GitHub Username.',
    name: 'Username'
}, {
    type: 'input',
    message: 'Please enter your Email address.',
    name: 'Email'
}];

//TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function(err){
       console.log(fileName)
        console.log(data)
        if (err){
           return console.log(err)
        } else {
            console.log('Success, your README has been generated!')
        }
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then(function(data) {
            writeToFile('README.md', generateMarkdown(data));
            console.log(data)
        })
}

// Function call to initialize app
init();