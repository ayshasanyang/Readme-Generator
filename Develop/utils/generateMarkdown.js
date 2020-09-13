// function to generate markdown for README
function generateMarkdown(data, githubInfo) {
  return `
  # ${data.title}
  ## GitHub
  ![My Image](${githubInfo.githubImage})
- ${githubInfo.name}
- [GitHub Profile](${githubInfo.profile})
  ${data.badge}
## Description
${data.description}
## Table of contents
- [Description](#Description)
- [Installation](#Installation)
- [Usage](#Usage)
- [Licence](#Licence)
- [Contributors](#Contributors)
- [Tests](#Tests)
- [Repository Link](#Repository)
- [GitHub Info](#GitHub) 
## Installation
        ${data.installation}
## Usage
${data.usage}
## Licence
${data.licence}
## Contributors
${data.contributing}
## Test
### To run tests, run the following command:
${data.test}


`;
}

module.exports = generateMarkdown;
 