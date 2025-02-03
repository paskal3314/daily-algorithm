// Given a list of inputs which are strings of words separated by commas, print specific words from the input in a given format. e.g. String input could be a list of strings that look like this: "1, A1, 5000, card_number, 1234567" The words represent the timestamp, ID, amount, type, and value respectively. For each string input, print the info in this format: "ID amount APPROVED". You can assume everything is approved for now. Print the info in chronological order according to their timestamps.

function printApprovedTransactions(dataset = []) {
  const parsedDataset = dataset.map((str) => str.split(", "));
  const filteredDataset = [];
  for (const parsedData of parsedDataset) {
    if (Array.isArray(parsedData) !== true) continue;
    const [timestamp, id, amount, cardNumber, value] = parsedData;

    if (!id || isNaN(parseFloat(amount))) {
      continue;
    }
    filteredDataset.push(parsedData);
  }
  filteredDataset.sort((a, b) => parseInt(a[0]) - parseInt(b[0]));

  for (const [timestamp, id, amount, cardNumber, value] of filteredDataset) {
    console.log(`${id} ${amount} APPROVED`);
  }
  return;
}

const inputData = [
  "1700000001, A12, 3000, card_number, 9876543", // Normal case
  "1700000003, B45, 1500, card_number, 1231231", // Normal case
  "1700000002, C78, 5000, card_number, 6543210", // Normal case
  "1700000004, D90, 750, card_number, 1112223", // Normal case

  // 🔴 Edge Cases 🔴
  "1700000005, E33, , card_number, 2223334", // Missing amount
  "1700000006, , 1200, card_number, 5556667", // Missing ID
  "1700000007, F56, 2500, card_number, ", // Missing value
  "1700000008, G78, 0, card_number, 9998887", // Amount is zero (boundary case)
  "1700000009, H90, -500, card_number, 7776665", // Negative amount (invalid case)
  " , I23, 6000, card_number, 1119992", // Missing timestamp
  "invalid_data_here", // Completely malformed data
  "1700000010, J55, 3300, card_number, 3332221", // Normal case (for control)
];

printApprovedTransactions(inputData);
