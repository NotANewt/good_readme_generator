// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge({ license }) {
  let licenseBadge;

  switch (license) {
    // only needs a simple statement with a moneyboys
    // "MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"
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

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
// make it dynamic, so the license section only shows up if they choose a license type
function renderLicenseLink({ license }) {
  let licenseLink = "";
  if (license !== "" && license !== "None") {
    licenseLink = `- [License](#license)`;
  }
  return licenseLink;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
// if money boys, or return nothing
function renderLicenseSection({ license }) {
  let licenseSection = "";
  if (license !== "" && license !== "None") {
    licenseSection = `## License
    
This application is covered under the following license: ${license}`;
  }
  return licenseSection;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown({ title, purpose, problem_solved, languages_used, description, installation, usage_information, screenshot, alt_text_screenshot, license, contribution_guidelines, test_instructions, github, email, repo_link, deployed_link }, licenseBadge, licenseLink, licenseSection) {
  return `# ${title}

${licenseBadge}

## Description

- Purpose of this project: ${purpose}
- Problem(s) the app solves: ${problem_solved}
- Languages used: ${languages_used}
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
- Go to my github: [${github}/pages](https://github.com/${github})

## Links

- Here is the repo: [${github}/${title}](${repo_link})
- Here is the pages: [${github}/pages](${deployed_link})
`;
}

module.exports = {
  renderLicenseBadge,
  renderLicenseLink,
  renderLicenseSection,
  generateMarkdown,
};
