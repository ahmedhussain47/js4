// Q1
var city= prompt("Enter Your City :)");
if(city == "karachi" || "Karachi" || "KARACHI")
{
    alert("Welcome to city of Ligths")
}
// Q2
var gen= prompt("Enter Your Gender");
if(gen == "male")
{
    alert("Good Morning Sir:)")
}
if(gen == "female")
{
    alert("Good Morning Ma'am:)")
}
// Q3
var tLigths= prompt("Enter Color of traffic signal");
if(tLigths == "red")
{
    alert("Must Stop")
}
else if(tLigths == "green")
{
    alert("Move now")
}
else if(tLigths == "yellow")
{
    alert("Ready to move")
}
else
{
    alert("Invalid input")
}
// Q4
var fuel= +prompt("Enter current fuel level (in ltr only)");
if(fuel == 0.25)
{
    alert("Please refill the fuel in your car")
}
else
{
    alert("You've enough fuel")
}
// // Q5
//  var a = 4;
// if (++a === 5){
// alert("given condition for variable a is true");
// }

//  var b = 82;
// if (b++ === 83){
// alert("given condition for variable b is true");
// }
//  var c = 12;
// if (c++ === 13){
// alert("condition 1 is true");
// }
// if (c === 13){
// alert("condition 2 is true");
// }
// if (++c < 14){
// alert("condition 3 is true");
// }
// if(c === 14){
// alert("condition 4 is true");
// }
// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
// alert("The cost equals");
// }
// if (true){
// alert("True");
// }
// if (false){
// alert("False");
// }

// if("car" < "cat")
// {
// alert("car is smaller than cat");
// }

// Q6
// var mrk= +prompt("Enter Your Marks");
// var total = (mrk * 100) / 300
// document.write("<h1>"+"Report"+"</h1>"+"<br>")

// if(total >= 80)
// {
//     document.write("Grade: A-One"+"<br>")
//     document.write("Total Marks: 300"+"<br>")
//     document.write("Obtained: "+mrk+"<br>")
//     document.write(total+"%"+"<br>")
//     document.write("Excellent")
// }
// else if(total >= 70)
// {
   
//     document.write("Grade: A"+"<br>")
//     document.write("Total Marks: 300"+"<br>")
//     document.write("Obtained: "+mrk+"<br>")
//     document.write(total+"%"+"<br>")
//     document.write("Good")

// }
// else if(total >= 60)
// {
//     document.write("Grade: B"+"<br>")
//     document.write("Total Marks: 300"+"<br>")
//     document.write("Obtained: "+mrk+"<br>")
//     document.write(total+"%"+"<br>")
//     document.write("Improve yourself")
// }
// else
// {    document.write("Total Marks: 300"+"<br>")
//     document.write("Obtained: "+mrk+"<br>")
//     document.write(total+"%"+"<br>")
//     document.write("You're fail")

// }
//Q
// var number = +prompt("Enter a number: ");

// //check if the number is even

// if(number % 2 == 0) {

// alert("The number is even.");

// }

// // if the number is odd

// else {

// alert("The number is odd.");

// }

// Q

// program for a simple calculator

// take the operator input
// var operator = prompt('Enter operator ( either +, -, * or / ): ');

// // take the operand input
// var number1 = +prompt('Enter first number: ');
// var number2 = +prompt('Enter second number: ');

// let result;

// // using if...else if... else
// if (operator == '+') {
//     result = number1 + number2;
// }
// else if (operator == '-') {
//     result = number1 - number2;
// }
// else if (operator == '*') {
//     result = number1 * number2;
// }
// else {
//     result = number1 / number2;
// }

// // display the result
// alert(`${number1} ${operator} ${number2} = ${result}`);


// CHAPTER 12 - 13

// var charCheck = prompt('Enter operator a letter');

// {
//     var input_char = input.charCodeAt(0);
    
