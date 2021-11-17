import './style.css';
import data from './scores.js';

const allScores = document.querySelector('.score-details');
for (let i = 0; i < data.length; i += 1) {
  const oneScore = data[i];
  allScores.innerHTML += `
    <div class="score-card">
    <p class="p-name score-elements">${oneScore.name}</p>
    <p class="insert-score score-elements">${oneScore.score}</p>
</div>
      `;
}
