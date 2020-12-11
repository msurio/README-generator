// function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}
  ![badge](https://img.shields.io/badge/license-${data.license}-brightgreen)

  ## Table of Contents
* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)


  ## Installation
    ${data.installation}

  ## Usage
    ${data.usage}

  ##License
  ![badge](https://img.shields.io/badge/license-${data.license}-brightgreen)

  <br />

  This application is covered by the ${data.license} license. 

  ##Contribution
    ${data.contribution}
  
  ##Tests

  #Questions



`;
}

module.exports = generateMarkdown;
