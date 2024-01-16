# Beats 21.68%
# Write your MySQL query statement below

SELECT a.employee_id
    FROM Employees a
        LEFT JOIN Employees b ON a.manager_id = b.employee_id
    WHERE a.salary < 30000 and b.name is null and a.manager_id is not null
    ORDER BY a.employee_id