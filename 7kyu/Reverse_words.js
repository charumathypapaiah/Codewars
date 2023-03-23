/*
Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

Examples
"This is an example!" ==> "sihT si na !elpmaxe"
"double  spaces"      ==> "elbuod  secaps"
*/
//Solution

function reverseWords(str) {
  // Go for it
  let words = str.split(" ");
  console.log(words);
  let newArr = [];
  for (let i = 0; i < words.length; i++) {
    newArr.push([...words[i]].reverse().join(""));
  }
  return newArr.join(" ");
}
