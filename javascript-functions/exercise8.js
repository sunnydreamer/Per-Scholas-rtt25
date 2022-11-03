// 8. Define a function, as a function expression, longestStringInArray that takes an array of strings as an argument and returns the length of the longest string.

const longestStringInArray = (array) => {
  let longestLength = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i].length > longestLength) {
      longestLength = array[i].length;
    }
  }
  console.log(longestLength);
};

longestStringInArray(["apple", "banana", "cat", "potato"]);
