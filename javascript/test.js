// Writing functions
// var inputtedAge = prompt("Enter your age");
// var age= parseInt(inputted age);
// age + age;

// Greeting function

var greeting = function(name){
    return "Hello, " + name + ".";
}
greeting("Jack");


// Subtract function
var subtract = function(number1, number2) {
    return number1 - number2;
}
    
subtract(6, 4)

//Multiply threeTimes

var multiply = function(num1, num2) {
    return num1 * num2
}

multiply(4, 8)

function threeTimes(num1, num2, num3) {
    return num1 * num2 * num3;
}

threeTimes(7, 8, 2)

//Divide One

var divide = function(num1, num2) {
    return num1 / num2;
}

divide(100,2);

//Remainder

var remainder = function(num1, num2) {
    return num1 % num2;
}

remainder(10, 4)

//Favorite Food Function

var favoriteFood = function() {
    var age = prompt("What is your age?")
    var food = prompt("What is your favorite food?")
    return alert("You are age: " + age + " and your fav food is " + food + ".");
}
favoriteFood(); 

//Simple addition with input

var add = function(num1, num2) {
	return num1 + num2;
}

var num1 = parseInt(prompt("Enter a number."));
var num2 = parseInt(prompt("Enter another number."));

alert(add(num1, num2))

