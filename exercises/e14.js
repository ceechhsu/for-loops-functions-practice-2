// EXERCISE 14
// The balance is supposed to equal the difference of all deposits and all withdrawals.
// Check every bank account balance and return the array of bank accounts with a wrong balance
// Array example: bankAccounts in /data/data.js
// getClientsWithWrongBalance(bankAccounts) => [{ name: 'Name1', balance: 32, ... }, { name: 'Name2', balance: 3523, ... }]

export function getClientsWithWrongBalance(array) {
  // Your code goes here...
  let result = [];
  for (const elem of array) {
    // total deposits
    let totalDeposits = 0;
    if (elem.hasOwnProperty("deposits")) {
      totalDeposits = elem.deposits.reduce(
        (acc, currentValue) => acc + currentValue,
        0
      );
    }
    // total withdrawals
    let totalWithDrawals = 0;
    if (elem.hasOwnProperty("withdrawals")) {
      totalWithDrawals = elem.withdrawals.reduce(
        (acc, currentValue) => acc + currentValue,
        0
      );
    }
    // check if balance = deposits - withdrawals
    if (elem.balance !== totalDeposits - totalWithDrawals) {
      result.push(elem);
    }
  }
  return result;
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-14"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
