const inquirer = require('inquirer');
const mysql = require('mysql2');
const cTable = require('console.table');

const db = mysql.createConnection(
    {
        host: 'localhost',
        password: 'Starwars0819',
    });

class CLI {

    run() {
        return inquirer.prompt([
            {
                type: 'list',
                name: 'action',
                message: 'What would you like to do?',
                choices: [
                    'View all departments',
                    'View all roles',
                    'View all employees',
                    'Add a department',
                    'Add a role',
                    'Add an employee',
                    'Update an employee role',
                    'Exit'
                ]
            }
        ])
            .then(({ action }) => {
                switch (action) {
                    case 'View all departments':
                        return this.viewDepartments();
                    case 'View all roles':
                        return this.viewRoles();
                    case 'View all employees':
                        return this.viewEmployees();
                    case 'Add a department':
                        return this.addDepartment();
                    case 'Add a role':
                        return this.addRole();
                    case 'Add an employee':
                        return this.addEmployee();
                    case 'Update an employee role':
                        return this.updateEmployeeRole();
                    case 'Exit':
                        return this.exit();
                }
            })

    }