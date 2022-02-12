// Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./generateMarkdown.js");

// An array of questions for user input
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
    type: "checkbox",
    message: "Enter any languages used in developing your application.",
    choices: ["HTML", "CSS", "JavaScript", "PHP", "SQL", "Python"],
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
    validate: function (input) {
      const valid = input.startsWith("./");
      return valid || "Please enter a valid file path";
    },
  },

  {
    name: "alt_text_screenshot",
    type: "input",
    message: "Enter the alt text for your screenshot.",
  },

  {
    name: "license",
    type: "list",
    message: "Choose a license for your application.",
    choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"],
    default: "MIT",
  },

  {
    name: "contribution_guidelines",
    type: "input",
    message: "Enter your contribution guidelines.",
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
    validate: function (email) {
      const valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
      return valid || "Please enter a valid email address.";
    },
  },

  {
    name: "repo_link",
    type: "input",
    message: "Enter the link to the application's github repository.",
    validate: function (input) {
      const valid = input.startsWith("https://www.github.com");
      return valid || "Please enter a valid website";
    },
  },

  {
    name: "deployed_link",
    type: "input",
    message: "Enter the link to the deployed application.",
    validate: function (input) {
      const valid = input.startsWith("https://www.");
      return valid || "Please enter a valid website";
    },
  },
];

function runInqurer() {
  inquirer.prompt(questions).then((answers) => {
    const licenseBadge = generateMarkdown.renderLicenseBadge(answers);
    const licenseLink = generateMarkdown.renderLicenseLink(answers);
    const licenseSection = generateMarkdown.renderLicenseSection(answers);
    const readMeText = generateMarkdown.generateMarkdown(answers, licenseBadge, licenseLink, licenseSection);
    writeToFile(readMeText);
  });
}

// Write README file
function writeToFile(readMeText) {
  fs.writeFile("README.md", readMeText, (err) => (err ? console.error(err) : console.log("Success!")));
}

// Initialize app
function init() {
  runInqurer();
}

// Initialize app
init();
