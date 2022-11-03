// 9. Define a function, as a function declaration, stringsLongerThan that takes an array of strings and a number as arguments; and returns an array of the strings that are longer than the number passed in. For example, stringsLongerThan(['say', 'hello', 'in', 'the', 'morning'], 3);would return ["hello", "morning"].

// Method 1:

function stringsLongerThan(array, num) {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i].length > num) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}

console.log(stringsLongerThan(["dad", "mom", "sister", "husband"], 9));
console.log(stringsLongerThan(["say", "hello", "in", "the", "morning"], 3));

// Method 2: use of Array.filter method

// function stringsLongerThan(array, num) {
//   let newArray = array.filter((word) => word.length > num);
//   return newArray;
// }

// console.log(stringsLongerThan(["say", "hello", "in", "the", "morning"], 3));
