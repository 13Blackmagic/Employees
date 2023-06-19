SELECT Departments.department_name, COUNT(*) AS 'Number of Employees'
FROM Roles
LEFT JOIN Departments
ON Roles.department_id = Departments.id
ORDER BY 'Number of Employees' DESC;
```
I'm trying to get the movie name and the review for each movie. I'm getting the movie name but the review is null. I'm not sure what I'm doing wrong. I'm using SQLite3.

