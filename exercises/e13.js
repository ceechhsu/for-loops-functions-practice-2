// EXERCISE 13
// Return an array of bank accounts that have a sum of deposits less than 2000 or no deposits at all
// Array example: bankAccounts in /data/data.js
// getAllAccountsWithSumsOfDepositsLess2000(bankAccounts) => [3432, 43242.34, 23432]

export function getAllAccountsWithSumsOfDepositsLess2000(array) {
  // Your code goes here...
  let result = [];
  for (const elem of array) {
    if (elem.hasOwnProperty("deposits")) {
      let sumOfDeposits = elem.deposits.reduce(
        (acc, currentValue) => acc + currentValue,
        0
      );
      if (sumOfDeposits < 2000) {
        result.push(elem);
      }
    } else {
      result.push(elem);
    }
  }
  return result;
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-13"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
