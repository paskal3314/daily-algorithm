// Find the best time to shut down a machine given a string of server-statuses "1 0 1 0 0 1" and a time that the server was taken offline (where 0 = running, 1 = offline)

const RUNNING = "0";
const OFFLINE = "1";

function findBestTimeToShutdown(inputStr = "") {
  const parsedStr = inputStr.split(" ");
  let maxShutdown = 0;
  let index = -1;
  let stack = 0;
  let tempIndex = -1;
  for (let i = 0; i < parsedStr.length; i++) {
    const status = parsedStr[i];
    if (status === RUNNING) {
      if (maxShutdown < stack) {
        maxShutdown = stack;
        index = tempIndex;
      }
      stack = 0;
    } else {
      if (stack === 0) {
        tempIndex = i;
      }
      stack++;
      if (i === parsedStr.length - 1) {
        if (maxShutdown < stack) {
          maxShutdown = stack;
          index = tempIndex;
        }
      }
    }
  }
  return index;
}

const inputData = "1 0 1 0 0 1 0 0 0 0 1 1 1 1 1 1 0 0 0 0 0 0 0 1 0 1 0 1 0 1 1 0 0 0 1 0";
const result = findBestTimeToShutdown(inputData);

console.log("[T]", result);
