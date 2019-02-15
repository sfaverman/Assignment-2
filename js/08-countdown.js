/*eslint-env browser*/

/*
Countdown 

Write an application that counts down to 0 based on the number that a user passes into a prompt. If the number is 10, it should count down from 10 to 0. If the number is 100, it should count down from 100 to 0 and so on.  

*/

var numb;

numb = Number(window.prompt("Please enter number between 1 and 100"));

while ( numb < 1 || numb > 100 ) {
      numb = window.prompt("Please enter number within range: 1 - 100");
      }

var i;

for (i = numb; i >= 0; i -= 1) {
    
        window.document.write(i + "<br>");
        
} // enf for loop