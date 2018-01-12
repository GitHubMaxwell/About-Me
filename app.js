'use strict';

var guestName = prompt('please enter your name');
console.log('please enter your name');
alert('Hello ' + guestName + '! Please answer the following 5 questions of my guessing game with a YES or a NO!');
console.log(guestName);

/*********************** QUESTION ONE ************************/

var answerOne = prompt('Was I born in the USA?').toUpperCase();
console.log('Question 1');
console.log(answerOne);

if (answerOne === 'YES') {
    alert('Yep! Good job ' + guestName + '! Lets try another one.');
    console.log(guestName + ' got it right!');
} else if (answerOne === 'NO'){
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

/*********************** QUESTION TWO ************************/

var answerTwo = prompt('Has it ever hailed in Saudi Arabia?').toUpperCase();
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

/*********************** QUESTION THREE NO ************************/

var answerThree = prompt('Do I hate pizza?').toUpperCase();
console.log('Question 3');
console.log(answerThree);

if (answerThree === 'NO') {

    alert('You\'re absolutely right ' + guestName + '! Who hates pizza that\'s what I want to know!?.');
    console.log(guestName + ' got it right!');

} else if (answerThree === 'NO'){
    while (answerThree !== 'YES' || answerThree === 'NO'){
        alert('Nope! Try again ' + guestName + '!');
        answerTwo = prompt('Do I hate pizza').toUpperCase();
        console.log(guestName + ' got Question 2 wrong AGAIN.');

        if (answerThree === 'YES')  {
            alert('Yep! Good job ' + guestName + '! It has hailed in Saudi Arabia.');
        }
    }
} else {
    /*
    alert('Please answer the question with a YES or a NO.');
    console.log(guestName + ' didn\'t answer the question correctly');
    */
    while (answerThree !== 'NO' || answerThree === 'YES') {
        answerThree = prompt('Has it ever hailed in Saudi Arabia?').toUpperCase();
    }
}

/*********************** QUESTION FOUR NO************************/
var answerFour = prompt('Have I been married?').toUpperCase();
console.log('Question 4');
console.log(answerFour);

if (answerFour === 'NO') {

    alert('You got it! Good job ' + guestName + '! I have been engaged but never hitched!');
    console.log(guestName + ' got it right!');

} else if (answerFour === 'YES'){
    while (answerFour !== 'NO' || answerFour === 'YES'){
        alert('Nope! Try again ' + guestName + '!');
        answerFour = prompt('Let\'s try this again ' + guestName + '.Have I been married?').toUpperCase();
        console.log(guestName + ' got Question 4 wrong AGAIN.');

        if (answerFour === 'NO')  {
            alert('Yep! Good job ' + guestName + '! It has hailed in Saudi Arabia.');
        }
    }
} else {
    /*
    alert('Please answer the question with a YES or a NO.');
    console.log(guestName + ' didn\'t answer the question correctly');
    */
    while (answerFour !== 'NO' || answerFour === 'YES') {
        answerFour = prompt('Good try but that\'s a negative ' + guestName + '.Have I been married?').toUpperCase();
    }
}

/*********************** QUESTION FIVE ************************/

var answerFive = prompt('Do I have an Saudi Arabian wild dog as a pet?').toUpperCase();
console.log('Question 5');
console.log(answerFive); 

if (answerFive === 'YES') {

    alert('You\'re right ' + guestName + '! Her name is Zoe and she is a Saudi Arabian Saluki. she\'s 15 if you can believe that!');
    console.log(guestName + ' got it right!');

} else if (answerFive === 'NO'){
    while (answerFive !== 'YES' || answerFive === 'NO'){
        alert('Nope! Try again ' + guestName + '!');
        answerFive = prompt('Do I have an Saudi Arabian wild dog as a pet?').toUpperCase();
        console.log(guestName + ' got Question 5 wrong AGAIN.');

        if (answerFive === 'YES')  {
            alert('You bet ' + guestName + '! Her name is Zoe and she is a Saudi Arabian Saluki.');
        }
    }
} else {
    /*
    alert('Please answer the question with a YES or a NO.');
    console.log(guestName + ' didn\'t answer the question correctly');
    */
    while (answerFive !== 'YES' || answerFive === 'NO') {
        answerFive = prompt('Has it ever hailed in Saudi Arabia?').toUpperCase();
    }
}