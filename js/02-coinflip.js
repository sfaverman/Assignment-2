/*eslint-env browser*/

var coinFlip, choice, flag;

coinFlip = Math.floor(Math.random() * 11);   // returns a random                                          integer from 0 to 10 ;

flag = 0;

do {
choice = window.prompt("Select Head (H) or Tail (T)");

if (choice !== "H" && choice !== "T") {
    window.alert("Please make a valid selection");
} else {
    flag = 1;
} 
    
} while( flag === 0);
    

// if result less than 5 - it will be heads
// if result is 5 or more  - it will be tail

if (coinFlip < 5 && choice == "H") {
    window.alert("The flip was heads (" + coinFlip + ") and you choose heads ... you win!")
} else if (coinFlip < 5 && choice == "T") {
    window.alert("The flip was heads  (" + coinFlip + ")and you choose tails ... you lose!")
 } else if (coinFlip >= 5 && choice == "H") {
    window.alert("The flip was tails (" + coinFlip + ") and you choose heads ... you lose!") 
 } else if (coinFlip >= 5 && choice == "T") {
    window.alert("The flip was tails (" + coinFlip + ") and you choose tails ... you win!")
 }
     