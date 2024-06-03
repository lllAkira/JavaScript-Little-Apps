// ATM Application with switch case

/*
1 - Balance View
2 - Withdraw Money
3 - Deposit Money
4 - Exit
 */

let newLine = "\r\n";
let balance = 1000;

let text =
  "1 - Balance View" +
  newLine +
  "2 - Withdraw Money" +
  newLine +
  "3 - Deposit Money" +
  newLine +
  "4 - Exit" +
  newLine +
  "Please select a value ";

// alert(text);

let select = prompt(text);
switch (select) {
  case "1":
    alert("Your balance : " + balance);
    break;
  case "2":
    let withdrawalAmount = Number(
      prompt("Enter the amount you want to withdraw :")
    );
    //successful
    if (withdrawalAmount < balance) {
      balance = balance - withdrawalAmount;
      alert("Your Remaining Balance :" + balance);
    } else {
      alert(
        "You cannot withdraw more than your balance!" +
          newLine +
          "Your balance : " +
          balance +
          " " +
          "Amount to be withdrawn : " +
          withdrawalAmount
      );
    }
    break;
  case "3":
    let depositMoney = Number(prompt("Enter the amount to deposit :"));
    balance = balance + depositMoney;
    alert("Your current balance : " + balance);
    break;
  case "4":
    alert("The system has been logged out.");
    break;
  default:
    alert("Please enter a value between 1 - 4 !");
    break;
}
