CREATE OR REPLACE FUNCTION NthHighestSalary(N INT) RETURNS TABLE (Salary INT) AS $$
BEGIN
  RETURN QUERY (
    -- Write your PostgreSQL query statement below.
    with tb as (select Employee.salary, RANK() OVER (order by Employee.salary desc) as rank FROM Employee)
    select tb.salary from tb where tb.rank = N limit 1
      
  );
END;
$$ LANGUAGE plpgsql;