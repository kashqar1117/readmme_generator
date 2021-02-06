
// pull in file system
const fs = require('fs');
//pull in inquirer
const inquirer = require('inquirer')
// require generate markdown
const generateMarkdown = require('./generateMarkdown') 
const questions = [
    {
        type: 'input',
        name: 'title',
        message: "what is the title?"
    },
    {
        type: 'input',
        name: 'Description',
        message: "Write a short description."
    },
    {
        type: 'input',
        name: 'instalation',
        message: "Write out intsructions for installation."
    },
    {
        type: 'input',
        name: 'usageInfromation',
        message: "Write out usage information."
    },
    {
        type: 'input',
        name: 'contributionGuidlines',
        message: "contributions"
    },
    {
        type: 'input',
        name: 'testInsturctions',
        message: "Write your testing instructions."
    },
    {
        type: 'input',
        name: 'gitHub',
        message: "Whats your gitHub username?"
    },
   
    {
        type: 'input',
        name: 'email',
        message: "Whats your Email?"
    },
    {
        type: 'input',
        name: 'instal_image',
        message: "enter install image url"
    },
    {
        type: 'input',
        name: 'usage_image',
        message: "enter usage image url"
    },
    {
        type: 'input',
        name: 'videoLink',
        message: "please enter a video link"
    },
    {
        type: 'list',
        name: 'Badges',
        choices: ['Apache 2.0' , 'BSD 3' , 'BSD2']
    }   
]





// function to write README file
function writeToFile(fileName, data) {
//promt questions from inquirer
    inquirer
        .prompt(questions)
        .then(answers => {

        const markdown  = generateMarkdown(answers)
           
           //writes to file
            fs.writeFile('README.md' , markdown ,(err) => {
                if (err) throw err;
                console.log('file saved')


            } )
        })
       
    }
writeToFile()