//  Unfortunately, This is spaghetti code. I'm just learning javascript.
//  Gas Station

/* 
    1 - Diesel – 39.06 Turkish Liras (~€1.32)
    2 - Petrol 98 – 37.52 Turkish Liras (~€1.27)
    3 - Liquefied petrol gas (LPG) – 16.11 Turkish Liras (~€0.55)

    Information to be received from the incoming customer;
    1 - Fuel Type
    2 - Liters of fuel to be filled
*/

let diesel = 39.06,
  petrol = 37.52,
  lpg = 16.11;
const newLine = "\r\n";

const fuelText =
  "1 - Diesel" +
  newLine +
  "2 - Petrol 98" +
  newLine +
  "3 - LPG" +
  newLine +
  "Select fuel type";

let fuelType = prompt(fuelText);
if (fuelType == "1" || fuelType == "2" || fuelType == "3") {
  let fuelLiter = Number(prompt("Enter fuel liters: "));
  let balance = Number(prompt("Enter your balance: "));

  if (fuelType == "1") {
    // Diesel
    let paymentAmount = diesel * fuelLiter;
    if (paymentAmount < balance) {
      // Your balance is enough
      balance = balance - paymentAmount;
      alert(
        "Refueling successful" + newLine + "Your remaining balance : " + balance
      );
    }
    // Your balance is insufficient
    else {
      alert(
        "Your balance is insufficient" +
          newLine +
          "Amount to be paid : " +
          paymentAmount +
          newLine +
          "Balance : " +
          balance +
          newLine +
          "Missing amount : " +
          (paymentAmount - balance)
      );
    }
  } else if (fuelType == "2") {
    // Petrol 98
    let paymentAmount = petrol * fuelLiter;
    if (paymentAmount < balance) {
      balance = balance - paymentAmount;
      alert(
        "Refueling successful" + newLine + "Your remaining balance : " + balance
      );
    } else {
      alert(
        "Your balance is insufficient" +
          newLine +
          "Amount to be paid : " +
          paymentAmount +
          newLine +
          "Balance : " +
          balance +
          newLine +
          "Missing amout : " +
          (paymentAmount - balance)
      );
    }
  } else if (fuelType == "3") {
    // LPG
    let paymentAmount = lpg * fuelLiter;
    if (paymentAmount < balance) {
      balance = balance - paymentAmount;
      alert(
        "Refueling successful" + newLine + "Your remaining balance : " + balance
      );
    } else {
      alert(
        "Your balance is insufficient" +
          newLine +
          "Amount to be paid : " +
          paymentAmount +
          newLine +
          "Balance : " +
          balance +
          newLine +
          "Missing amount : " +
          (paymentAmount - balance)
      );
    }
  }
} else {
  alert("Please select a valid fuel type!");
}
