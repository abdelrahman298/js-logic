/* 
////// ?
1- Write a program that allow to user enter number then print it 
    Example 

    Input: 5 
    Output: 5
*/
// ***
// var num = Number(window.prompt("enter your number"));

// console.log(num);

// ----------------------------------------------------------------------------------------

/* 
////// ?
2- Write a program that take number from user then print yes if that number can divide by 3 
and 4 otherwise print no 
Example1 
Input: 12 Output Yes 
Example 2 
Input: 9 Output No
*/
// ***
// var num = Number(window.prompt("enter your number"));
// if (num % 3 === 0 && num % 4 === 0) {
//   console.log("yes");
// } else {
//   console.log("no");
// }

// ----------------------------------------------------------------------------------------

/* 
////// ?
3- Write a program that allows the user to insert 2 integers then print the max 
Example1 
Input: 3 5 
Output: 5 
Example 2 
Input: 10  7 
Output: 10

*/
// ***
// var num1 = Number(window.prompt("enter 1st number"));
// var num2 = Number(window.prompt("enter 2nd number"));

// if (num1 > num2) {
//   console.log("Max number is first number : " + num1);
// } else {
//   console.log("Max number is second number : " + num2);
// }

// ----------------------------------------------------------------------------------------

/* 
////// ?
4- Write a program that allows the user to insert an integer then print negative if it is 
negative number otherwise print positive. 
Example 1 
Input: -5 
Output negative 
Example2 
Input: 10  
Output positive 

*/
// ***
// var num = Number(window.prompt("enter your number"));

// if (num < 0) {
//   console.log("Negative");
// } else if (num > 0) {
//   console.log("positive");
// } else {
//   console.log("zero");
// }

// ----------------------------------------------------------------------------------------

/* 
////// ?
5- Write  a  program  that  take  3  integers  from  user  then  print  the  max  element 
and the min element. 
Example 1 
Input:7,8,5 
Output: 
max element = 8  
min element = 5
 */
// ***
// var num1 = Number(window.prompt("enter 1st"));

// var num2 = Number(window.prompt("enter 2nd"));

// var num3 = Number(window.prompt("enter 3rd"));

// if (num1 > num2) {
//   if (num1 > num3) {
//     console.log("maximum number is 1st number " + num1);

//     if (num2 > num3) {
//       console.log("minimum number is 3rd number " + num3);
//     } else {
//       console.log("minimum number is 2nd number " + num2);
//     }
//   } else {
//     console.log("maximum number is 3rd number " + num3);
//     console.log("minimum number is 2nd number " + num2);
//   }
// } else if (num2 > num1) {
//   if (num2 > num3) {
//     console.log("maximum number is 2nd number " + num2);

//     if (num1 > num3) {
//       console.log("minimum number is  3rd number " + num3);
//     } else {
//       console.log("minimum number is 1st number " + num1);
//     }
//   } else {
//     console.log("maximum number is 3rd number " + num3);
//     console.log("minimum number is 1st number " + num1);
//   }
// } else if (num3 > num1) {
//   if (num3 > num2) {
//     console.log("maximum number is 3rd number " + num3);

//     if (num1 > num2) {
//       console.log("minimum number is  2nd number " + num2);
//     } else {
//       console.log("minimum number is 1st number " + num1);
//     }
//   } else {
//     console.log("maximum number is 2nd number " + num2);
//     console.log("minimum number is 1st number " + num1);
//   }
// }

// ----------------------------------------------------------------------------------------
/* 
////// ?
6- Write a program that allows the user to insert integer number then 
check If a number is oven or odd

*/
// ***
// var num = Number(window.prompt("enter your number"));

// if (num % 2 == 0) {
//   console.log("even");
// } else {
//   console.log("odd");
// }

// ----------------------------------------------------------------------------------------
/* 
////// ?
8- Write a program that take character from user then if it is vowel chars (a,e,I,o,u) 
then print vowel otherwise print consonant 
Example1 
Input: O 
Output: vowel  
Example 2 
Input: b 
Output: 
Consonant 
*/
// ***
// var chara = window.prompt("please,enter your first character");
// var chara2 = chara.toLowerCase();