//     // CHECKING FOR ALPHABET
//     if (
//     (input_char >= 65 && input_char <= 90) ||
//     (input_char >= 97 && input_char <= 122)
//     )
//     alert(" Alphabet ");
    
//     // CHECKING FOR DIGITS
//     else if (input_char >= 48 && input_char <= 57)
//     alert(" Digit ");
    
//     // OTHERWISE SPECIAL CHARACTER
//     else alert(" Special Character ");
// }

	// // JavaScript program to find type of input character
	// function charCheck(input)
	

	// // Driver Code
	// var input_char = "$";
	// charCheck(input_char);
	
// var a = +prompt("enter 1st value")
// var b = +prompt("enter 2nd value")

//         if(a>=0 && b>=0)
//         {
//             if(a!=b)
//             {
//                 document.write("The larger number is ");
//             }
//             else
//             {
//                 document.write("Both numbers are equal!")
//             }
//         } else {
//             document.write("Please add an integer!");
//         }

    
//     integer(-1,-1);
//  var intnum = +prompt("ENTER A NUMBER")
//         if(intnum==0)
//             {
//                 document.write("THE NUMBER IS ZERO ");
//             }
//             else if(intnum>0)
//             {
//                 document.write("THE NUMBER IS POSITIVE")
//             }else if(intnum<0)
//             {
//                 document.write("THE NUMBER IS NEGATIVE")
//             }

// var fVowel = prompt("Enter a Vowel")
//         if(fVowel== 'a' || 'e' || 'i' || 'o' || 'u')
//             {
//                 alert("Its a Vowel");
//             }
//             else 
//             {
//                 alert("Not a Vowel");
//             }

// function print24(str)
// {
//     // Get hours
//     var h1 = Number(str[1] - '0');
//     var h2 = Number(str[0] - '0');
//     var hh = (h2 * 10 + h1 % 10);
  
//     // If time is in "AM"
//     if (str[8] == 'A')
//     {
//         if (hh == 12)
//         {
//             document.write("00");
//             for (var i = 2; i <= 7; i++)
//                 document.write(str[i]);
//         }
//         else
//         {
//             for (var i = 0; i <= 7; i++)
//                 document.write(str[i]);
//         }
//     }
  
//     // If time is in "PM"
//     else
//     {
//         if (hh == 12)
//         {
//             document.write("12");
//             for (var i = 2; i <= 7; i++)
//                 document.write(str[i]);
//         }
//         else
//         {
//             hh = hh + 12;
//             document.write(hh);
//             for (var i = 2; i <= 7; i++)
//                 document.write(str[i]);
//         }
//     }
// }
  
// // Driver code
 
//     var str = "07:05:45PM";
//     print24(str);



// var arrayA = []
// var arrayB = new Array()
// var strarray = ["Ani", "Sam", " Joe"]
// var intarray = [1, 11, 111]
// var mixedarray = ["Apple",{1: "Pie", 2: "Dumpling", 3: "Cider"}, "Banana", {1: "Bread", 2: "Republic"}]
// var QF = ["SSC"+"HSC", "BSC", " BS","BCOM","MS","M. Phill","PhD"]


// var snumbers = [320,230,480,120];
// numbers.sort();
// console.log(snumbers);


// var cities = ["Karachi", "Lahore", "Islamabad","Quetta",Peshawar]
// console.log(cities[3:4]);



    // var arr = ["This" ,  "is" , " my ", "cat"]; 
    // document.write(arr.join(',')); 
    // document.write(arr.join(' ')); 

var DEV = ["Keyboard", "Mouse", "Printer","Monitor"];
alert(DEV)
alert( DEV[0] ); // Keyboard
alert( DEV[1] ); // Mouse
alert( DEV[2] ); // Printer
alert( DEV[3] ); // Monitor

var eDEV = ["Apple", "Samsung","Motorola", "Nokia", "Sony" , "Haier"];
document.write(eDEV)