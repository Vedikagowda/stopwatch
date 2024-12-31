let timer;
let isRunning = false;
let time = 0;
let lapTimes = [];

const display = document.getElementById('display');
const startBtn = document.getElementById('start');
const pauseBtn = document.getElementById('pause');
const resetBtn = document.getElementById('reset');
const lapBtn = document.getElementById('lap');
const laps = document.getElementById('laps');

function formatTime(ms) {
    const totalSeconds = Math.floor(ms / 1000);
    const minutes = Math.floor(totalSeconds / 60).toString().padStart(2, '0');
    const seconds = (totalSeconds % 60).toString().padStart(2, '0');
    const milliseconds = (ms % 1000).toString().padStart(3, '0').slice(0, 2);
    return `${minutes}:${seconds}:${milliseconds}`;
}

function startTimer() {
    if (!isRunning) {
        isRunning = true;
        timer = setInterval(() => {
            time += 10; // Update every 10ms
            display.textContent = formatTime(time);
        }, 10);
    }
}

function pauseTimer() {
    clearInterval(timer);
    isRunning = false;
}

function resetTimer() {
    clearInterval(timer);
    isRunning = false;
    time = 0;
    lapTimes = [];
    display.textContent = '00:00:00';
    laps.innerHTML = '';
}

function recordLap() {
    if (isRunning) {
        lapTimes.push(formatTime(time));
        const lapItem = document.createElement('li');
        lapItem.textContent = `Lap ${lapTimes.length}: ${lapTimes[lapTimes.length - 1]}`;
        laps.appendChild(lapItem);
    }
}

startBtn.addEventListener('click', startTimer);
pauseBtn.addEventListener('click', pauseTimer);
resetBtn.addEventListener('click', resetTimer);
lapBtn.addEventListener('click', recordLap);




