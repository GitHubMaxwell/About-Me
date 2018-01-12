'use strict';

var guestName = prompt('please enter your name');
console.log('please enter your name');
alert('Hello ' + guestName + '! Please answer the following 5 questions of my guessing game with a YES or a NO!');
console.log(guestName);

var answerOne = prompt('Was I born in the USA?').toUpperCase();
console.log('Question 1');
console.log(answerOne);



/*
var answerThree = prompt('Have I ever been to Antartica?').toUpperCase;
console.log('Question 3');
console.log(answerThree);

var answerFour = prompt('Have I been married?').toUpperCase;
console.log('Question 4');
console.log(answerFour);

var answerFive = prompt("Do I have Arabian wild dogs as pets?").toUpperCase;
console.log('Question 5');
console.log(answerFive); 

*/

if (answerOne === 'YES') {

    alert('Yep! Good job ' + guestName + '! Lets try another one.');
    console.log(guestName + ' got it right!');

} else if (answerOne === 'NO'){
    /*
    alert('Nope! Try again ' + guestName + '!');
    console.log(guestName + ' got it wrong.');
    */
    
    while (answerOne !== 'YES' || answerOne === 'NO'){
        alert('Nope! Try again ' + guestName + '!');
        answerOne = prompt('Was I born in the USA?').toUpperCase();
        console.log(guestName + ' got it wrong AGAIN.');

        if (answerOne === 'YES')  {
            alert('Yep! Good job ' + guestName + '! Lets try another one.');
        }
    }
} else {
    /*
    alert('Please answer the question with a YES or a NO.');
    console.log(guestName + ' didn\'t answer the question correctly');
    */
    while (answerOne !== 'YES' || answerOne === 'NO') {
        answerOne = prompt('Was I born in the USA?').toUpperCase();
    }
}


var answerTwo = prompt('Has it ever hailed in Saudi Arabia?').toUpperCase;
console.log('Question 2');
console.log(answerTwo);

if (answerTwo === 'YES') {

    alert('Yep! Good job ' + guestName + '! It has hailed in Saudi Arabia.');
    console.log(guestName + ' got it right!');

} else if (answerTwo === 'NO'){
    while (answerTwo !== 'YES' || answerTwo === 'NO'){
        alert('Nope! Try again ' + guestName + '!');
        answerTwo = prompt('Has it ever hailed in Saudi Arabia?').toUpperCase();
        console.log(guestName + ' got Question 2 wrong AGAIN.');

        if (answerTwo === 'YES')  {
            alert('Yep! Good job ' + guestName + '! It has hailed in Saudi Arabia.');
        }
    }
} else {
    /*
    alert('Please answer the question with a YES or a NO.');
    console.log(guestName + ' didn\'t answer the question correctly');
    */
    while (answerTwo !== 'YES' || answerTwo === 'NO') {
        answerTwo = prompt('Has it ever hailed in Saudi Arabia?').toUpperCase();
    }
}