var amount = prompt("Insert the value of your purchase ($):");
var membership = prompt("Insert membership (None, Gold or Platinum?");
// const discount = amount/100;

let result = 0 + amount;

if  (amount =< 100) {
        console.log(result);
        console.log("Your discount is " + result*0.05);
        console.log("Your amount to pay is " + result*0.95);
}   else if (amount =< 200) {
    if (membership = input:"Gold");
        console.log("Your discount is " + result*0.08);
        console.log("Your amount to pay is " + result*0.92);
}   else if (amount =< 300) {
    if (membership = input:"Platinum");
    console.log("Your discount is " + result*0.12);
    console.log("Your amount to pay is " + result*0.88);
}