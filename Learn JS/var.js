// let name = ("himesu");
// let age = (19)
// console.log(name, age);



// let a = prompt();
// console.log(a)


//0>positive.   0=zero.    0<negative.

// var num = Number(require("readline-sync").question("Enter a no.: "));

// if (num>0) {
//     console.log("positive")
// }
// else if (num<0) {
//     console.log("negative")
// }
// else{
//     console.log("zero")
// }




// var num = Number(require("readline-sync").question("Enter a no.: "));

// if (num%2==0) {
//     console.log("even")
// }
// else if (num<0) {
//      console.log("negative")
// // }
// else{
//     console.log("odd")
// }



// var a = Number(require("readline-sync").question("Username: "));
// var b = Number(require("readline-sync").question("Password: "));


// if (a>b) {
//     console.log(a)
// }
// else {
//     console.log(b)
// }


// let a = 5;
// let n = a++ + ++a

// console.log(a)
// console.log(n)


// let likes = 100;

// function likepost() {
//     return likes++;
// }
// console.log(likepost());
// console.log(likes);


// let a = !!"";
// console.log(a);


// let b = !!"HI";
// console.log(b);


// let c = !!0;
// console.log(c);


// let d = !!1;
// console.log(d);



// switch (4) {
//     case 1:
//         console.log("hi")
//         break
//     case 2:
//         console.log("how")
//         break
//     case 3:
//         console.log("are")
//         break
//     case 4:
//         console.log("you?")
//         break
//     default:
// }




// function getval(val){
//     if (val<25) return 'A';
//     else if (val<50) return 'B';
//     else if (val<75) return 'C';
//     else return 'D';
// }

// console.log(getval(99))



// function getGrade(score) {
//     if (score >= 90 && score <= 100)  return 'A+';
//     else if (score >= 80 && score <= 89) return 'A';
//     else if (score >= 70 && score <= 79) return 'B';
//     else if (score >= 60 && score <= 69) return 'C';
//     else if (score >= 33 && score <= 59) return 'D';
//     else if (score >= 0 && score <= 32) return 'FAIL';
//     else return 'Invalid marks';
// }

// console.log(getGrade(78));



// for (let i = 1; i<= 10; i++) {
//     console.log(`2 X ${i} = ${2 * i}`);
// }

// let i = 1;
// while(i<11){
//     console.log(i*2)
//     i++;
// }


// let i = 1;
// do {
//     console.log(i*2)
//     i++
// }
// while(i<11)



// for (let i = 1; i<11; i++) {
//     console.log(`series ${i}`);
// };



// let i = 10;
// while(i>0){
//     console.log(i);
//     i--
// }



// for(let i = 1; i<21; i++){
//     if (i%2 === 0){
//         console.log(i)
//     }
// }



// let i = 1;
// while(i<16){
//     if (i%2 !== 0){
//         console.log(i)
//     }
//     i++
// }




// for(let i = 1; i<11; i++) {
//     console.log(`5 X ${i} = ${5*i}`)
// }



// let b = 0;
// for(let i = 1; i<101; i++){
//     b = b+i
    
// }
// console.log(b)



// for(let i=1; i<51; i++){
//     if(i%3 === 0){
//         console.log(i)
//     }
// }


// let a = prompt("Give a number");

// for ( let i = 1; i <= a; i++) {
//     if (i % 2 === 0) {
//         console.log(`${i} is a even no.`)
//     } else {
//         console.log(`${i} is a odd no.`)
//     }
// }


// for (let i = 1; i <= 101; i++) {
//     if (i %3 === 0 && i% 5 === 0) {
//         console.log(`${i} is divisible by both 3 & 5`)
//     }
// }


// for (let i = 1; i <= 100; i++) {
    
//     if (i % 7 === 0) {
//         break;
//     }
//     console.log(i);

// }


// function lolo (v1) {
//     console.log(`${v1} is earning well.`)
// }

// lolo("Himesh and kanchi")


// function add (v1, v2) {
//     console.log(v1 + v2)
// }

// add(2, 3)


// function abcd(...val) {
//     console.log(val);
// }

// abcd(1,2,3,4,5,6,7)


// function add(v) {
//     return 20 + v;
// }

// let val = add(30);
// console.log(val);


