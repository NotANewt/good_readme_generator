// TODO: Include packages needed for this application
const inquirer = require("inqurer");
const fs = require("fs");

// TODO: Create an array of questions for user input
const questions = [
  {
    name: "title",
    type: "input",
    message: "Enter your project's title.",
  },

  {
    name: "description",
    type: "input",
    message: "Enter a description of your application.",
  },

  {
    name: "installation",
    type: "input",
    message: "Enter installation instructions.",
  },

  {
    name: "usage_information",
    type: "input",
    message: "Enter usage information by describing instructions and examples for use.",
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
    name: "contribution_guidelines",
    type: "input",
    message: "Enter any guidelines for other developers who would like to contribute to your application.",
  },

  {
    name: "test_instructions",
    type: "input",
    message: "Enter examples of how others can test your application.",
  },

  {
    name: "license",
    type: "list",
    message: "Choose a license for your application.",
    choices: ["Apache License 2.0", "GNU General Public License v3.0", "MIT License", "BSD 2-Clause 'Simplified' License", "BSD 3-Clause 'New' or 'Revised' License", "Boost Software License 1.0", "Creative Commons Zero v1.0 Universal", "Eclipse Public License 2.0", "GNU Affero General Public License v3.0", "GNU General Public License v2.0", "GNU Lesser General Public License v2.1", "Mozilla Public License 2.0", "The Unlicense"],
    default: "MIT License",
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
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
