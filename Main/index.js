
// Dependencies 
const path = require('path');
const inquirer = require('inquirer');
const mysql = require('mysql2');
const { response } = require('express');

// Connect to database
const questions = [
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
            'Exit'
        ]

    }
];

// The promps will be displayed in the terminal
run()
function run() {
    inquirer.prompt(questions)
        .then(({ action }) => {
            switch (action) {
                case 'View all departments':
                    return viewDepartments();
                case 'View all roles':
                    return viewRoles();
                case 'View all employees':
                    return viewEmployees();
                case 'Add a department':
                    return addDepartment();
                case 'Add a role':
                    return addRole();
                case 'Add an employee':
                    return addEmployee();
                case 'Exit':
                    return exit();
            }
        });
};



// Functions
const viewDepartments = () => {
    const sql = `SELECT * FROM departments`;
    db.query(sql, (err, result) => {
        if (err) {
            console.log(err);
            return;
        }
        console.table(result);
        run();
    });
};
// how to get the table to display in the terminal
const viewRoles = () => {
    const sql = `SELECT * FROM roles`;
    db.query(sql, (err, result) => {
        if (err) {
            console.log(err);
            return;
        }
        console.table(result);
        run();
    });
};
// how to get the table to display in the terminal
const viewEmployees = () => {
    const sql = `SELECT * FROM employee`;
    db.query(sql, (err, result) => {
        if (err) {
            console.log(err);
            return;
        }
        console.table(result);
        run();
    });
};
// how to get the table to display in the terminal
const addDepartment = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of the department?'

        }
    ])
    // how to get the table to display in the terminal
        .then(response => {
            const sql = `INSERT INTO departments (name) VALUES (?)`;
            const params = [response.name];
            db.query(sql, params, (err, result) => {
                if (err) {
                    console.log(err);
                    return;
                }
                console.log('Department added!');
                run();
            });
        });
};
 // how to add to the table in the terminal
const addRole = () => {
    inquirer.prompt([
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
        // how to insert roles into the table in the terminal
        .then(response => {
            const sql = `INSERT INTO roles (title, salary, department_id) VALUES (?, ?, ?)`;
            const params = [response.title, response.salary, response.department_id];
            db.query(sql, params, (err, result) => {
                if (err) {
                    console.log(err);
                    return;
                }
                console.log('Role added!');
                run();
            });
        }); 
};
 // how to add employees to the table in the terminal
const addEmployee = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'first_name',
            message: 'What is the first name of the employee?'

        },

        {
            type: 'input',
            name: 'last_name',
            message: 'What is the last name of the employee?'

        },

        {
            type: 'input',
            name: 'role_id',
            message: 'What is the role id of the employee?'

        },
    ])
        // how to insert employees into the table in the terminal
        .then(response => {
            const sql = `INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)`;
            const params = [response.first_name, response.last_name, response.role_id, response.manager_id];
            db.query(sql, params, (err, result) => {
                if (err) {
                    console.log(err);
                    return;
                }
                console.log('Employee added!');
                run();
            });
        });
};

// how to exit the terminal
const exit = () => {
    console.log('Goodbye!');
    process.exit();
};
// The connection to the database
const db = mysql.createConnection(
  {
    host: 'localhost',
    user: 'root',
    password: 'Starwars0819',
    database: 'department_db'
  },
  console.log(`Connected to the database_db database.`)
);

// The welcome message
function renderWelcome() {
    const welcome = `Welcome to the Employee Tracker!`;
    console.log(welcome);
console.log(`====================================`);

    return welcome;
}

