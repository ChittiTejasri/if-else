                            // if-statement
// 1.check whether a given number is positive .
let n = 10;
if (n > 0){
    console.log("n is positive");
}

// 2.check if a person is eligible to vote.
let age = 20;
if (age >= 18){
    console.log("Eligibel to vote");
}

// 3.check if a student passed in examination.
let marks = 72;
if (marks >= 50){
    console.log("Student is passed in Examination");
}

// 4.check if a number is a three-digit number.
let num = 456;
if (num >= 100 & num <= 999){
    console.log("It is a three digit number");
}

// 5.check if a year is leap year.
let year = 2024;
if ((year % 400 === 0) || (year % 4 === 0 && year % 100 !== 0)) {
    console.log("It is a leap year");
}

// 6.check whether a given character is vowel or not.
let ch = "e";
if(ch === "a" || ch === "e" || ch === "i" || ch === "o" || ch === "u") {
    console.log("The character is an Vowel")
}