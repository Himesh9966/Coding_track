
// Airthmatic operations:- \\
---------------------------
+(plus), -(minus), /(devide), *(multiply), %(modules), **(for the power)


// Comparison:-\\
---------------
 <
 >
 <=
 >=
 ==
 ===
 !=


// Logiocal Operator \\
-----------------------
 && || !

// &&:-
 true && false = false
 false && true = false
 true && true = true
 false && false = false

// ||:-
 true || false = true
 false || true = true
 true || true = true
 false || false = false 


// ternary operstors:-\\
-------------------------
 ?:

 12 > 13  ?  console.log("ture")  :  console.log("false")

it will return "false"






//** Control flow **\\
-----------------------
if, else, else-if, switch-case, early return pattern





                
//** Loops **\\
----------------
for, while, do-while
break, continue
for-of, forEach for arrays
for-in, Object.entries for objects


1) for loop:-
 
 for (start; end; change){
    cosole.log()
 }


 
 
 2) while loop:-
 
 start
 while(end){
    //code
    change
 }



 3) do-while loop:-

 do{

 }
 while(end)



 4) break:-
 Can stop the loop in between if needed.

 for(start; end; change){
   console.log();
   if(){
      break;
     -------- 
   }
 }



5) continue:-
will only skip to print the only specific condition and then continue the remaining code.

for(start; end; change){
   if(){
      continue;
     ----------- 
   }
   console.log();
}



//** Have to take the input from the user **\\
----------------------------------------------

1) Form "prompt()" we take the input from the user.
2) Always save it in the variable.


//** Functions **\\
-------------------

1) When we write a code and we dont want that code will run directly after written, then comes the function a a switch button only when pressed the code inside it will run otherwise it will not.
2) The function is created :-
                        function lolo() {
                           // code here
                        }
3) The calling back the function :-
                        lolo();
- the code under the function will now run.

4) First class functions = funtions ko value ki trh treat krr skte hai.

5) Higher order function = aisa function jo return krre ek function ya fir jo accept krre ek function.
function a(val) {

}
a(function () {
   
})

6) Pure function = aisa function jo bahar ki value ko na badle.

7) Impure function = aisa function jo bahar ki value ko badle.
example of both:- 
let a = 120;
                        
function kanchi() {.                (this is pure function, because no impect on the "a")
   console.log("YOOOOOOOOO!!!!!!");  
}

function himesh() {
   a++;                             (this is impure function, because a will move 1 step ahead.)
}


8) Clousers = ek function jo return krre ek or function or new wo use krre parent function ka koi variable.
example:- 
funtion hi() {
   let a = 11;
   return function() {
      console.log(a);
   }
}




//** Array **\\
----------------

1) creating an array:-
                        
let arr = []   

2) Array methods:-

a) push = to add someting new in array. == arr.push("anything to add").
b) pop = removing the last's first value. == arr.pop(). 
c) shift = remove value from the front. == arr.shift().
d) unshift = add value in the starting. == arr.unshift("anything to add").
e) splice = remove value from the middle. == arr.splice("kaha se value hatani hai", "kitni value hatani hai").
f) slice = gives the copy of the arr. == arr.slice("kaha se value chahiye", "kaha tak value chahiye").
g) reverse = reverses the array. == arr.reverse().
h) sort = it always returns a function, in the fiunction always to values, if a-b assending order, b-a dessending order. == let x = arr.sort(function(a, b) {
   return a-b;
})
i) forEach = it always returns a function, plays for every value in the array. == arr.forEach(function(val){
   console.log("the thing you want to do");
})
j) map = map srf tab youse karna hai jab aapko ek naya array banana hai pichhle array ke data ke basis par. == arr.map(function(val){
   return "the thing you want to return on the place of the old array."
})
k) filter = will return function. Return the value which is in val, if true then return the val from old arr same opposite will in the false. == arr.filter(function(val){
   return true/false;
})
l) reduce = 1 bdde array ko redusce krr dena ek single value me. == arr.reduce(function(val1, val2){
   return val1 + val2;
}, 0);
m) find = return the val which suites our condition. == arr.find(function(val){
   return val === "the value which we are finding";
});

3) Array operators:

a) destructureing = when we take some values out of the array sand sssing them a variable. == 
let arr = [1, 2, 3, 4, 5];
let [a, b] = arr;

b) spreading = when we want to copy array in another 

