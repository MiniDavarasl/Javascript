var height = prompt("Insert your height (cm):");
var weight = prompt("Insert your weight (kg):");

height = height/100;
const formula = weight/(height*height);

let result = "Your BMI " + formula; 

if (formula < 18.5) {
        console.log(result);
        console.log("You are underweight");
}   else if (formula >= 18.5 && formula < 25) {
        console.log(result);
        console.log("You have normal weight");
}   else if (formula >= 25 && formula < 30) {
        console.log(result);
        console.log("You are overweight");
}   else if (formula >= 30) {
        console.log(result);
        console.log("You are obese");

}