// function getscore(...score) {
//     let total = 0;
//     score.forEach(function(val) {
//         total = total + val;
//     })
//     return total;
// }
// console.log(getscore(10, 12, 100, 123));

// function checkage(age) {
//     if (age < 18) {
//        return "too young"
//     }  return "alowed"
// }

// console.log(checkage(-98));


// To write a BMI calculator:-


// 
// function bmi (weight, height){
//     return weight / (height * height)
// }



// let a = bmi (68, 1.75);

// console.log(a.toFixed(0))

// if (a >= 21) {
//     console.log("Overweight")
// } else if (a <= 23) {
//     console.log("Underweight")
// } else {
//     console.log("Healthy")
// }

// Higher order function (HOF)

// function discountCalculator(discount) {
//     return function(price) {
//          return price - price * (discount / 100);
//     }
// }

// let a = discountCalculator(10);
// console.log(a(100));


// let arr = [2, 3, 4, 5, 657, 88];

// arr.push(45678);

// arr.pop();

// arr.shift();

// arr.unshift(100);

// arr.splice(3, 1);

// arr.reverse();

// let x = arr.sort(function(a, b) {
//     return b-a;
// })

// let x = arr.forEach(function(val){
//     return val+5;
// })

// console.log(newarr = arr.slice(0, 2));
// console.log(arr);
// console.log(x);

// let arr = [1,54,23,99,5];

// let [ , a, , b] = arr;
// console.log(a)


// let a = arr.forEach(function(val){
//     console.log(val+5);
// })

// let newarr = arr.map(function(val){
//     return 69;
// })
// console.log(newarr);

// let x = arr.filter(function(val){
//     if (val > 10) {
//         return true;
//     }
// })

// console.log(x) 


// let a = arr.reduce(function(val1, val2){
//     return val1 + val2;
// }, 0);
//  console.log(a);

// let a = arr.find(function(val){
//     return val === 23;
// })

// console.log(a);

// let arr = [8, null, 56, null, 345, 83, null, 99, 43234, null, 54];

// for(let i = 1; i < arr.length; i++) {
//     if (arr[i] != null) {
//         console.log(arr[i]);
//     }
// }

// let sum = 0;
// let count = 0;

// for(let i = 0; i<arr.length; i++){
//     if (arr[i] != null) {
//         sum+=arr[i];
//         count++;
//     }

// }
// console.log(sum / count);
// // (average);
// let count = 0;
// let oddcount = 0;
// for (let i = 0; i<arr.length; i++) {
//     if (arr[i] != null && arr[i] % 2 == 0) {
//         count++;
//     } else {
//         oddcount++;
//     }
    
// }
// console.log(count);
// console.log(oddcount);

// let max = null;
// for (let i = 0; i<arr.length; i++) {
//     if (arr[i] != null && (max == null || arr[i] > max)) {
//         max = arr[i];
//     }
// }
// console.log(max);

// let min = null;
// for (let i = 0; i<arr.length; i++) {
//     if (arr[i] != null && (min == null || arr[i] < min)) {
//         min = arr[i];
//     }
// }
// console.log(min);

// let arr = [10, 20, 30, 40, 50];

// let sum = 0;

// for (let i = 0; i < arr.length; i++) {
//     sum+=arr[i];
//     console.log(sum);
// }
// console.log("Total sum: " + sum);

// let sum = 0;
// let count = 0;
// for (let i = 0; i < arr.length; i++) {
//     sum = sum + arr[i];
//     count++;
// }
// console.log(sum / count);

// let max = 0;
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > max) {
//         max = arr[i];
//     }
// }
// console.log(max);

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 98];

// let evenNum = 0;
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 === 1) {
        
        
        
//     } else{
//         evenNum++;
//     }
// }
// console.log("Total even number are : "+ evenNum);


// let arr = [10, 20, 30, 40, 50];

// let index = 0;

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] == 40) {
//         console.log(i);
//     }
// }


// let arr = [-2, 5, 0, -7, 8, 0, 3];

// let positiveCount = 0;

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] < 0) {

//     } else {
//         positiveCount++;
//     }
// }
// console.log(positiveCount);

let arr = [10, 20, 30, 40, 50];

for (let i = 0; i < arr.length; i++) {
    
}