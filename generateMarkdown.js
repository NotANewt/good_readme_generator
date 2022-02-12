// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge({ license }) {
  let licenseBadge;

  switch (license) {
    case "MIT License":
      licenseBadge = `[![MIT License](https://img.shields.io/badge/license-MIT-green]`;
      break;

    case "Apache License 2.0":
      licenseBadge = `[![Apache License 2.0](https://img.shields.io/badge/license-Apache-blue]`;
      break;

    case "BSD 2-Clause 'Simplified' License":
      licenseBadge = `[![BSD 2-Clause 'Simplified' License](https://img.shields.io/badge/license-BSD-green]`;
      break;

    default:
      licenseBadge = "";
      break;
  }

  return licenseBadge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection({ license }) {
  let licenseSection;

  switch (license) {
    case "MIT License":
      licenseSection = "This website is covered under an MIT License.";
      break;

    case "Apache License 2.0":
      licenseSection = "This website is covered under an Apache License 2.0.";
      break;

    case "BSD 2-Clause 'Simplified' License":
      licenseSection = "This website is covered under a BSD 2-Clause 'Simplified' License.";
      break;

    default:
      licenseSection = "";
      break;
  }

  return licenseSection;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown({ title, purpose, problem_solved, languages_used, description, installation, usage_information, screenshot, alt_text_screenshot, license, contribution_guidelines, test_instructions, github, email, repo_link, deployed_link }, licenseBadge, licenseSection) {
  if (contribution_guidelines === "Contributor Covenant") {
    contribution_guidelines = `[![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-2.1-4baaaa.svg)](code_of_conduct.md)
If you would like to contribute to this application, please follow the Contributor Covenant.
Details can be found at [Contributor Covenant](https://www.contributor-covenant.org/).
`;
  }
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
- [License](#license)
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

## License

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
