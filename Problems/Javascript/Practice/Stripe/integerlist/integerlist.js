const numOfBits = 10;

// Store
function storeNumbersAsArray(numbers) {
  // Using BigInt to handle larger numbers
  let result = 0n;
  for (let i = 0; i < numbers.length; i++) {
    result = result | (BigInt(numbers[i]) << BigInt(i * numOfBits));
  }
  return result;
}

// Retrieve
function retrieveNumbersFromBits(number) {
  const result = [];
  let n = number;
  while (n > 0n) {
    result.push(Number(n & 0x3ffn)); // Get 8 bits at a time
    n = n >> 10n;
  }
  return result;
}

const numbers = [1, 0, 2, 4, 10, 1023, 0, 1];
const stored = storeNumbersAsArray(numbers);
console.log(retrieveNumbersFromBits(stored)); // [1, 0, 2, 4, 10, 20, 0, 1]
