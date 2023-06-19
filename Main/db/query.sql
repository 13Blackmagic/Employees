USE Departments_db;
SELECT Departments.department_name, COUNT(*) AS 'Number of Employees'
FROM Roles
LEFT JOIN Departments
ON Roles.department_id = Departments.id
ORDER BY 'Number of Employees' DESC;

SELECT * FROM employee;
SELECT * FROM role;
SELECT * FROM department;

SELECT employee.first_name, employee.last_name, role.title, role.salary, department.department_name
FROM employee
LEFT JOIN role
ON employee.role_id = role.id
LEFT JOIN department
ON role.department_id = department.id;

SELECT department.department_name, COUNT(*) AS 'Number of Employees'
FROM role
LEFT JOIN department
ON role.department_id = department.id
ORDER BY 'Number of Employees' DESC;

```
I'm trying to get the movie name and the review for each movie. I'm getting the movie name but the review is null. I'm not sure what I'm doing wrong. I'm using SQLite3.

