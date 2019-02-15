/*eslint-env browser*/

/* 01-Larger or smaller? */

/*Create an application that accepts two integers within two separate prompts. Then, display only the larger of the two within the browser window. Don’t forget to handle the fact that the two could be equal.*/

var num1, num2;

num1 = Number(window.prompt("Enter first number: "));

num2= Number(window.prompt("Enter second number: "));

/*
window.document.write("num1 = " + num1 + "<br>");

window.document.write("num2 = " + num2 + "<br>");
*/

if ( num1 >= num2 ) { 
    window.document.write("The larger number is : " + num1)
} else {
    window.document.write("The larger number is : " + num2) 
                          }                         