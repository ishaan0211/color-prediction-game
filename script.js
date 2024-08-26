let score = 0;

function predictColor(selectedColor) {
    const colors = ['Red', 'Green', 'Blue'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];

    let resultMessage = `You selected: ${selectedColor}<br>`;
    resultMessage += `Randomly selected color: ${randomColor}<br>`;

    if (selectedColor === randomColor) {
        resultMessage += "Congratulations! You guessed it right!";
        score++;
    } else {
        resultMessage += "Sorry, try again!";
        score = score > 0 ? score - 1 : 0;
    }

    document.getElementById('result').innerHTML = resultMessage;
    document.getElementById('score').innerHTML = `Score: ${score}`;
}

function resetGame() {
    score = 0;
    document.getElementById('score').innerHTML = `Score: ${score}`;
    document.getElementById('result').innerHTML = '';
}