// if (
//   chara2 == "a" ||
//   chara2 == "e" ||
//   chara2 == "o" ||
//   chara2 == "i" ||
//   chara2 == "u"
// ) {
//   console.log("Vowel");
// } else if (
//   chara2 == "1" ||
//   chara2 == "2" ||
//   chara2 == "3" ||
//   chara2 == "4" ||
//   chara2 == "5" ||
//   chara2 == "6" ||
//   chara2 == "7" ||
//   chara2 == "8" ||
//   chara2 == "9"
// ) {
//   console.log("please insert a character only");
// } else {
//   console.log("Constant");
//   console.log(typeof chara2);
// }

// ----------------------------------------------------------------------------------------
/*  
////// ?
9- Write a program that allows user to insert integer then print all numbers between 1 to 
that’s number 
Example Input 5 
Output 1, 2, 3, 4, 5
*/
// ***
// var num = Number(window.prompt("enter your number"));

// for (var i = 1; i <= num; i++) {
//   console.log(i);
// }

// ----------------------------------------------------------------------------------------
/*
////// ?

10-  Write a program that allows user to insert integer then print a multiplication table up to 12. 
Example 
Input: 5 
Outputs: 
5 10 15 20 25 30 35 40 45 50 55 60 
*/
// ***
// var num = Number(window.prompt("enter your number"));
// for (var i = 1; i < 12; i++) {
//   const result = i * num;

//   console.log(result);
// }

// ----------------------------------------------------------------------------------------
/*
////// ?
11- Write a program that allows to user to insert number then print all even numbers 
between 1 to this number 
Example: 
Input: 15 

Output: 2 4 6 8 10 12 14
*/
// ***
// var num = Number(window.prompt("enter your number"));

// for (var i = 1; i < num; i++) {
//   if (i % 2 == 0) {
//     console.log(i);
//   }
// }

// ----------------------------------------------------------------------------------------
/*
////// ?
12-  Write a program that take two integers then print the power 
Example: 
Input: 4 3 
Output:  64 
Hint how to calculate 4^3 = 4 * 4 * 4 =64
*/
// ***
// var num1 = Number(window.prompt("enter your number1"));
// var num2 = Number(window.prompt("enter your number2"));

// var num3 = num1 ** num2;
// console.log(num3);

// ----------------------------------------------------------------------------------------
/*
////// ?
12- Write a program to enter marks of five subjects and calculate total, average and 
percentage. 
Example 
Input: - Enter Marks of five subjects: 

95 
76 
58 
90 
89 

Output:-.Total marks = 435 
average Marks =87 
Percentage =87
*/
// ***
// var num1 = Number(window.prompt("enter your number1"));
// var num2 = Number(window.prompt("enter your number2"));
// var num3 = Number(window.prompt("enter your number3"));
// var num4 = Number(window.prompt("enter your number4"));
// var num5 = Number(window.prompt("enter your number5"));

// var total = num1 + num2 + num3 + num4 + num5;

// var average = total / 5;

// var percentage = average;

// console.log("total marks :" + total);
// console.log("average marks :" + average);
// console.log("percentage marks :" + percentage + "%");

// ----------------------------------------------------------------------------------------
/*
////// ?
13-Write a program to input month number and print number of days in that 
month. 
Example: 
Input: - Month Number: 1 
Output:-.  Days in Month: 31 
*/

// ***
// var mon = Number(window.prompt("enter your month number"));

// if (
//   mon == 1 ||
//   mon == 3 ||
//   mon == 5 ||
//   mon == 7 ||
//   mon == 8 ||
//   mon == 10 ||
//   mon == 12
// ) {
//   console.log(" Days in Month: 31");
// } else if (mon == 2) {
//   console.log(" Days in Month: 28");
// } else {
//   console.log(" Days in Month: 30");
// }

// ----------------------------------------------------------------------------------------
/*
////// ?
  14- Write a program to input marks of five subjects 
Physics, Chemistry, Biology, Mathematics and Computer 
  , Find percentage and grade  

Percentage >= 90%: Grad A 
Percentage >= 80%: Grad B 
Percentage >= 70%: Grad C 
Percentage >= 60%: Grad D 
Percentage >= 40%: Grad E 
Percentage < 40%: Grad F
*/

// ***
// var phys = Number(window.prompt("enter your number"));
// var chem = Number(window.prompt("enter your number"));
// var bio = Number(window.prompt("enter your number"));
// var math = Number(window.prompt("enter your number"));
// var comp = Number(window.prompt("enter your number"));

// var total = phys + chem + bio + math + comp;

// var average = total / 5;

