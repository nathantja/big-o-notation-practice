/*
Step One: Simplifying Expressions»
Simplify the following big O expressions as much as possible:

O(n + 10)
O(100 × n)
O(25)
O(n2 + n3)
O(n + n + n + n)
O(1000 × log(n) + n)
O(1000 × n × log(n) + n)
O(2n + n2)
O(5 + 3 + 1)

*/
Step One
1. O(n)
2. O(n)
3. O(1)
4. O(n**3)
5. O(n)
6. O(n)
7. O(n log(n))
8. O(2**n)
9. O(1)



Step Two

function logUpTo(n) {
  for (let i = 1; i <= n; i++) {
    console.log(i);
  }
}
1. O(n) - linear time



function logAtLeast10(n) {
  for (let i = 1; i <= Math.max(n, 10); i++) {
    console.log(i);
  }
}
2. O(n) - linear time



function logAtMost10(n) {
  for (let i = 1; i <= Math.min(n, 10); i++) {
    console.log(i);
  }
}
3. O(1) - constant time



function onlyNumsAtEvenIndexes(nums) {
  let numsAtEvens = [];

  for (let i = 0; i < nums.length; i++) {
    if (i % 2 === 0) {
      numsAtEvens.push(nums[i]);
    }
  }

  return numsAtEvens;
}
4. O(n) - linear time


function runningSubtotals(nums) {
  let subtotals = [];

  for (let i = 0; i < nums.length; i++) {
    let subtotal = 0;
    for (let j = 0; j <= i; j++) {
      subtotal += nums[j];
    }
    subtotals.push(subtotal);
  }

  return subtotals;
}
5. O(n**2) - quadratic time



const VOWELS = "aeiouAEIOU";

function vowelsCounts(word) {
  let vowelsToCounts = {};

  for (let char of word) {
    if (VOWELS.includes(char)) {
      if (char in vowelsToCounts) {
        vowelsToCounts[char] += 1;
      } else {
        vowelsToCounts[char] = 1;
      }
    }
  }

  return vowelsToCounts;
}
6. O(n) - linear time



Step Three
Answer the following questions

1. True or false: n2 + n is O(n2).
TRUE


2. True or false: n2 * n is O(n^3).
TRUE

3. True or false: n2 + n is O(n).
FALSE

4. What’s the time complexity of the .indexOf array method?
O(n) - linear time

5. What’s the time complexity of the .includes array method?
O(n) - linear time

6. What’s the time complexity of the .every array method?
O(n) - linear time

7. What’s the time complexity of the .sort array method?
O(n) - linear time

8. What’s the time complexity of the .unshift array method?
O(1) - constant time

9. What’s the time complexity of the .push array method?
O(1) - constant time

10. What’s the time complexity of the .pop array method?
O(1) - constant time

11. What’s the time complexity of the Object.keys() function?
O(n) - linear time

