// calculate Emotional Intelligence score
function calculateScore() {
  var score = 0;

  // get a list of the radio inputs on the page
  var choices = document.getElementsByTagName('input');
  // loop through all the radio inputs
  for (i=0; i<choices.length; i++) {
    // if the radio is checked,
    if (choices[i].checked) {
    // add points to score based on which radio is checked
      if (choices[i].value == 'c1') {
        score = score + 1;
      }
      if (choices[i].value == 'c2') {
        score = score + 2;
      }
      if (choices[i].value == 'c3') {
        score = score + 3;
      }
      if (choices[i].value == 'c4') {
        score = score + 4;
      }
      if (choices[i].value == 'c5') {
        score = score + 5;
      }
      if (choices[i].value == 'c6') {
        score = score + 6;
      }
    }
  }

// reset button
function resetAnswer() {
  var answerbox = document.getElementById('answer');
  answerbox.innerHTML = "Your score will show up here";
}

});

// consider adding function to show one question at a time //