// var percentage = average;

// if (percentage >= 90) {
//   console.log("Grade A");
//   console.log("percentage marks :" + percentage + "%");
// } else if (percentage >= 80) {
//   console.log("Grade B");
//   console.log("percentage marks :" + percentage + "%");
// } else if (percentage >= 70) {
//   console.log("Grade C");
//   console.log("percentage marks :" + percentage + "%");
// } else if (percentage >= 60) {
//   console.log("Grade D");
//   console.log("percentage marks :" + percentage + "%");
// } else if (percentage >= 40) {
//   console.log("Grade E");
//   console.log("percentage marks :" + percentage + "%");
// } else if (percentage < 40) {
//   console.log("Grade F");
//   console.log("percentage marks :" + percentage + "%");
// }

// ----------------------------------------------------------------------------------------
/*
////// ?
15- Write a program to print total number of days in month
*/

// ***

// var mon = Number(window.prompt("enter your number"));

// var total = 0;

// switch (mon) {
//   case 2:
//     for (let day = 1; day <= 28; day++) {
//       total += day;
//     }
//     console.log(total);
//     break;

//   case 4:
//     for (let day = 1; day <= 30; day++) {
//       total += day;
//     }
//     console.log(total);
//     break;

//   case 6:
//     for (let day = 1; day <= 30; day++) {
//       total += day;
//     }
//     console.log(total);
//     break;

//   case 9:
//     for (let day = 1; day <= 30; day++) {
//       total += day;
//     }
//     console.log(total);
//     break;

//   case 11:
//     for (let day = 1; day <= 30; day++) {
//       total += day;
//     }
//     console.log(total);
//     break;

//   case 1:
//   case 3:
//   case 5:
//   case 7:
//   case 10:
//   case 12:
//     for (let day = 1; day <= 31; day++) {
//       total += day;
//     }
//     console.log(total);
//     break;

//   default:
//     console.log("please add a number of month from 1 to 12 ");
// }

// ----------------------------------------------------------------------------------------
/*
////// ?
16- Write a program to check whether an alphabet is vowel or consonant 
*/

// ***

// var chara = window.prompt("enter your alphabet");
// var chara2 = chara.toLowerCase();
// switch (chara2) {
//   case "a":
//   case "e":
//   case "i":
//   case "o":
//   case "u":
//     console.log("Vowels");
//     break;
//   default:
//     console.log("Constant");
// }

// ----------------------------------------------------------------------------------------
/*
////// ?
17- Write a program to find maximum between two numbers?
*/

// ***

// var num1 = Number(window.prompt("enter your first number"));
// var num2 = Number(window.prompt("enter your second number"));

// switch (true) {
//   case num1 > num2:
//     console.log("first number is maximum = " + num1);
//     break;
//   case num2 > num1:
//     console.log("second number is maximum = " + num2);
//     break;

//   default:
//     console.log("Numbers are equal");
// }

// ----------------------------------------------------------------------------------------
/*
////// ?
18- Write a program to check whether a number is even or odd
*/

// ***
// var num = Number(window.prompt("enter your number"));

// switch (true) {
//   case num % 2 == 0:
//     console.log("Even");
//     break;
//   default:
//     console.log("Odd");
// }

// ----------------------------------------------------------------------------------------
/*
////// ?
19- Write a program to check whether a number is positive or negative or zero?
*/

// ***
// var num = Number(window.prompt("enter your number"));

// switch (true) {
//   case num > 0:
//     console.log("Positive");
//     break;
//   case num < 0:
//     console.log("Negative");
//     break;
//   default:
//     console.log("Equal zero");
// }

// ----------------------------------------------------------------------------------------
/*
////// ?
20- Write a program to create Simple Calculator?
*/

// ***
// var num1 = window.prompt("enter your first number");
// var num2 = window.prompt("enter your second number");

// if (typeof num1 == "number" && typeof num2 == "number") {
//   var operation = window.prompt("Enter the operation (+, -, *, /)");

//   switch (operation) {
//     case "+":
//       console.log(num1 + num2);
//       break;
//     case "-":
//       console.log(num1 - num2);
//       break;
//     case "*":
//       console.log(num1 * num2);
//       break;
//     default:
//       console.log(num1 / num2);
//   }
// } else if (typeof num1 != "number" && typeof num2 != "number") {
//   console.log("Please enter your numbers correctly ");
// }
