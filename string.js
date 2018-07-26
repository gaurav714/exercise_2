/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Ctrl+R),
 * 2. Inspect to bring up an Object Inspector on the result (Ctrl+I), or,
 * 3. Display to insert the result in a comment after the selection. (Ctrl+L)
 */




//exercise 2
var str= new String("gaurav nautiyal");
var tarr = [];

console.log(str);
tarr= str.split(" ");
console.log(tarr);

//exercise5

abbrev_name = function (str1) {
    var split_names = str1.trim().split(" ");
    return (split_names[0] + " " + split_names[1].charAt(0) + ".");
    
};
console.log(abbrev_name("Gaurav N"));





//exercise 6

var email="gauravnautiyal77@gmail.com";
splitemail= email.split("@");
part1=splitemail[0];
half=part1.length/2;
part1=part1.substring(0,(part1.length-half))
console.log(part1+"....@"+splitemail[1]);


//exercise 7

str1="this is a test statement"
console.log(str1.replace(" ", "-"));


//exercise 10

swapcase = function swapcase(str) {
        return str.replace(/([a-z]+)|([A-Z]+)/g, function(match, chr) {
            return chr ? match.toUpperCase() : match.toLowerCase();
        });
    }
console.log(swapcase('THIS is AN ExAmPLE'));




//exercise 13

var str= "ok@";
var reptimes=5;
if(reptimes>1){
console.log(new Array(reptimes+1).join(str));
}



//exercise 16

text_truncate = function(str, len) {
 var ending='...';  
  if (len == null) {
      len = 100;
    }
      
    if (str.length > length) {
      return str.substring(0, len) + ending;
    } 
    else {
      return str;
    }
  };
console.log(text_truncate('We are doing JS string exercises.'))
console.log(text_truncate('We are doing JS string exercises.',19))
console.log(text_truncate('We are doing JS string exercises.',15,'!!'))



//exercise 18

function count(main_str, sub_str) 
    { var i,c=0;
     var tarr = new Array();
     tarr= main_str.split(" ");

    if (sub_str.length <= 0) 
    {
        return main_str.length + 1;
    }
      for(i=0;i<tarr.length-1;i++)
        {
          if(tarr[i]==sub_str)
            {
              c++;
            }
        }
     return c;
    }
console.log(count("the kk quick kk brown fox jumps kk over the lazy dog", 'kk'));





//exercise 23


function strip(str) {
    return str.replace(/\s+|\s+$/, '');
}

console.log(strip('GG '));
console.log(strip(' GG'));
console.log(strip(' GG '));





//exercise 35

function strip_html_tags(str)
{
   if ((str===null) || (str===''))
       return false;
  else
   str = str.toString();
  return str.replace(/<[^>]*>/g, '');
}

console.log(strip_html_tags('<html>PHP Exercises<p> </p>'));






//exercise 36


var a = 'bac';
var b = 'bab';
if (a < b) { // true
  console.log(a + ' is less than ' + b);
} else if (a > b) {
  console.log(a + ' is greater than ' + b);
} else {
  console.log(a + ' and ' + b + ' are equal.');
}
