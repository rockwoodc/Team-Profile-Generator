const inquirer = require('inquirer');
const Employee = require('./lib/Employee');
const Mangager = require('./lib/Manager');
const Intern = require('./lib/Intern');
const Engineer = require('./lib/Engineer');
const generateSite = require('./generate-site');
const teamMembers = [];

//list that options that the creators has for their team
const siteOptions = () => {
    return inquirer.prompt ([
        {
            type: 'list',
            name: 'menu',
            message: 'Please select the team member you would like to add:',
            choices: ['add a manager', 'add an engineer', 'add an intern', 'finish building my team']
        }
    ])
    .then(userChoice => {
        switch (userChoice.menu) {
            case 'add a manager':
                managerInfo();
                break;
            case 'add an engineer':
                engineerInfo();
                break;
            case 'add an intern':
                internInfo();
                 break;
            default:
                createPage();
        };
    });
};

siteOptions();