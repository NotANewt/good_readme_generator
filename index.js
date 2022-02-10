// TODO: Include packages needed for this application
const inquirer = require("inqurer");
const fs = require("fs");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "Enter your project's title.",
  },

  {
    type: "input",
    name: "description",
    message: "Enter a description of your application.",
  },

  {
    type: "input",
    name: "installation",
    message: "Enter installation instructions.",
  },

  {
    type: "input",
    name: "usage_information",
    message: "Enter usage information by describing instructions and examples for use.",
  },

  {
    type: "input",
    name: "screenshot",
    message: "Enter the relative file path of a screenshot for your application.",
  },

  {
    type: "input",
    name: "contribution_guidelines",
    message: "Enter any guidelines for other developers who would like to contribute to your application.",
  },

  {
    type: "input",
    name: "test_instructions",
    message: "Enter examples of how others can test your application.",
  },

  {
    type: "list",
    name: "license",
    message: "Choose a license for your application.",
    choices: ["Apache License 2.0", "GNU General Public License v3.0", "MIT License", "BSD 2-Clause 'Simplified' License", "BSD 3-Clause 'New' or 'Revised' License", "Boost Software License 1.0", "Creative Commons Zero v1.0 Universal", "Eclipse Public License 2.0", "GNU Affero General Public License v3.0", "GNU General Public License v2.0", "GNU Lesser General Public License v2.1", "Mozilla Public License 2.0", "The Unlicense"],
    default: "MIT License",
  },

  {
    type: "input",
    name: "github",
    message: "Enter your GitHub username.",
  },

  {
    type: "input",
    name: "email",
    message: "Enter your email address.",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
