'use strict';

var guestName = prompt('please enter your name');
alert('Hello ' + guestName + '! Please answer the following 5 questions of my guessing game with a YES or a NO!');
console.log('Guest\'s name = ' + guestName);

var gameArray = [['Was I born in the USA?', 'Has it ever hailed in Saudi Arabia?', 'Do I hate pizza?', 'Have I been married?', 'Do I have an Saudi Arabian wild dog as a pet?'], ['YES','YES','NO','NO','YES'],['Nope, try again ' + guestName, 'You\'re right ' + guestName + '! Let\'s move on to the next one.']];

var userAnswerArray = [];

var keepScore;
///////////////////// QUESTION 1-5 (MULTI-Dimensional array above) ////////////////////////////////////

function gameFunction(){

  for (var i = 0; i < 5 ; i++) {
    //my prompt that points to the array doesnt work
    //i had parenthesis around the array brackets and the linter was thinking it was a function (gameArray([0][i]))
    console.log((gameArray[0][i]));
    var userAnswer = prompt(gameArray[0][i]).toUpperCase();
    userAnswerArray.push(userAnswer);
    console.log(userAnswerArray);
    // have to push the results of the prompt into the userAnswerArray
    console.log('Question ' + i);
    console.log('Answer ' + i + ' = ' + userAnswerArray[i]);

    if ((userAnswerArray[i]) === (gameArray[1][i])) {
      alert(gameArray[2][1]);
      console.log(guestName + ' got Question ' + (i+1) + ' right on the first try');
      keepScore++;
    } else if ((userAnswerArray[i]) !== (gameArray[1][i])) {
      while ((userAnswerArray[i]) !== (gameArray[1][i])) {
        alert(gameArray[2][0]);
        userAnswerArray[i] = prompt(gameArray[0][i]).toUpperCase();
        console.log(guestName + ' got Question ' + (i+1) + ' wrong AGAIN.');
        if ((userAnswerArray[i]) === (gameArray[1][i])) {
          alert(gameArray[2][1]);
          console.log(guestName + ' got Question' + (i+1) + 'right after saying no first.');
          keepScore--;
        }
      }
    } else {
      while ((userAnswerArray[i]) !== (gameArray[1][i])) {
        alert(gameArray[2][0]);
        userAnswerArray[i] = prompt(gameArray[0][i]).toUpperCase();
        console.log(guestName + ' got Question ' + (i+1) + ' right after saying an invalid answer first.');
        if ((userAnswerArray[i]) === (gameArray[1][i])) {
          alert(gameArray[2][1]);
          console.log(guestName + ' got Question ' + (i+1) + 'right after giving an invalid response first.');
          keepScore--;
        }
      }
    }
  }
  console.log('end of multidimensional array');
}
gameFunction();

///////////////////// QUESTION 6 (WORKS) ////////////////////////////////////
// i took the random math generator from https://www.w3schools.com/jsref/jsref_random.asp

function mathGuess() {
  var rand = Math.floor((Math.random() * 3) + 1); 
  var answerSix = parseInt(prompt('Give me a number from 1 to 3? ' + rand));
  console.log(rand);
  console.log('User guess = ' + answerSix);

  for (var k = 0; k < 5; k++) {
    if (answerSix === rand) {
      alert('You got it');
      keepScore++;
      break;
    } else if (answerSix !== rand){
      alert('You got it wrong');
      answerSix = parseInt(prompt('Give me a number from 1 to 3?' + rand));
      console.log('You got it wrong AGAIN');
      console.log('youve missed it ' + (k + 1) + ' times');
      if (k === 5) {
        alert('you got it wrong too many times');
        break;
      }
    }
  }
}
mathGuess();
///////////////////// QUESTION 7 (DOESN'T WORK) ////////////////////////////////////
////////////used a lot of josh mcclung's code/////////////////////

function favFoods(){
  var favFood = ['CHIPS', 'TACOS', 'BURGERS', 'PIZZA', 'SUSHI'];
  var answerSeven = prompt('Guess what one of my favorite foods is?').toUpperCase();
  console.log('Question 7');
  console.log('Answer 7 = ' + answerSeven);

  /*

  if (answerSeven === favFood[j]){
    console.log('you got it right');
    favFood.splice(j, 1); //removes the correctly guessed item in the array before displaying it
    alert('You got it! I do like ' + answerSeven.toUpperCase + '. I also like ' + favFood);
  } else if (answerSeven !== favFood[j]) {
    console.log('user answer doesnt match anything in the array');
    answerSeven = prompt('Nope, take another guess?').toUpperCase();
  }
*/
  //for (var j = 0; j < favFood.length; j++) {

  var j = 0;
  while (j < 5){
    console.log('checking user answer against array position ' + j);
    j++;
    for (var k = 0; k < favFood; k++)
      if (answerSeven === favFood[k]){
        console.log('you got it right');
        favFood.splice(j, 1); //removes the correctly guessed item from the array before displaying the rest of the array in the below alert
        alert('You got it! I do like ' + answerSeven.toUpperCase + '. I also like ' + favFood);
        keepScore++;
      }
  }
}
favFoods();
//}
alert('So lets recap ' + guestName + '.  You\'re score is ' + keepScore + ' right out of 6 questions.');