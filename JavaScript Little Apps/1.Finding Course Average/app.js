// ----------FINDING COURSE AVERAGE----------

// midterm1 %30, midterm2 %30, final %40

let midterm1 = Number(prompt("Enter your midterm exam 1 grade :"));
let midterm2 = Number(prompt("Enter your midterm exam 2 grade :"));

let final = Number(prompt("Enter your final exam grade:"));

let average = (midterm1*0.3) + (midterm2*0.3) + (final*0.4);

if(average>=60){
    alert("Congratulations!!, you passed the course :)) , Your average is : " + average);
    console.log("Congratulations!!, you passed the course :))");
}
else{
    alert("You failed the course, get well soon :(( , Your average is : " + average);
    console.log("You failed the course, get well soon :(");
}