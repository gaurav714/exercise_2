/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Ctrl+R),
 * 2. Inspect to bring up an Object Inspector on the result (Ctrl+I), or,
 * 3. Display to insert the result in a comment after the selection. (Ctrl+L)
 */


//exercise 2

function cre(input){
var re = /^(\d\d\d\d-){3}\d\d\d\d$/;
return result = re.test(input);
}
console.log(cre("9999-1234-1234-1234"));


//exercise 3

function ex3(email){
var mail = /www.\w+@[a-z A-Z_]+?\.[a-z A-Z]{2,3}$/;
var res = mail.test(email);
return res;
}
console.log(ex3("www.gauravnautiyal77@gmail.in"));


//exercise 4


function is_date(is_dateString){
var date =/\b[0-9]{1,2}\/[0-9]{1,2}\/\d{1,4}\b/;
var res = date.test(is_dateString);
return res;
}
console.log(is_date("hello albert 01/01/2015"));




//exercise 8


function vowelCount(str){
var total = 0;
var re = /[aeiouAEIOU]/;

for(var c in str){
if(re.test(str[c])){
total++;
}
}
return total
}
console.log(vowelCount("welcome to The United States"));
console.log(vowelCount("welcome"));




//exercise 9



function validurl(str)
{
var re = /www.\w+\.com$/;

return re.test(str);
}
console.log(validurl("www.google.com"));






//exercise 20



function findl(str)
{
var re = (/[\d\w-_]/g);

return re.test(str);
}
console.log(find("www"));



