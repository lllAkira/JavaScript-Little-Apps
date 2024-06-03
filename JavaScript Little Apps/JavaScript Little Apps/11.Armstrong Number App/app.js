// Armstrong Numbers Application
// Armstrong number is a number that is equal to the sum of cubes of its digits.

/*Example : 153 - 370 - 407*/
// 153 = 1*1*1 + 5*5*5 + 3*3*3 = 1 + 125 + 27 = 153

let number = prompt("Please enter a number");
let total = 0;
for (let i = 0; i < number.length; i++) {
  let digit = number.charAt(i);
  total += digit * digit * digit;
}
if (Number(number) == total) {
  alert(number + " is armstrong number");
} else {
  alert(number + " not armstrong number");
}
