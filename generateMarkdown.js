/*
 renderLicenseBadge
  returns a license badge based on which license is passed in
    * licenseBadge is switched depending on the license passed in
    * licenseBadge is a badge with the license name and color
    * if no license or user chose "None", returns an empty string
    * returns licenseBadge
*/
function renderLicenseBadge({ license }) {
  let licenseBadge;

  switch (license) {
    case "MIT":
      licenseBadge = `![MIT License](https://img.shields.io/badge/license-MIT-green)`;
      break;

    case "Apache 2.0":
      licenseBadge = `![Apache License 2.0](https://img.shields.io/badge/license-Apache-blue)`;
      break;

    case "GPL 3.0":
      licenseBadge = `![GPL 3.0 License](https://img.shields.io/badge/license-GPL-blue)`;
      break;

    case "BSD 3":
      licenseBadge = `![BSD 3 License](https://img.shields.io/badge/license-BSD3-green)`;
      break;

    case "None":
      licenseBadge = "";
      break;

    default:
      licenseBadge = "";
      break;
  }

  return licenseBadge;
}

/*
 renderLicenseLink
  returns the link to the license section of the README.md file
    * if the license is not an empty string and is not "None", the license link for the README.md file will be generated
    * if the license is an empty string or the user chose "None", licenseLink will be an empty string
    * returns licenseLink
*/
function renderLicenseLink({ license }) {
  let licenseLink = "";
  if (license !== "" && license !== "None") {
    licenseLink = `- [License](#license)`;
  }
  return licenseLink;
}

/*
 renderLicensesection
  returns what will be written under the license section
    * if the license is not an empty string and is not "None", text will be written describing which license the application is covered under
    * if the license is an empty string or the user chose "None", text will be an empty string
    * returns licenseSection
*/
function renderLicenseSection({ license }) {
  let licenseSection = "";
  if (license !== "" && license !== "None") {
    licenseSection = `## License
    
This application is licensed under the ${license} license.`;
  }
  return licenseSection;
}

/*
 generateMarkdown
  generates the markdown that will go into the README.md file
    * takes in answers, licenseBadge, licenseLink, and licenseSection
    * uses a template literal for the layout of the README file with the supplied answers added into the template
    * returns the template literal
*/
function generateMarkdown({ title, purpose, problem_solved, languages_used, description, installation, usage_information, screenshot, alt_text_screenshot, license, contribution_guidelines, test_instructions, github, email, repo_link, deployed_link }, licenseBadge, licenseLink, licenseSection) {
  return `# ${title}

${licenseBadge}

## Description

- Purpose of this project: ${purpose}
- Problem(s) the app solves: ${problem_solved}
- Languages used: ${languages_used.join(", ")}
- Brief description: ${description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
${licenseLink}
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)
- [Links](#links)

## Installation

${installation}

## Usage

${usage_information}

### Screenshot

!["${alt_text_screenshot}"](${screenshot})

${licenseSection}

## Contributing

${contribution_guidelines}

## Tests

${test_instructions}

## Questions



If you have any questions:

- Email me: [${email}](mailto:${email})
- Go to my github: [${github}](https://github.com/${github})

## Links

- Here is the repo: [${github}/${title}](${repo_link})
- Here is the pages: [${github}/pages](${deployed_link})
`;
}

// modules to export
module.exports = {
  renderLicenseBadge,
  renderLicenseLink,
  renderLicenseSection,
  generateMarkdown,
};
