
// const express = require('express');
const inquirer = require('inquirer');
const mysql = require('mysql2');
const PORT = process.env.PORT || 3001;
const path = require('path');
const db = require('./db/connection');
const inquirer = require('inquirer');
// const app = express();

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
            'Update an employee role',
            'Exit'
        ]

    }
];

const addRolePrompt = [
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
];

const addDepartmentPrompt = [
    {
        type: 'input',
        name: 'name',
        message: 'What is the name of the department?'

    }
];

const addEmployeePrompt = [
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

    {

        type: 'input',
        name: 'manager_id',
        message: 'What is the manager id of the employee?'

    }
];

const updateEmployeeRolePrompt = [
    {
        type: 'input',
        name: 'employee_id',
        message: 'What is the id of the employee you would like to update?'

    },

    {
        type: 'input',
        name: 'role_id',
        message: 'What is the new role id of the employee?'

    }
];

const exitPrompt = [
    {
        type: 'list',
        name: 'exit',
        message: 'Would you like to exit?',
        choices: [
            'Yes',
            'No'
        ]
    }
];

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

const viewEmployees = () => {
    const sql = `SELECT * FROM employees`;
    db.query(sql, (err, result) => {
        if (err) {
            console.log(err);
            return;
        }
        console.table(result);
        run();
    });
};

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Connect to database
const db = mysql.createConnection(
  {
    host: 'localhost',
    // MySQL username,
    user: 'root',
    // TODO: Add MySQL password here
    password: 'Starwars0819',
    database: 'department_db'
  },
  console.log(`Connected to the database_db database.`)
);

// const userPrompt = [
//     {
//         type: 'list',
//         name: 'action',
//         message: 'What would you like to do?',
//         choices: [
//             'View all departments',
//             'View all roles',
//             'View all employees',
//             'Add a department',
//             'Add a role',
//             'Add an employee',
//             'Update an employee role',
//             'Exit'
//         ]
//     }
// ];

// const addRolePrompt = [
//     {
//         type: 'input',
//         name: 'title',
//         message: 'What is the title of the role?'

//     },
//     {
//         type: 'input',
//         name: 'salary',
//         message: 'What is the salary of the role?'

//     },
//     {
//         type: 'input',
//         name: 'department_id',
//         message: 'What is the department id of the role?'

//     }
// ];

// const addDepartmentPrompt = [
//     {
//         type: 'input',
//         name: 'name',
//         message: 'What is the name of the department?'

//     }
// ];

// const addEmployeePrompt = [
//     {
//         type: 'input',
//         name: 'first_name',
//         message: 'What is the first name of the employee?'

//     },
//     {
//         type: 'input',
//         name: 'last_name',
//         message: 'What is the last name of the employee?'

//     },
//     {
//         type: 'input',
//         name: 'role_id',
//         message: 'What is the role id of the employee?'

//     },
//     {
//         type: 'input',
//         name: 'manager_id',
//         message: 'What is the manager id of the employee?'

//     }
// ];

function renderWelcome() {
    const welcome = `Welcome to the Employee Tracker!`;
    console.log(welcome);
console.log(`====================================`);

    return welcome;
}

function renderMenu() {
    const menu = `What would you like to do?`;
    console.log(menu);
    console.log(`====================================`);
    return menu;
}

function renderDepartments() {
    const departments = `View all departments`;
    console.log(departments);
    console.log(`====================================`);
    return departments;
}

function renderRoles() {
    const roles = `View all roles`;
    console.log(roles);
    console.log(`====================================`);
    return roles;
}

function renderEmployees() {
    const employees = `View all employees`;
    console.log(employees);
    console.log(`====================================`);
    return employees;
}

function init() {
    inquirer.prompt(userPrompt)
    .then((response) => {
        switch (response.action) {
            case 'View all departments':
                viewDepartments();
                break;
            case 'View all roles':
                viewRoles();
                break;
            case 'View all employees':
                viewEmployees();
                break;
            case 'Add a department':
                addDepartment();
                break;
            case 'Add a role':
                addRole();
                break;
            case 'Add an employee':
                addEmployee();
                break;
            case 'Update an employee role':
                updateEmployeeRole();
                break;
            case 'Exit':
                exit();
                break;
        }
    });
}




// Default response for any other request (Not Found)
app.use((req, res) => {
  res.status(404).end();
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
