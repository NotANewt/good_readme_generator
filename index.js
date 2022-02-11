// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
// const generateMarkdown = require("./generateMarkdown.js");

// TODO: Create an array of questions for user input
const questions = [
  {
    name: "title",
    type: "input",
    message: "Enter your project's title.",
  },

  {
    name: "purpose",
    type: "input",
    message: "Enter the purpose of your application.",
  },

  {
    name: "problem_solved",
    type: "input",
    message: "Enter the problem(s) your application solves.",
  },

  {
    name: "languages_used",
    type: "input",
    message: "Enter any languages used in developing your application.",
  },

  {
    name: "description",
    type: "input",
    message: "Enter a brief description of your application.",
  },

  {
    name: "installation",
    type: "input",
    message: "Enter installation instructions.",
  },

  {
    name: "usage_information",
    type: "input",
    message: "Enter usage information by describing instructions and examples for use of your application.",
  },

  {
    name: "screenshot",
    type: "input",
    message: "Enter the relative file path of a screenshot for your application.",
  },

  {
    name: "alt_text_screenshot",
    type: "input",
    message: "Enter the alt text for your screenshot.",
    default: "Screenshot of application.",
  },

  {
    name: "license",
    type: "list",
    message: "Choose a license for your application.",
    choices: ["MIT License", "Apache License 2.0", "GNU General Public License v3.0", "BSD 2-Clause 'Simplified' License", "BSD 3-Clause 'New' or 'Revised' License", "Boost Software License 1.0", "Creative Commons Zero v1.0 Universal", "Eclipse Public License 2.0", "GNU Affero General Public License v3.0", "GNU General Public License v2.0", "GNU Lesser General Public License v2.1", "Mozilla Public License 2.0", "The Unlicense"],
    default: "MIT License",
  },

  {
    name: "contribution_guidelines",
    type: "list",
    message: "Choose contribution guidelines",
    choices: ["Contributor Covenant", "custom"],
    default: "Contributor Covenant",
  },

  {
    name: "test_instructions",
    type: "input",
    message: "Enter examples of how others can test your application.",
  },

  {
    name: "github",
    type: "input",
    message: "Enter your GitHub username.",
  },

  {
    name: "email",
    type: "input",
    message: "Enter your email address.",
  },

  {
    name: "repo_link",
    type: "input",
    message: "Enter the link to the application's github repository.",
  },

  {
    name: "deployed_link",
    type: "input",
    message: "Enter the link to the deployed application.",
  },
];

function runInqurer() {
  inquirer.prompt(questions).then((answers) => {
    generateReadMe(answers);
  });

  const generateReadMe = ({ title, purpose, problem_solved, languages_used, description, installation, usage_information, screenshot, alt_text_screenshot, license, contribution_guidelines, test_instructions, github, email, repo_link, deployed_link }) => {
    if (contribution_guidelines === "Contributor Covenant") {
      contribution_guidelines = `[![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-2.1-4baaaa.svg)](code_of_conduct.md)
If you would like to contribute to this application, please follow the Contributor Covenant. 
Details can be found at [Contributor Covenant](https://www.contributor-covenant.org/).
`;
    }
    const readMeText = `# ${title}

![License Badge](https://img.shields.io/badge/license-MIT-green)

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

${license}

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
    // generateMarkdown(license);
    writeToFile(readMeText);
  };
}

// TODO: Create a function to write README file
function writeToFile(readMeText, data) {
  fs.writeFile("README.md", readMeText, (err) => (err ? console.error(err) : console.log("Success!")));
}

// TODO: Create a function to initialize app
function init() {
  runInqurer();
}

// Function call to initialize app
init();
