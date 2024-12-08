document.addEventListener('DOMContentLoaded', () => {
    loadLeaderboard();
});

function loadLeaderboard() {
    fetch('/negatives/php/get-leaderboard.php')
        .then(response => response.json())
        .then(data => {
            if (data.status === 'success') {
                populateLeaderboard(data.leaderboard);
            } else {
                console.error('Error fetching leaderboard data');
            }
        })
        .catch(error => console.error('Error:', error));
}

function populateLeaderboard(leaderboard) {
    const scoreboardTable = document.getElementById('scoreboard');
    scoreboardTable.innerHTML = '';

    leaderboard.forEach((entry, index) => {
        const row = document.createElement('tr');

        const rankCell = document.createElement('td');
        rankCell.textContent = index + 1;
        row.appendChild(rankCell);

        const usernameCell = document.createElement('td');
        usernameCell.textContent = entry.username;
        row.appendChild(usernameCell);

        const scoreCell = document.createElement('td');
        scoreCell.textContent = entry.score;
        row.appendChild(scoreCell);

        scoreboardTable.appendChild(row);
    });
}
