// Given a list of inputs which are strings of words separated by commas, print specific words from the input in a given format. e.g. String input could be a list of strings that look like this: "1, A1, 5000, card_number, 1234567" The words represent the timestamp, ID, amount, type, and value respectively. For each string input, print the info in this format: "ID amount APPROVED". You can assume everything is approved for now. Print the info in chronological order according to their timestamps.

function printApprovedTransactions(dataset = []) {
  const parsedDataset = dataset.map((str) => str.split(", "));
  for (const [timestamp, id, amount, cardNumber, value] of parsedDataset) {
    console.log(`${id} ${amount} APPROVED`);
  }
  return;
}

const inputData = [
  "1700000001, A12, 3000, card_number, 9876543",
  "1700000003, B45, 1500, card_number, 1231231",
  "1700000002, C78, 5000, card_number, 6543210",
  "1700000004, D90, 750, card_number, 1112223",
];
printApprovedTransactions(inputData);
