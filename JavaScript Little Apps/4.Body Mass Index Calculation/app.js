//  Body Mass Index Calculation

// The formula is BMI = kg/m2

let kilo = Number(prompt("Enter your weight :"));

let height = Number(prompt("Please enter your height in meters :"));

let result = kilo / (height * 2);

if (result < 18.5) {
  console.log("evere thinness " + result);
} else if (result >= 18.5 && result <= 24.9) {
  console.log("Underweight " + result);
} else if (result >= 25 && result <= 29.9) {
  console.log("Normal " + result);
} else if (result >= 30 && result <= 39.9) {
  console.log("Overweight " + result);
} else if (result >= 40) {
  console.log("Obesity " + result);
}
