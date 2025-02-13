// Given a string, return the number of vowel substrings ('a', 'e', 'i', 'o', 'u') that include all five vowels.

function fn(str) {
  let left = 0;
  let right = 0;
  let count = 0;
  if (str.length < 5) return 0;
  while (left < str.length && right < str.length) {
    const substring = str.substring(left, right + 1);
    if (
      substring.includes("a") &&
      substring.includes("e") &&
      substring.includes("i") &&
      substring.includes("o") &&
      substring.includes("u")
    ) {
      count++;
      console.log("[T]", substring);
    }

    if (right < str.length - 1) {
      right++;
    } else {
      left++;
      right = left;
    }
  }
  return count;
}

// console.log("[1]: ", fn("aeiou"));
// console.log("[2]: ", fn("aaeiou"));
// console.log("[3]: ", fn("aeio"));
// console.log("[4]: ", fn("aeiouaeiou"));
// console.log("[5]: ", fn("xyz"));
console.log("[6]: ", fn("aeioubcdeioua"));
// console.log("[7]: ", fn("aeeiioouu"));
// console.log("[8]: ", fn("uaeiouaeiouu"));
