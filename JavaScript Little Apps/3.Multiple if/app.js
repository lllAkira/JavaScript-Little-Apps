// ----------USING MULTIPLE if STATEMENTS----------

/*
Name and turkish republic id number(trid)

Name : Cannot be left blank
TRID : It should consist of 11 characters
*/

let name = prompt("Enter your name :");
let trid = prompt("Enter your trid :");

// checkIt(name,trid);

// if else : Used where there are two options
// if else if else : Used where there are more than two options
// if if if : Each condition operates as a separate condition

checkIt2(name, trid);

function checkIt(name, trid) {
  if (name != "") {
    if (trid.length == 11) {
      console.log("The name and trid were entered without any problems.");
    } else {
      console.log("Please enter your trid as 11 characters");
    }
  } else {
    console.log("Please do not leave the name field empty!");
  }
}

function checkIt2(name, trid) {
  if (name == "") {
    console.log("Please do not leave the name field empty!");
    return;
  }
  if (trid.length != 11) {
    console.log("Please enter your trid as 11 characters");
    return;
  }
  console.log("The name and trid were entered without any problems.");
}
