const fs = require('fs');
const inq = require('inquirer')
let title;




// array of questions for user
// const questions = [
// "What is your project title?", 
// "Description?",
// "Instalation Instructions?",
// "Usage Infromation", 
// "Contribution guidelines?", 
// "Test Instructions?" 
// ];

// function to write README file
function writeToFile(fileName, data) {

    inq
        .prompt([
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
                type: 'list',
                name: 'Badges',
                choices: ['Apache 2.0' , 'BSD 3' , 'BSD2']
            }

          

            
        ])
        .then(answers => {
            let badges;

           if(answers.choices = 'Apache 2.0') 
            {
                badges = '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
           }
           else if(answers.choices = 'BSD 3'){
                badges = '[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)'
           }else {
               badges = '[![License](https://img.shields.io/badge/License-BSD%202--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)'
           }

            const title = answers.title
            const desc = answers.Description
            const install = answers.instalation
            const usage = answers.usageInfromation
            const contribute = answers.contributionGuidlines
            const github = answers.gitHub
            const email = answers.email
            const testing = answers.testing
            const markdown = `# ${title}

${badges}
 ## Description
 ${desc}

 ## Table of contents
 ### [Instructions for Instalation](#Instalation)
 ### [Usage Information](#usage)
 ### [Contribution Guidlines](#Contribution)
 ### [Testing Instructions](#Testing)
 ### [Questions](#questions)
  1. Email
  2. Github Information
  
  ## Instructions for Instalation

  ![Instalation image](instal_image)

  ${install}

  ## Usage Information

  ![Usage image](usage_image)
  
  ${usage}

  ## Contribution Guidlines

  ${contribute}

  ## Testing Insttructions

  ${testing}

  ## Questions

  Github Username: ${github}

  URL: [Click Here to see my GitHub account](https://github.com/kashqar1117)

  Email: ${email}

  To contact me please send me an email from 9am to 5pm Sunday through Saturday.
  `

            fs.writeFile('README.md' , markdown ,(err) => {
                if (err) throw err;
                console.log('file saved')


            } )
        })
       
    }
writeToFile()

// function to initialize program
function init() {

}

// function call to initialize program
init();
