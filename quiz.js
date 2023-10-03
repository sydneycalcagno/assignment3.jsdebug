function quiz() {
    const questions = [
        'How many moons does Earth have?',
        'How many moons does Saturn have?', //add comma
        'How many moons does Venus have?'
    ];
    const answers = [1, 82, 0];

    let score = 0; // let, because the score won't be constant

    let num = Math.floor(Math.random() * questions.length); // 0-number of questions

    for (let i = 0; i < questions.length; i++) { //.length, not .count and < not <= for only 3 times
        const question = questions[num];
        let answer = prompt(question); //add let

        if (answer == answers[num]) {
        score++; //add a plus
        alert('Correct!');
        } else {
        alert('Wrong!');
        }
        num++;

        if (num === questions.length) {
        num = 0;
        }
    }

    const scoreArea = document.querySelector('#score-area'); //add #
    scoreArea.innerHTML = `You got ${score} out of ${questions.length} questions correct!`;

}
  
alert('Are you ready for a quiz?');
quiz(); //quiz not quaz
  