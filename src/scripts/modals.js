const modal = document.querySelector('.modal');

const startGameButton = document.getElementById('start-game');

const gameCanvas = document.getElementById('game-canvas');
const hiddenCanvas = document.getElementById('hidden-canvas');
const inkBar = document.querySelector('.ink-bar');

gameCanvas.style.opacity = '0.5';
hiddenCanvas.style.opacity = '0.5';
inkBar.style.display = '0.5';
modal.style.display = 'flex';

startGameButton.addEventListener('click', () => {
    
    modal.style.display = 'none';
    gameCanvas.style.opacity = '1';
    hiddenCanvas.style.opacity = '0.7';
    inkBar.style.opacity = '1';
});