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
* [Authors](#authors)
* [Tests](#tests)


  ## Installation
    ${data.installation}

  ## Usage
    ${data.usage}

  ##License
  ![badge](https://img.shields.io/badge/license-${data.license}-brightgreen)

  <br />

  This application is covered by the ${data.license} license. 

  ##Contributing
    ${data.contribution}
  
  ##Tests
    ${data.tests}

  #Questions
    ${data.questions}

    <br/>

    Find me on GitHub: [${data.username}](https://github.com/${data.username})

    <br />

    Email me with any questions: ${answers.email}



`;
}

module.exports = generateMarkdown;
