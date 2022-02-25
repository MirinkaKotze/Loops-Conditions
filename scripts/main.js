// LESSON 27 - LOOPS AND CONIDTIONS - BASIC LOOP AND CONIDTION PROGRAMS.
// WRAPPER FOR ALL HOMEWORK FUNCTIONS
function wrapperInput() {
    userInput = parseInt(prompt('Choose the number that is corresponding to the code you want to run: 1.Summation Program 2.Common Divisor 3.Number divisors 4.Number Length 5.Number Statistics 6.Loop Calculator 7.Moving Number 8.Loop Day 9.Multiplication 10.Guessing a number'));
    if (userInput === 1) {
        summationNumber()
    }
    else if (userInput === 2) {
        commonDivisor()
    }
    else if (userInput === 3) {
        divisors()
    }
    else if (userInput === 4) {
        numberLength()
    }
    else if (userInput === 5) {
        numberStats()
    }
    else if (userInput === 6) {
        loopCalculator()
    }
    else if (userInput === 7) {
        moveNumber()
    }
    else if (userInput === 8) {
        loopDay()
    }
    else if (userInput === 9) {
        multiplication()
    }
    else if (userInput === 10) {
        guessGame()
    }
}
wrapperInput()


// INDIVIDUAL HOMEWORK FUNCTIONS
// 1. Write a program that requests a number from a user and finds the summation of every number from 1 to num. 
//      For example, for number 4 it is 1 + 2 + 3 + 4 = 10.
function summationNumber() {
    let userNumber = prompt('Please enter a number:')
    let count = 1
    let sum = 0
    while (count <= +userNumber) {
        sum = sum + count
        count = count + 1
    }
    console.log(sum)
}
// summationNumber()


// 2. Request two numbers and find only their largest common divisor.
function commonDivisor() {
    let x = parseInt(prompt('Enter a number:'))
    let y = parseInt(prompt('Enter a 2nd number:'))
    while (y > 0) {
        let i = y;
        y = x % y;
        x = i;
    }
    console.log('The largest common divisor of your two numbers is: ' + x)
}
// commonDivisor()


// 3. Request a number and display all the divisors of it.
//      For example, for number 8 it would be 2, 4, and 8.
function divisors() {
    let userNumber = prompt('Please enter a number:');
    let x = 2;
    while (x <= +userNumber) {
        if (+userNumber % x === 0) {
            console.log(x);
            x++
        }
        if (+userNumber % x !== 0) {
            x++
        }
    }
}
// divisors()


// 4. Define the number of digits in a requested number.
//      For example, there are 4 digits in the number 6834.
function numberLength() {
    var userNumber = prompt('Please enter a long number:');
        console.log('There is ' + userNumber.length + ' digits in your number.');
    }
// numberLength()


// 5. Request 10 numbers from a user and count, how many are positive, negative, or zero.
//      Also, count odd and even. Display the statistics. There’s only one variable (not 10) needed for input by a user. 
// [[BUG: CODE RUNS AN EXTRA TIME, MAKING LENGTH OF ODD NUMBERS, 1 EXTRA]]
function numberStats() {
    // Empty variables to add arrays into        
        let positiveNumbers = [];
        let negativeNumbers = [];
        let zeroNumbers = [];
        let evenNumbers = [];
        let oddNumbers = [];
    // Asking for the numbers + Converting them to an Array
        let userInput = prompt('Enter 10 numbers, sperated with a comma:');
        let userInputSplit = userInput.split(',');
        userInputArray = userInputSplit.map(Number);         
    // For loop to check each number
        for (i = 0; i <= userInputArray.length; i++) {   
        //  Check for positive numbers
            if (userInputArray[i] > 0) {
                positiveNumbers.push(userInputArray[i])            
            }    
        //  Check for negative numbers
            if (userInputArray[i] < 0) {
                negativeNumbers.push(userInputArray[i])            
            }     
        //  Check for zero numbers
            if (userInputArray[i] === 0) {
                zeroNumbers.push(userInputArray[i])            
            }  
        // // Check for even numbers       
            if (userInputArray[i] % 2 === 0) {
                evenNumbers.push(userInputArray[i])            
            }
        // // Check for odd numbers       
        if (userInputArray[i] % 2 != 0) {
            oddNumbers.push(userInputArray[i])            
        }    
    }
    // Printing statements 
        console.log('Your entered list was ' + userInputArray);
        console.log('All the positive numbers in your list is: ' + positiveNumbers);
        console.log('The length of your positive number list is: ' + positiveNumbers.length);
        console.log('All the negative numbers in your list is: ' + negativeNumbers);
        console.log('The length of your negative number list is: ' + negativeNumbers.length);
        console.log('All the zero numbers in your list is: ' + zeroNumbers);
        console.log('The length of your zero number list is: ' + zeroNumbers.length);
        console.log('All the even numbers in your list is: ' + evenNumbers);
        console.log('The length of your even number list is: ' + evenNumbers.length);
        console.log('All the odd numbers in your list is: ' + oddNumbers);
        console.log('The length of your odd number list is: ' + oddNumbers.length);
    }
    // numberStats()


