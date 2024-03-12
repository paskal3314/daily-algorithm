-- Beats 33.78%
WITH highest_table
    AS (SELECT departmentId, max(salary) as highestSalary FROM Employee GROUP BY departmentId)
    SELECT b.name as Department, a.name as Employee, a.salary as Salary
        FROM Employee a
        JOIN Department b on a.departmentId = b.id
        JOIN highest_table c on b.id = c.departmentId and a.salary = c.highestSalary
