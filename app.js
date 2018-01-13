'use strict';

var guestName = prompt('please enter your name');
alert('Hello ' + guestName + '! Please answer the following 5 questions of my guessing game with a YES or a NO!');
console.log('Guest\'s name = ' + guestName);


/***********************   QUESTION ONE  ************************/

var answerOne = prompt('Was I born in the USA?').toUpperCase();
console.log('Question 1');
console.log('Answer One = ' + answerOne);

if (answerOne === 'YES') {
    alert('Yep! Good job ' + guestName + '! Lets try another one.');
    console.log(guestName + ' got Question One right on the first try');
} else if (answerOne === 'NO'){
    while (answerOne !== 'YES' || answerOne === 'NO') {
        alert('Nope! Try again ' + guestName + '!');
        answerOne = prompt('Was I born in the USA?').toUpperCase();
        console.log(guestName + ' got it wrong AGAIN.');
        if (answerOne === 'YES') {
            alert('Yep! Good job ' + guestName + '! Lets try another one.');
            console.log(guestName + ' got Question 1 right after giving the incorrect response NO first.');
        }
    }
} else {
    while (answerOne !== 'YES' || answerOne === 'NO') {
        answerOne = prompt('Try again! Was I born in the USA?').toUpperCase();
        if (answerOne === 'YES')  {
            alert('Yep! Good job ' + guestName + '! Lets try another one.');
            console.log(guestName + ' got Question 1 right after giving an invalid response first.');
        }
    }
}

/*********************** QUESTION TWO ************************/

var answerTwo = prompt('Has it ever hailed in Saudi Arabia?').toUpperCase();
console.log('Question 2');
console.log('Answer Two = ' + answerTwo);

if (answerTwo === 'YES') {
    alert('Yep! Good job ' + guestName + '! It has hailed in Saudi Arabia.');
    console.log(guestName + ' got Question Two right on the first try');
} else if (answerTwo === 'NO'){
    while (answerTwo !== 'YES' || answerTwo === 'NO'){
        alert('Nope! Try again ' + guestName + '!');
        answerTwo = prompt('Has it ever hailed in Saudi Arabia?').toUpperCase();
        console.log(guestName + ' got Question 2 wrong AGAIN.');
        if (answerTwo === 'YES')  {
            alert('Yep! Good job ' + guestName + '! It has hailed in Saudi Arabia.');
            console.log(guestName + ' got Question 2 right after giving the incorrect response NO first.');
        }
    }
} else {
    while (answerTwo !== 'YES' || answerTwo === 'NO') {
        answerTwo = prompt('Nah, try it again! Has it ever hailed in Saudi Arabia?').toUpperCase();
        if (answerTwo === 'YES') {
            alert('Yep! Good job ' + guestName + '! It has hailed in Saudi Arabia.');
            console.log(guestName + ' got Question 2 right after giving an invalid response first.');
        }
    }
}

/*********************** QUESTION THREE ************************/

var answerThree = prompt('Do I hate pizza?').toUpperCase();
console.log('Question 3');
console.log('Answer Three = ' + answerThree);

if (answerThree === 'NO') {
    alert('You\'re absolutely right ' + guestName + '! Who hates pizza that\'s what I want to know!?.');
    console.log(guestName + ' got Question Three right on the first try');
} else if (answerThree === 'YES'){
    while (answerThree !== 'NO' || answerThree === 'YES'){
        alert('Nope! Give it another go ' + guestName + '!');
        answerThree = prompt('Do I hate pizza').toUpperCase();
        console.log(guestName + ' got Question 2 wrong AGAIN.');
        if (answerThree === 'NO') {
            alert('You\'re absolutely right ' + guestName + '! Who hates pizza that\'s what I want to know!?.');
            console.log(guestName + ' got Question 3 right after giving an incorrect response first.');
        }
    }
} else {
    while (answerThree !== 'NO' || answerThree === 'YES') {
        answerThree = prompt('Try again' + userName + 'Do I hate pizza?').toUpperCase();
        if (answerThree === 'NO') {
            alert('You\'re absolutely right ' + guestName + '! Who hates pizza that\'s what I want to know!?.');
            console.log(guestName + ' got Question 3 right after giving an invalid response first.');
        }
    }
}

