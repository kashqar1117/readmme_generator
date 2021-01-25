// function to generate markdown for README
function generateMarkdown(answers) {
  let badges;
  //creating a badge varaible dynamically

 if(answers.choices = 'Apache 2.0') 
  {
      badges = '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
 }
 else if(answers.choices = 'BSD 3'){
      badges = '[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)'
 }else {
     badges = '[![License](https://img.shields.io/badge/License-BSD%202--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)'
 }
  // varblies to save answeres
  // const title = answers.title
  // const desc = answers.Description
  // const install = answers.instalation
  // const usage = answers.usageInfromation
  // const contribute = answers.contributionGuidlines
  const github = answers.gitHub
  const email = answers.email
  // const testing = answers.testing


  //start of markdown file
  return`# ${answers.title}

${badges}
## Description
${answers.Description}

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

${answers.instalation}

## Usage Information

![Usage image](usage_image)

${answers.usageInfromation}

## Contribution Guidlines

${answers.contributionGuidlines}

## Testing Insttructions

${answers.testing}

## Questions

Github Username: ${github}

URL: [Click Here to see my GitHub account](https://github.com/${github})

Email: [${email}]

To contact me please send me an email from 9am to 5pm Sunday through Saturday.
`

;
}

module.exports = generateMarkdown;
