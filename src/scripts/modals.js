// Get the modal element
const modal = document.querySelector('.modal');

// Get the start game button
const startGameButton = document.getElementById('start-game');

// Get the game canvas element
const gameCanvas = document.getElementById('game-canvas');
const hiddenCanvas = document.getElementById('hidden-canvas');
const inkBar = document.querySelector('.ink-bar');

// Hide the game canvas and show the modal
gameCanvas.style.opacity = '0.3';
hiddenCanvas.style.opacity = '0.3';
inkBar.style.display = '0.3';
modal.style.display = 'flex';

// Add a click event listener to the start game button
startGameButton.addEventListener('click', () => {
    // Hide the modal and show the game canvas
    modal.style.display = 'none';
    gameCanvas.style.opacity = '1';
    hiddenCanvas.style.opacity = '0.7';
    inkBar.style.opacity = '1';
});