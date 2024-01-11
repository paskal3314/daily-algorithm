# Beats 23.62%
SELECT b.name, sum(amount) as balance
    FROM Transactions a
    JOIN Users b ON a.account = b.account
    GROUP BY a.account
    HAVING balance > 10000
