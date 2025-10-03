// StopWatch (J.S)

let time = 0;
let time_on =  0;
let timerRunning = false;
let intervalTimer = null;

let contaner = document.querySelector('.swContainer')

contaner.style.backdropFilter = blur("45px")

let displayCounter = document.getElementById("counter");

function startBtn(){
if(!timerRunning){
    time =Date.now() - time_on
     intervalTimer = setInterval(startCounter, 10)
     timerRunning = true;
}
}

function stopBtn(){
if(timerRunning){
   clearInterval(intervalTimer);
   time_on = Date.now() - time;
   timerRunning = false
}
}

function restartBtn(){
   clearInterval(intervalTimer);
   timerRunning = false
   time = 0;
   time_on =  0;
   displayCounter.innerHTML = `00:00:00:00`;
}

function startCounter(){
    let Counter = Date.now();
    time_on = Counter - time;

    let Hours = Math.round(time_on / (1000 * 60 *60))
    let Minutes = Math.round(time_on / (1000 * 60) % 60)
    let seconds = Math.round(time_on / 1000 % 60)
    let minisec = Math.round(time_on % 1000 / 10)

    Hours = String(Hours).padStart(2, 0);
    Minutes = String(Minutes).padStart(2, 0);
    seconds = String(seconds).padStart(2, 0);
    minisec = String(minisec).padStart(2, 3);

    displayCounter.textContent = `${Hours}:${Minutes}:${seconds}:${minisec}`
}