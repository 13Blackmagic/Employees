const inquirer = require('inquirer');
const mysql = require('mysql2');
const addRole = require('./db/roles');

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

    }}
    

    addRole() 
        return inquirer.prompt([
            {
                type: 'input',
                name: 'title',
                message: 'What is the title of the role?'

            },
            {
                type: 'input',
                name: 'salary',
                message: 'What is the salary of the role?'

            },
            {
                type: 'input',
                name: 'department_id',
                message: 'What is the department id of the role?'

            }
        ])
            .then(({ title, salary, department_id }) => {
                const sql = `INSERT INTO roles (title, salary, department_id)
                VALUES (?,?,?)`;
                const params = [title, salary, department_id];

                db.query(sql, params, (err, result) => {
                    if (err) {
                        console.log(err);
                        return;
                    }
                    console.log('Role added!');
                    this.run();
                });
            }

            );

