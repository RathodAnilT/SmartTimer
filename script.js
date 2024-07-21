let timer;
let isRunning = false;
let elapsedTime = 0;

const timerElement = document.getElementById('timer');
const startPauseBtn = document.getElementById('startPauseBtn');
const resetBtn = document.getElementById('resetBtn');

startPauseBtn.addEventListener('click', () => {
    if (isRunning) {
        clearInterval(timer);
        startPauseBtn.textContent = 'Start';
    } else {
        timer = setInterval(updateTimer, 1000);
        startPauseBtn.textContent = 'Pause';
    }
    isRunning = !isRunning;
});

resetBtn.addEventListener('click', () => {
    clearInterval(timer);
    isRunning = false;
    elapsedTime = 0;
    timerElement.textContent = '00:00:00';
    startPauseBtn.textContent = 'Start';
});

function updateTimer() {
    elapsedTime++;
    const hours = Math.floor(elapsedTime / 3600);
    const minutes = Math.floor((elapsedTime % 3600) / 60);
    const seconds = elapsedTime % 60;
    timerElement.textContent = 
        `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
}

function pad(number) {
    return number < 10 ? '0' + number : number;
}
