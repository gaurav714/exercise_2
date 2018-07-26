//array exercise 1


function is_array(input)
{
  if(!input[0])
    {
      return false;
    }
  else
    return true;
}
console.log(is_array(1234));





//exercise 2

function array_Clone(arr)
{
  return arr.slice(0);
}
console.log(array_Clone([1,2,3,4]));




//exercise 3

var first=function(arr,n)
{
  return arr.slice(0,n);
}
var n=1;
console.log(first([1,2,3,4],n));




//exercise 4

var last =  function(array, n) {
  if (array == null) 
    return void 0;
  if (n == null) 
     return array[array.length - 1];
  return array.slice(Math.max(array.length - n, 0));  
  };

console.log(last([7, 9, 0, -2]));
console.log(last([7, 9, 0, -2],3));
console.log(last([7, 9, 0, -2],6));



//exercise 5

myColor = ["Red", "Green", "White", "Black"];
console.log(myColor.join('+'));



//exercise 6

const num=window.prompt();
const str = num.toString();
const re = [str[0]];

for(i=1 ;i<str.length;i++)
  {
    if((str[i-1]%2==0) && (srt[i]%2==0))
      {
        re.push('-', str[i]);
      }
    else 
      {
        re.push(str[i]);
      }
  }
console.log(re.join(''));





//exercise 7


var a=[9,4,1,6,8,-3,2,7];
var temp;
var i,j;
var n=a.length;

for(j=0;j<n;j++)
  {
    for(i=0;i<n;i++)
      {
        if(a[i]>a[[i+1]])
          {
            temp=a[i+1];
            a[i+1]=a[i];
            a[i]=temp;
          }
      }
  }
console.log("after sort")
for(i=0;i<n;i++)
  {
    console.log(a[i]);
  }




//exercise 8


var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
var max = 1;
var count = 0;
var item;
for (var i=0; i<arr1.length; i++)
{
        for (var j=i; j<arr1.length; j++)
        {
                if (arr1[i] == arr1[j])
                 count++;
                if (max<count)
                {
                  max=count; 
                  item = arr1[i];
                }
        }
        count=0;
}
console.log(item+" ( " +max +" times ) ") ;



//exercise 9



var str="HEllO.hOW are You";
var arr=Array.from(str);
n=arr.length;
var a=[];
var i;
for(i=0;i<n;i++)
  {
    var temp=arr[i];
    if(temp==temp.toUpperCase())
     {
       a[i]=temp.toLowerCase();
     }
    else
      a[i]=temp.toUpperCase();
  }
var b=a.toString();
console.log(b);




//exercise 10




var a=[
  [2,5,8],
  [7,8,3],
  [9,0,1]
];
var n=a.length;
var i;
var a1=a.shift();
console.log("row 0");
console.log(a1);
var a2=a.shift();
console.log("row 1");
console.log(a2);
var a3=a.shift();
console.log("row 2");
console.log(a3);





//exercise 11



var a=[0,1,2,3,4,5];
var n=a.length;
var i;
var sq;
var total=0;
for(i=0;i<n;i++)
  {
    sq=a[i] * a[i];
    total=total+sq;
  }
console.log(total);
  


//exercise 13



var arr=[];
arr.push(10);
arr.push(20);
arr.push(30);
console.log(arr);



//exercise 14



var arr=[10,20,30,10,20,40,50];
n=arr.length;
var i,j;
for(i=0;i<n;i++)
  {
    for(j=i+1;j<n;j++)
      {
        if(arr[i]==arr[j])
          {
            arr[i]=" ";
          }
      }
  }
console.log(arr)




//exercise 15




