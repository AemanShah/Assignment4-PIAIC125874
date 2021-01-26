var age = Number(prompt("Enter your age "));
document.write("Your age is "+age);
var currentDate = new Date();
var currentYear = currentDate.getFullYear();
document.write("<br>Your birth year is "+(currentYear-age));