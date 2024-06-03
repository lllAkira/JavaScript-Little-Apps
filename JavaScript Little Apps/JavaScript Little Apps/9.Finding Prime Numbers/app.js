// Finding Prime Numbers Application  w/for

/*
    Prime numbers are natural numbers the are divisible by only 1 and the number itself
    Example : ,2,3,5,7...
    15 = 2,3,4,5,6,7
*/

// let a = Math.floor(7.9);
// console.log(a);

// 15
let number = Number(prompt("Please enter a number :"));
let result = true;
for (let i = 2; i <= Math.floor(number / 2); i++) {
  if (number % i == 0) {
    // Non-Prime
    result = false;
    break;
  }
}
if (result) {
  alert(number + " Prime Number");
} else {
  alert(number + " Non-Prime!");
}
