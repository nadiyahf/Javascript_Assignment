const prompt = require('prompt-sync')({sigint: true});

//Prompt the user to enter a number
const number1 = prompt('Enter the number: ');

//Calculate the square root
const result = Math.sqrt(number1);

if (number1 < 0) {
    console.log("Tidak bisa input bilangan negatif");
}
else if (number1 % 2) {
    console.log("TIdak bisa input bilangan ganjil");
} else {
console.log("The square root of number", number1, "is " + result);
}