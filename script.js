let score = 0;
let wickets = 0;

function addRuns() {
    const runs = parseInt(document.getElementById('runs').value);
    if (!isNaN(runs) && runs >= 0 && runs <= 6) {
        score += runs;
        document.getElementById('score').innerText = score;
        document.getElementById('runs').value = '';
    } else {
        alert('Please enter a valid number between 0 and 6');
    }
}

function addWicket() {
    if (wickets < 10) {
        wickets += 1;
        document.getElementById('wickets').innerText = wickets;
    } else {
        alert('All out!');
    }
}

function resetScore() {
    score = 0;
    wickets = 0;
    document.getElementById('score').innerText = score;
    document.getElementById('wickets').innerText = wickets;
    document.getElementById('runs').value = '';
}
