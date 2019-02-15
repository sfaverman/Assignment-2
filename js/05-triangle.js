/*eslint-env browser*/

/*
Looping a Triangle (5 points)
Write a loop that displays the following triangle within a console window:
#
##
###
####
#####
######
#######
*/

var i;
var triangle = "";

for (i = 0; i < 7; i += 1) {
    triangle = triangle + "#";
    window.document.write(triangle+"<br>");
}

