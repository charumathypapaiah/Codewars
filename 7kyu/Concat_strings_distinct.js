/* 
Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

Examples:
a = "xyaabbbccccdefww"
b = "xxxxyyyyabklmopq"
longest(a, b) -> "abcdefklmopqwxy"

a = "abcdefghijklmnopqrstuvwxyz"
longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"
*/

//Solution

function longest(s1, s2) {
  // your code
  let s3 = s1.concat(s2).split("").sort();
  let mySet = new Set();
  let longFunc = s3.map((letter) => mySet.add(letter));
  let result = [...mySet].join("");
  return result;
}