// 6. Loop a calculator. Request 2 numbers and a sign, solve the problem, display the result and ask if the user wants one more.
//      The loop continues until the user refuses. 
//[[BUGG: MULTIPLY DOESN'T MULTIPLY]]
function loopCalculator() {
    do {
        let numberX = parseInt(prompt('Please enter a number x:'))
        let numberY = parseInt(prompt('Please enter a number y:'))
        let sign = prompt('Please choose a sign: +, -, /, * ')
    
        if (sign == '+') {
            let addSum = numberX + numberY;
            console.log('The calculation of x and y is: ' + addSum);
            question = prompt('Would you like to play again?');
            console.log(question);
            continue;            
        }
        if (sign == '-'); {
            let minusSum = numberX - numberY;
            console.log('The calculation of x and y is: ' + minusSum);
            question = prompt('Would you like to play again?');
            console.log(question);
            continue;
        }
        if (sign == '/'); {
            let devideSum = numberX / numberY;
            console.log('The calculation of x and y is: ' + devideSum);
            question = prompt('Would you like to play again?');
            continue;
        }
        if (sign == '*'); {
            let multiplySum = (numberX * numberY);
            console.log('The calculation of x and y is: ' + multiplySum);
            question = prompt('Would you like to play again?');
            continue;
        }
    } while (question !== null);
}
// loopCalculator()


// 7. Request a number from a user and ask by how many digits to move it. Move the digits and display the result
// (if the number 123456 needs to be moved by 2 digits, the result will be 3456 12).
function moveNumber () {
    // Request number and convert it to an array
    let userInput = prompt('Enter numbers, sperated with a comma:');
    let userInputSplit = userInput.split(',');
    userInputArray = userInputSplit.map(Number);  
    // Request by how many digits to move array
    let moveDigit = parseInt(prompt('By how many digits do you want to move the number?'))
    // Slice array at moving point + create two arrays
    let array1 = userInputArray.slice(0, moveDigit);
    var array2 = userInputArray.slice(moveDigit, moveDigit + userInputArray.length);
    // Join two arrays
    let newArray = array2.concat(array1)
    console.log('Your new list of numbers is: ' + newArray)
}
// moveNumber()


// 8. Loop day input like this: «Day of the week. Would you like to see the next one?» which continues as long as the user clicks OK.
// [[BUG: LOOP ONLY RUN ONCE]] --> SEE EXTRA FILE WITH CODE. REDO IN CLASS WITH LOOP [[ADD FOR LOOP FOR CODE TO KEEP RUNNING]]
function loopDay() { 
    let today = 'Monday'
    let nextDay = ['Tuesday']
    console.log ('Today is: ' + today)
    let question = prompt('Do you want to see the next day? Enter Yes or No')
     if (question == 'yes') {     
        console.log (nextDay)
        question = prompt('Do you want to see the next day? Enter Yes or No')     
     }
     if (question == 'yes') {
        nextDay.splice(0, 1, 'Wednesday')
        console.log (nextDay)
        question = prompt('Do you want to see the next day? Enter Yes or No')
    }
    if (question == 'yes') {
        nextDay.splice(0, 1, 'Thursday')
        console.log (nextDay)
        question = prompt('Do you want to see the next day? Enter Yes or No')
    }
    if (question == 'yes') {
        nextDay.splice(0, 1, 'Friday')
        console.log (nextDay)
        question = prompt('Do you want to see the next day? Enter Yes or No')
    }
    if (question == 'yes') {
        nextDay.splice(0, 1, 'Saturday')
        console.log (nextDay)
        question = prompt('Do you want to see the next day? Enter Yes or No')
    }
    if (question == 'yes') {
        nextDay.splice(0, 1, 'Sunday')
        console.log (nextDay)
        question = prompt('Do you want to see the next day? Enter Yes or No')
    }
    if (question == 'yes') {
        nextDay.splice(0, 1, 'Monday')
        console.log (nextDay)
        question = prompt('Do you want to see the next day? Enter Yes or No')
    }
    else (question == 'no'); {
        console.log('We`re done!')
    }
}
loopDay()

// 9. Display the multiplication table of all numbers from 2 to 9. Every number has to be multiplied by 1 to 10. 
function multiplication() {
    let x = 2
    for (x=2; x <= 10; x++) {
        for (i=0; i<=10; i++) {
            let sum = i * x
            console.log(sum)
        }
    }
}
// multiplication()


// 10. “Guess the number” game. 
// Suggest a user to think of a number from 0 to 100 and guess it in the following way: 
// every loop iteration needs to divide the range of numbers in half, 
// you represent the result as N and ask the user “Your number > N, < N or == N?” 
// Depending on what the user said, narrow down the range. So the starting range is 0 to 100, divided in half is 50. 
// If the user said the number is > 50, the next range is 51 to 100, and so on, until the user chooses == N. 

function guessGame() {
    let userNumber = alert('Think of a number between 0 and 100!'); 
    let guess = prompt('Is your number > 50 < 50 or == 50 ? Enter: <, > or ==:');
    let min = 0;                             
    let middle = 50;                          
    let max = 100;                              
    while (guess != '==') {    
        if (guess == '>') {                        
            min = middle;                      
            range = max - min;                     
            rangeHalf = range / 2;                  
            rangeHalf = Math.floor(range / 2);      
            let center = min + rangeHalf;           
            middle = center;   
            let guessAgain = prompt('Is your number > ' + middle + ' < ' + middle + ' or == ' + middle + ' ? Enter: <, > or ==:'); 
            guess = guessAgain;
        }
        if (guess == '<') {                                
            max = middle                               
            range = max - min;                             
            rangeHalf = range / 2;                         
            rangeHalf = Math.floor(range / 2);             
            let center = min + rangeHalf;                   
            middle = center;
            let guessAgain = prompt('Is your number > ' + middle + ' < ' + middle + ' or == ' + middle + ' ? Enter: <, > or ==:'); 
            guess = guessAgain;
        }
    }    
    answer = alert('Your number was: ' + middle + '!!')
}
guessGame()

//*Add nr10 code + last bit of wrapper!!!


