# Beats 52%
WITH temp AS
    (SELECT *, ROW_NUMBER() OVER(ORDER BY salary DESC) AS ranknum FROM (SELECT DISTINCT salary FROM Employee) AS t)
SELECT CASE WHEN count(*) < 1 THEN NULL ELSE salary END AS SecondHighestSalary
    FROM temp
    WHERE ranknum = 2