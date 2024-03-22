// TODO: Create a function that returns a license badge based on which license is passed in

let licenseBadge = "";

// If there is no license, return an empty string
function renderLicenseBadge(license) {
  const badgeMarkdown = {
    "MIT": "![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)",
    "Apache 2.0": "![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)",
    "GNU General public": "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)",
    "ISC": "![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)",
    "None": "",
  };
  
  licenseBadge = badgeMarkdown[license] || "";

}

// TODO: Create a function that returns the license link
let licenseLink = "";


// If there is no license, return an empty string
function renderLicenseLink(license) {
  const licenseURLs = {
    "MIT": "https://opensource.org/licenses/MIT",
    "Apache 2.0": "https://opensource.org/licenses/Apache-2.0",
    "GNU General public": "https://www.gnu.org/licenses/gpl-3.0",
    "ISC": "https://opensource.org/licenses/ISC",
    "None": "No license",
  };

  licenseLink = licenseURLs[license] || "";
}

// TODO: Create a function that returns the license section of README

// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (licenseLink) {
    return `This project is licensed under the ${license} license.`;
  } else {    
    return "";
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) { 
  renderLicenseSection(data.license);
  renderLicenseLink(data.license);
  renderLicenseBadge(data.license);
  return `# ${data.title}   
  ## Description
  ${data.description}
  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)
  
  ## Installation
  ${data.installation}
  
  ## Usage
  ${data.usage}
  ![screnshot](./assets/images/screenshot.png)
  
  ## Contributing
  ${data.contributing}
  
  ## Tests
  ${data.tests}
  
  ## Questions
  find me on GitHub: [${data.github}](http://gtihub.com/${data.github})

  contract email me at: [${data.email}](mailto:${data.email})
`;
}

module.exports = generateMarkdown;
