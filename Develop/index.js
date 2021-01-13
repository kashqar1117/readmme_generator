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
                name: 'Description?',
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
                message: "Write out usage information."
            },
            {
                type: 'input',
                name: 'gitHub',
                message: "Whats your gitHub username?"
            }

            
        ])
        .then(answers => {
      

            //set values in varibles in global
            title = answers.title
            console.log(title)


            const markdown = `# ${answers.title}

 ## Table of contents
 ### Instalation
 ### Usage Information
 ### Contribution Guidlines
 ### Questions
  1.Email
  2. Github Information`

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
