/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function (bills) {
  let fiveBill = 0;
  let tenBill = 0;
  for (let bill of bills) {
    if (bill === 5) {
      fiveBill++;
    } else if (bill === 10) {
      tenBill++;
      if (fiveBill < 1) {
        return false;
      } else {
        fiveBill--;
      }
    } else if (bill === 20) {
      let change = 15;
      if (tenBill > 0) {
        tenBill--;
        change = change - 10;
      }
      if (fiveBill >= Math.floor(change / 5)) {
        fiveBill = fiveBill - Math.floor(change / 5);
      } else {
        return false;
      }
    }
  }
  return true;
};

function run() {
  const run1 = lemonadeChange([5, 5, 5, 10, 20]);
  const run2 = lemonadeChange([5, 5, 10, 10, 20]);
  const run3 = lemonadeChange([5, 5, 5, 5, 10, 5, 10, 10, 10, 20]);

  console.log("Result:", {
    run1: {
      expected: true,
      result: run1,
    },
    run2: {
      expected: false,
      result: run2,
    },
    run3: {
      expected: true,
      result: run3,
    },
  });
}

run();