var color=["blue",'red',"yellow"];
var pos=["st","nd","rd"];
n=color.length;
var pos1,j,pos2,pos3;
var l=color.length;
for(i=0;i<n;i++)
  {
    if(i==0)
      {
        for(j=0;j<l;j++)
          {
            if(pos[j]=="st")
              {
                pos1=pos[j];
              }
          }
         console.log("1"+pos1+" is "+color[i])
       }
    
    if(i==1)
      {
        for(j=0;j<l;j++)
          {
            if(pos[j]=="nd")
              {
                pos2=pos[j];
              }
          }
         console.log("2"+pos2+" is "+color[i])
      }
    if(i==2)
      {
        for(j=0;j<l;j++)
          {
            if(pos[j]=="rd")
              {
                pos3=pos[j];
              }
          }
         console.log("3"+pos3+" is "+color[i])
      }

//exercise 22





function union(arr1, arr2){
  for(var i = 0;i < arr2.length;i++){
    if(arr1.indexOf(arr2[i]) == -1)
      arr1.push(arr2[i]);
  }
  return arr1.sort(function(a, b){return a-b});;
}

console.log(union([1, 2, 3], [100, 2, 1, 10]));




//exercise 24




var a1 = [null, 0,'' , false, undefined];

function fun(arr){
  var a = [], j = 0;
  for(var i = 0;i < arr.length;i++){
    if((a1.indexOf(arr[i]) == -1) && !isNaN(arr[i])){
      a[j] = arr[i];
      j++;
    }
  }
  return a;
}

console.log(fun([NaN, 0, 15, false, -22, '',undefined, 47, null]))



//exercise 25




function swap(arr, x, y){
  var temp = arr[x];
  arr[x] = arr[y];
  arr[y] = temp;
}

function myFunction(arr){
  var l = Object.keys(arr).length;
  for(var i = 0;i < l-1;i++){
    for(var j = 0;j < l-i-1;j++){
      if(arr[j].title > arr[j+1].title)
        swap(arr, j, j+1);
    }
  }
  return arr;
}

var library = [ 
   {
       title:  'The Road Ahead',
       author: 'Bill Gates',
       libraryID: 1254
   },
   {
       title: 'Walter Isaacson',
       author: 'Steve Jobs',
       libraryID: 4264
   },
   {
       title: 'Mockingjay: The Final Book of The Hunger Games',
       author: 'Suzanne Collins',
       libraryID: 3245
   }];

console.log(myFunction(library));



//exercise 26


function sumg(arr, t){
  for(var i = 0;i < arr.length;i++){
    for(var j = i+1;j < arr.length;j++){
      if((arr[i]+arr[j]) == t){
        console.log((i+1)+", "+(j+1));
      }
    }
  }
}

sumg([10,20,10,40,50,60,70], 50);





//exercise 28




function longest_common_starting_substring(s, str){
  if(str.length > s.length){
    if(str.indexOf(s) != -1)
      return s;
  }
  else{
    if(s.indexOf(str) != -1)
      return str;
  }
}

console.log(longest_common_starting_substring('go', 'google'));
console.log(longest_common_starting_substring('SQL', 'SQLInjection'));






//exercise 32



function contains(arr, n) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] == n) {
            return true;
        }
    }
    return false;
}
arr = [2, 5, 9, 6];
console.log(contains(arr, 5));
console.log(contains(arr,1));




//exercise 33


var arr = [1, 3, 6, 3, -5];
console.log(arr);
arr.length = 0;
console.log(arr);






//exercise 35


function random_item(items)
{
  
return items[Math.floor(Math.random()*items.length)];
     
}

var items = [254, 45, 212, 365, 2543];
console.log(random_item(items));







//exercise 37


var a=[];
var i;
function arr(r1,r2)
{
  for(i=0;i<r1;i++)
    {
      a[i]=r2;
     
    }
  console.log(a);
}

arr(2,'hello');
arr(4,'hi');





//exercise 40




var a=[];
var i;
function arr(r1,r2)
{
  var temp=r1;
  for(i=0;i<r2;i++)
    {
      a[i]=temp;
      temp++;
    }
  console.log(a);
}

arr(2,2);
arr(3,6);
arr(-4,6)




//exercise 41



var a=[];
var i;
function arr(r1,r2)
{
  var temp=r1;
  for(i=0;i<(r2-r1);i++)
    {
      a[i]=temp;
      temp++;
    }
  console.log(a);
}

arr(2,7);
arr(3,6);
arr(-4,6)





//exercise 42






var a1=[10,20,30,40,50]
var a2=[30,40,50,60,70]
n1=a1.length;
var flag=1;
var k=0;
n2=a2.length;
var a3=[];
var i,j
for(i=0;i<n1;i++)
  {
    for(j=0;j<n2;j++)
      {
        if(a1[i]==a2[j])
          {
            flag=0;
            break;
          }
      }
    if(flag==1)
      {
        a3[k]=a1[i];
        k++;
      }
  }
console.log(a3);
