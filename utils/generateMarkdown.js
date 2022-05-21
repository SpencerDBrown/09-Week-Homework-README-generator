// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.Title}

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Description
${data.Description}

## Table of Contents:
  1. [Description](#Description)
  2. [Installation](#Installation)
  3. [Usage](#Usage)
  4. [Contribution](#Contribution)
  5. [Tests](#Tests)
  6. [License](#License)
  7. [GitHub Username](#Username)
  8. [Email](#Email)

## Installation
${data.Installation}

## Usage
${data.Usage}

## Contributions
${data.Contribution}

## Tests
${data.Tests}

## License
${data.License}

## GitHub Username
${data.Username}

## Email
${data.Email}

## Questions
If you have any questions you can contact me here ${data.Email}.

`;

}

module.exports = generateMarkdown;
