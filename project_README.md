# 09 Node.js Homework: Professional README Generator

![MIT License](https://img.shields.io/badge/license-MIT-green)

## Description

- Purpose of this project: This is a command-line application that dynamically generates a professional README.md file from a user's input using the [Inquirer package](https://www.npmjs.com/package/inquirer) from [npm](https://www.npmjs.com/).
- Problem(s) the app solves: Using this professional README generator allows the user to spend less time on the README and more time on the application itself.
- Languages used: JavaScript (Node.js)
- Brief description: User answers a series of questions about their application repository, and then a high-quality, prefessional README.md is generated.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)
- [Links](#links)

## Installation

To use this command-line application, please download and install the [Inquirer package](https://www.npmjs.com/package/inquirer) from [npm](https://www.npmjs.com/).

## Usage

The application will be invoked by using the following command:

```bash
node index.js
```

The user will be prompted for information about their application repository, then a high-quality, professional README.md is generated with the title of their project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions. The user's answers will be displayed under the appropriate sections of the README.md. When they choose a license for their application from a list of options, a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under. If no license is selected, the License section will not appear in the README.md. When they enter their GitHub username and email address, they will be added to the section of the README entitled Questions, with instructions on how to reach the user with additional questions. When the user clicks on the links in the Table of Contents, they are taken to the corresponding section of the README.

### Screenshot

![""]()

## License

This application is licensed under the MIT license.

## Contributing

If you would like to contribute to this application, please follow the Contributor Covenant guidelines.

## Tests

You can test this application by attempting to input incorrect or unexpected inputs for inquirer questions.

## Questions

If you have any questions:

- Email me: [meegan.r.anderson@gmail.com](mailto:meegan.r.anderson@gmail.com)
- Go to my github: [NotANewt](https://github.com/NotANewt)

## Links

- Here is the repo: [NotANewt/hw9_good_readme_generator}](https://github.com/NotANewt/hw9_good_readme_generator)
- Here is the walkthrough video: [NotANewt/hw9_good_readme_generator}](https://github.com/NotANewt/hw9_good_readme_generator)
