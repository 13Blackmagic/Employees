
const express = require('express');
const mysql = require('mysql2');
const PORT = process.env.PORT || 3001;
const app = express();

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

const userPrompt = [
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




// Default response for any other request (Not Found)
app.use((req, res) => {
  res.status(404).end();
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
