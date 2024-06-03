/*
  ?QUESTIONS
  1-Turkish 40    -4 scor...
  2-Math 40
  3-Social 20
  4-Science 20

  ---->Raw score 100
  ---->School score maximum 60
*/

let turkishCorrect,
  turkishIncorrect = 0;
let matCorrect,
  matIncorrect = 0;
let socialCorrect,
  socialIncorrect = 0;
let scienceCorrect,
  scienceIncorrect = 0;
let schoolScore = 0;

let newLine = "\r\n";
let message =
  "Welcome to TYT Score Calculation App!" +
  newLine +
  "1-Score Calculation" +
  newLine +
  "2-Exit";
// alert(message);

let selection = prompt(message);

switch (selection) {
  case "1":
    schoolScore = Number(prompt("Enter your school score"));
    turkishCorrect = Number(prompt("Number of correct question in Turkish"));
    turkishIncorrect = Number(prompt("Number of incorrect question in Turkish"));

    matCorrect = Number(prompt("Number of correct question in Math"));
    matIncorrect = Number(prompt("Number of incorrect question in Math"));

    socialCorrect = Number(prompt("Number of correct queation in Social"));
    socialIncorrect = Number(prompt("Number of incorrect question in Social"));

    scienceCorrect = Number(prompt("Number of correct question in Science"));
    scienceIncorrect = Number(prompt("Number of incorrect question in Science"));

    //30 8/4= 2 incorrect
    let CorrectCount = turkishCorrect+matCorrect+socialCorrect+scienceCorrect;
    let incorrectCount = turkishIncorrect+matIncorrect+socialIncorrect+scienceIncorrect;
    let remainingCorrectCount = CorrectCount-(incorrectCount/4);
    score = (remainingCorrectCount*4) + 100 + schoolScore;
    alert("Your TYT Score : "+score);
    break;
  case "2":
    alert("Exited the application");
    break;
  default:
    alert("Please enter a value within the valid range!")
    break;
}