/*********************** QUESTION FOUR ************************/

var answerFour = prompt('Have I been married?').toUpperCase();
console.log('Question 4');
console.log('Answer Four = ' + answerFour);

if (answerFour === 'NO') {
    alert('You got it! Good job ' + guestName + '! I have been engaged but never hitched!');
    console.log(guestName + ' got Question Four right on the first try');
} else if (answerFour === 'YES'){
    while (answerFour !== 'NO' || answerFour === 'YES'){
        alert('Nope! Try again ' + guestName + '!');
        answerFour = prompt('Have I been married?').toUpperCase();
        console.log(guestName + ' got Question 4 wrong AGAIN.');
        if (answerFour === 'NO')  {
            alert('You got it! Good job ' + guestName + '! I have been engaged but never hitched!');
            console.log(guestName + ' got Question 4 right after saying no first.');
        }
    }
} else {
    while (answerFour !== 'NO' || answerFour === 'YES') {
        answerFour = prompt('Good try but that\'s a negative ' + guestName + '. Give it another try. Have I been married?').toUpperCase();
        console.log(guestName + ' got Question 4 right after saying an invalid answer first.');
        if (answerFour === 'NO')  {
            alert('You got it! Good job ' + guestName + '! I have been engaged but never hitched!');
            console.log(guestName + ' got Question 4 right after giving an invalid response first.');
        }
    }
}

/*********************** QUESTION FIVE ************************/

var answerFive = prompt('Do I have an Saudi Arabian wild dog as a pet?').toUpperCase();
console.log('Question 5');
console.log('Answer Five = ' + answerFive); 

if (answerFive === 'YES') {
    alert('You\'re right ' + guestName + '! Her name is Zoe and she is a Saudi Arabian Saluki. She\'s 15 if you can believe that!');
    console.log(guestName + ' got Question 5 right on the first try');

} else if (answerFive === 'NO') {
    while (answerFive !== 'YES' || answerFive === 'NO') {
        alert('Nope! Try again ' + guestName + '!');
        answerFive = prompt('Do I have an Saudi Arabian wild dog as a pet?').toUpperCase();
        console.log(guestName + ' got Question 5 wrong.');
        if (answerFive === 'YES') {
            alert('You bet ' + guestName + '! Her name is Zoe and she is a Saudi Arabian Saluki.');
            console.log(guestName + ' got Question 5 right after giving the incorrect response NO first.');
        }
    }
} else {
    while (answerFive !== 'YES' || answerFive === 'NO') {
        answerFive = prompt('Try again! Do I have an Saudi Arabian wild dog as a pet?').toUpperCase();
        if (answerFive === 'YES') {
            alert('You bet ' + guestName + '! Her name is Zoe and she is a Saudi Arabian Saluki.');
            console.log(guestName + ' got Question 5 right after giving an invalid response first.');
        }
    }
}

/*********************** PARAGRAPH WITH ALL RESPONSES AT END OF GAME ************************/

var alert = alert('So lets recap ' + guestName + '. ' + answerOne + ' I was indeed born in the USA. Has it ever hailed in Saudi? You wouldn\' believe it but ' + answerTwo + ' its hailed twice. So now, do I hate Pizza? ' + answerThree + ', of course not you\'d have to be nuts to. Have I ever tried to put a ring on it? ' + answerFour +', but almost! Lastly, do i have a wild dog from Saudi? The answer is ' + answerFive + ' and she\'s a sweety pie! Thanks a bunch for playing my guessing game and please enjoy checking out my About page!');