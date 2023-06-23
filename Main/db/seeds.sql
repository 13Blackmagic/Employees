USE Departments_db;
INSERT INTO department (department_name)
VALUES ('Sales'),
       ('Engineering'),
       ('Finance'),
       ('Legal'),
       ('HR');

INSERT INTO roles (title, salary, department_id)
VALUES ('Sales Lead', 100000, 1),
       ('Salesperson', 80000, 1),
       ('Lead Engineer', 150000, 2),
       ('Software Engineer', 120000, 2),
       ('Account Manager', 160000, 3),
       ('Accountant', 125000, 3),
       ('Legal Team Lead', 250000, 4),
       ('Lawyer', 190000, 4),
       ('HR Lead', 140000, 5),
       ('HR Representative', 90000, 5);

INSERT INTO employee (first_name, last_name, role_id, manager_id)   
VALUES ('John', 'Doe', 1, NULL),
       ('Mike', 'Chan', 2, 1),
       ('Ashley', 'Rodriguez', 3, NULL),
       ('Kevin', 'Tupik', 4, 3),
       ('Malia', 'Brown', 5, NULL),
       ('Sarah', 'Lourd', 6, 5),
       ('Tom', 'Allen', 7, NULL),
       ('Sam', 'Clemens', 8, 7),
       ('Samantha', 'Rudolph', 9, NULL),
       ('Toby', 'Miller', 10, 9);


