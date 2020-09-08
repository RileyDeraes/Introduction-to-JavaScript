/************************************************************** Task 1: Warm-up! **************************************************************/
//Task a: declare a variable called votingAge, console log true if age > 18 (no function required)

var votingAge = 35; //Enter age here, instead of 35.
if(votingAge >=18) {
  console.log("Old enough!");
}
else {
  console.log("Not old enough!");
}


//Task b: declare a variable and then use a conditional to change the value of that variable based on the value assigned to a second variable (no function required)

var number = 20; //Initial number.
console.log(number);

var otherNumber = 65743; //If you change this number, the variable "number" will change also.
console.log(otherNumber);

if (number !== otherNumber) {
  number = otherNumber; //The magic happens here.

console.log(number);


//Task c: Convert string ("1999") to integer (1999)  (no function required) // hint look up the Number method

var string = "1999";

var integer = Number(string);

console.log(integer);


//Task d: Write a function to multiply a*b 

var a = 11;
var b = 2;

const multiply = function(a, b) {
  return a * b;
};


console.log(multiply(a,b));



/************************************************************** Task 2 **************************************************************/
//Age in Dog years
//write a function that takes your age and returns it to you in dog years - they say that 1 human year is equal to seven dog years 

var age = 23; //My Age
var dogAge = 7; //1 * 7

const dogYears = function(age, dogAge) {
  return age * dogAge;
};


console.log( "I am " + dogYears(age, dogAge) + " years old in dog years." );



/************************************************************** Task 3 **************************************************************/
//Dog feeder 
//takes weight in pounds and age in years (note if the dog is a puppy the age will be a decimal) and returns the number of pounds of raw food to feed in a day.

//feeding requirements
// adult dogs at least 1 year 
// up to 5 lbs - 5% of their body weight
// 6 - 10 lbs - 4% of their body weight 
// 11 - 15 lbs - 3% of their body weight 
// > 15lbs - 2% of their body weight 

// Puppies less than 1 year
// 2 - 4 months 10% of their body weight
// 4 - 7 months 5% of their body weight 
// 7 - 12 months 4% of their body weight

// when you are finished invoke your function with the weight of 15 lbs and the age of 1 year - if your calculations are correct your result should be 0.44999999999999996
  
var age = 1; //Change the age as needed, in years. For puppies, use a decimal. (e.g. 0.4 or .4)
var weight = 15; //Change the weight as needed, in pounds.

function dogFeeder(age, weight) { //This is the function!
    if(age >=1){
        if(weight <= 6){
            return (weight * .05 )
        } else if (weight <= 11 ) {
            return (weight * .04 )
        } else if (weight <= 16 ) {
            return (weight * .03 )
        } else {
            return (weight * .02 )
        }
    } else {
        if (age <= .4 ) {
            return (weight * .1 )
        } else if (age <= .6 ) {
            return (weight * .05 )
        } else {
            return (weight * .04 )
        }
    }
}  

var foodInPounds = dogFeeder(age, weight);

console.log("Feed your dog " + foodInPounds + " pounds of raw food.");
console.log("Rounded up, that is about " + Math.round(foodInPounds * 100 + Number.EPSILON ) / 100 + " pounds."); //Used some googling to get it to round nicely :)


/************************************************************** Task 4 **************************************************************/
// Rock, Paper, Scissors
// Your function should take a string (either rock paper or scissors)
// it should return you won or you lost based on the rules of the game (you may need to look up the rules if you have not played before)
// use math.random to determine the computers choice 
// hint while you can complete this with only conditionals based on strings it may help to equate choice to a number 

/************************************************************** Stretch **************************************************************/
//Take Rock, Paper, Scissors further
//update your rock papers scissors code below to take a prompt from a user using the window object

var rock = "rock";
var paper = "paper";
var scissors = "scissors";
const yourChoice = prompt("Choose rock, paper, or scissors.");
console.log("You chose " + yourChoice + ".")

function game(player){
    computerResult = ""
    let computer = Math.floor(Math.random() * 3);

    if(computer === 0){
        computerResult = "rock";
    } else if(computer === 1){
        computerResult = "paper";
    } else if(computer === 2){
        computerResult = "scissors";
    }
    console.log("The computer chose " + computerResult + "!")
    if(yourChoice === computerResult){
        return("You tie!");
    } else {
        if(computerResult === "rock"){
            if(yourChoice === "paper"){
                return("You win!");
            } else {
                return("You lose!");
            }
        } else if(computerResult === "paper"){
            if(yourChoice === "scissors"){
                return ("You win!");
            } else {
                return ("You lose!")
            }
        } else {
            if(yourChoice === "rock"){
                return("You win!");
            } else {
                return("You lose!")
            }
        }
    }
}
console.log(game(yourChoice));
  

/************************************************************** Task 5 **************************************************************/
//Metric Converter
//a. KM to Miles - should take the number of kilometers and convert it to the equal number of miles

var kilometers = prompt("How many KM?");
var miles = kilometers * 0.621371;

console.log("That would be " + miles + " miles.");
console.log("Or about " + Math.round(miles * 100 + Number.EPSILON ) / 100+ " miles after rounding up.")



//b. Feet to CM - should take the number of feet and convert it to the equal number of centimeters
  
var feet = prompt("How many feet?");
var cm = feet * 30.48;

console.log(feet + " feet would be " + cm + " cm.");
console.log("Or about " + Math.round(cm * 100 + Number.EPSILON ) / 100+ " cm after rounding up.")



/************************************************************** Task 6 **************************************************************/
// 99 bottles of soda on the wall
// create a function called annoyingSong
// the function should take a starting number as an argument and count down - at each iteration it should log (number) bottles of soda on the wall, (number) bottles of soda, take one down pass it around (number left over) bottles of soda on the wall`
  
const numbers = prompt("How many bottles?");
console.log("You've got " + numbers + " bottles of soda on the wall.");
console.log(numbers + " bottles of soda.");

annoyingSong(numbers);
function annoyingSong(numbers){
    for(numbers >= 0; numbers--;){
       console.log("Take one down, pass it around, you've got " + numbers +  " bottles of soda on the wall.");
      console.log(numbers + " bottles of soda on the wall.");
      console.log(numbers + " bottles of soda.");
    }
}



/************************************************************** Task 7 **************************************************************/
//Grade Calculator
//write a javaScript program that takes a mark out of 100 and returns a corresponding letter grade 
//90s should be A 
//80s should be B 
//70s should be Cs 
//60s should be D 
//and anything below 60 should be F
  
const number = prompt("What's your grade?");
console.log("Your grade is " + number + ".")

function grades(number){
    if(number > 89){
        return("A");
    } else if(number > 79){
        return("B");
    } else if(number > 69){
        return("C");
    } else if(number > 59){
        return("D");
    } else {
        return("F");
    }
} 
console.log("You scored: " + grades(number));
  
  

/************************************************************** Stretch **************************************************************/
//Create a function that counts the number of vowels within a string. It should handle both capitalized and uncapitalized vowels.
// Hint - you may need to study tomorrow's training kit on arrays 
// try looking up the .includes() method








