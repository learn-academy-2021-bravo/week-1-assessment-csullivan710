// ASSESSMENT 1: Coding practical questions

// To run file: navigate to the correct directory in terminal, $ node code-challenges.js

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// --------------------1) Create a function that takes in a number and determines if a temperature is below boiling point, at boiling point or above boiling point. Boiling point is 212 degrees Fahrenheit.
// Use the test variables provided below. Expected output: "35 is below boiling point", "350 is above boiling point", "212 is at boiling point"

/*var temp1 = 35
var temp2 = 350
var temp3 = 212
//create function expression called boiling
//implement for loop
//create if function expression for less than < 212
//return ${} 'is below boiling point'
//else if = 212 return ${} is at boiling point
//else return is above boiling point
const boiling = (temp) => {
for(let i = 0; i < temp.length; i++){
     if(temp[i] < 212){
         return `${temp} is below boiling point`
     } else if(
         temp = 212){
             return `${temp} is at boiling point`
         }else {
             return `${temp} is above boiling point`
         }
     }
    }
    let temp = [35, 212, 310]
    console.log(boiling(temp))*/





// --------------------2) Create a function that takes in an array of numbers and returns an array with each number multiplied by 5.
// Use the test variable provided below. Expected output: [15, 35, 0, 30, -45]

var myNumbers1 = [3, 7, 0, 6, -9]
//create a new array and return the array multiplied by 5 
//implement for loop
//declare array variable
//create function expression multiplied by 5
/*const multByFive = (array) => {
    let newArray = []
    for(let i =0; i<myNumbers1.length; i++){
        newArray.push(array[i] * 5)
    }
    return newArray
}
console.log(multByFive(myNumbers1))*/





// --------------------3) Create a function that takes in an array of numbers and returns an array containing only the odd numbers.
// Use the test variable provided below. Expected output: [-7, 9, 13]

var myNumbers2 = [8, -7, 0, 6, 2, 9, 13]
/*const oddNum = (myNumbers2) => {
let newArray = []
for(let i = 0; i<myNumbers2.length; i++){
    if(myNumbers2[i] % 2 !==0){
        newArray.push(myNumbers2[i])
    }
}
return newArray
}
console.log(oddNum(myNumbers2))*/





// --------------------4) Create a function that removes all the vowels from a string.
// Use the test variables provided below. Expected output: "HyThrLrnStdnt" "LvJvScrpt"

var stringWithVowels1 = "HeyThereLearnStudent"
var stringWithVowels2 = "ILoveJavaScript"
//Create a function
//Remove all vowels from a string
//put it back together
/*
const noVowels = (strings) =>{
    let newArray = str.toLowercase()
    let noVow = ""
    for(let i = 0; i<stringWithVowels1.length; i++){
        let lowerCase = strings[i].toLowerCase
        if(strings[i] !== "a" && lowerCase !== "e" && lowerCase !== i && lowerCase !== "o" && lowerCase !=="u"){
            newArray+=lowerCase
        }
    }
    return newArray

}
console.log(noVowels(stringWithVowels1))
console.log(noVowels(stringWithVowels2))

*/

// --------------------5) Copy/paste your code from #4. Refactor your code to include non-string edge cases. Inform your user if the variable passed into the vowel removal function is not a string.
// Use the test variables provided below. Expected output: "true is not a string" "42 is not a string" "mCdngMstr"
// Hint: There is an operator in JavaScript called typeof :)

var refactorTester1 = true
var refactorTester2 = 42
var refactorTester3 = "IAmACodingMaster"


//change return to show type of input
const noVowels = (strings) =>{
    let lowerCaseStr = typeof str === string? str.tlLowerCas() : str;
    let newArray = ""
    for(let i = 0; i<stringWithVowels1.length; i++){
        let lowerCase = strings[i].toLowerCase
        if(lowerCaseStr[i] !== "a" && lowerCaseStr !== "e" && lowerCaseStr !== i && lowerCaseStr !== "o" && lowerCaseStr !=="u"){
            newArray+=lowerCaseStr
        }else{
            return `not a string`
        }
    }
    return newArray


}
console.log(noVowels(stringWithVowels1))
console.log(noVowels(stringWithVowels2))