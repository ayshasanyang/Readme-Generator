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
- [License](#License)
- [Contributors](#Contributors)
- [Tests](#Tests)
- [Questions](#questions)
- [GitHub Info](#GitHub) 
## Installation
        ${data.installation}
## Usage
${data.usage}
## License
![License](https://img.shields.io/badge/License-${data.license}-blue.svg "License Badge")

## Contributors
![Contributors](https://img.shields.io/github/contributors-${data.contributing}/badges/shields.svg)

## Tests

${data.test}
## Questions
For any other questions, please send me an email at: ${data.email}.

`;
}

module.exports = generateMarkdown;
 