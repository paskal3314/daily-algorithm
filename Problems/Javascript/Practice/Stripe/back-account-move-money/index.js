function func(str) {
  const accounts = str.split(",").map((accountStr) => {
    const [account, balance] = accountStr.split(":");
    return {
      account,
      balance: parseInt(balance),
    };
  });
  const aboveAccounts = accounts.filter((account) => account.balance > 100).sort((a, b) => a.balance - b.balance);
  const belowAccounts = accounts.filter((account) => account.balance < 100).sort((a, b) => a.balance - b.balance);

  for (const account of belowAccounts) {
    const balanceNeeded = 100 - account.balance;
    let totalAvailable = 0;
    let isTransferMade = false;
    for (const aboveAccount of aboveAccounts) {
      if (aboveAccount.balance - 100 >= balanceNeeded) {
        aboveAccount.balance -= balanceNeeded;
        isTransferMade = true;
        console.log(`- from: ${aboveAccount.account}, to: ${account.account}, amount: ${balanceNeeded}`);
      } else {
        totalAvailable += aboveAccount.balance - 100;
      }
    }
    if (!isTransferMade && totalAvailable >= balanceNeeded) {
      // todo
    } else if (!isTransferMade && totalAvailable < balanceNeeded) {
      console.log("[Error] - not enough balances to leverage");
      return false;
    }
  }
}

func("TO:80,US:140,MX:110,SG:120,FR:70");
