let count = 0;
let minutes = 0;
let seconds = 0;
let milliSeconds = 0;
let Interval = 0;
let timerRunning = false;

// start timer

let startTimer = () => {
    count++;

    minutes = Math.floor((count/100)/60);
    seconds = Math.floor((count/100) - (minutes*60));
    milliSeconds = Math.floor(count - (seconds*100) - (minutes*6000));

    document.querySelector("#minutes").innerText = attachZero(minutes);
    document.querySelector("#seconds").innerText = attachZero(seconds);
    document.querySelector("#milli-seconds").innerText = attachZero(milliSeconds);

};

// code for start button

let startButton = document.querySelector("#start");
startButton.addEventListener('click',function(){
    if(!timerRunning){
        Interval = setInterval(startTimer,10);      //starts the timer
        timerRunning = true;
    }
});

// code for stop button

let stopButton = document.querySelector("#stop");
stopButton.addEventListener('click',function(){
     clearInterval(Interval);                        // stops the timer
});

// code for reset button

let resetButton = document.querySelector("#reset");
resetButton.addEventListener('click',function(){
    clearInterval(Interval);                        // stops the timer
    
    count = 0;
    minutes = 0;
    seconds = 0;
    milliSeconds = 0;
    Interval = 0;
    timerRunning = false;

    document.querySelector("#minutes").innerText = "00";
    document.querySelector("#seconds").innerText = "00";
    document.querySelector("#milli-seconds").innerText = "00";
});

// zero with single digits

let attachZero = (time) => {
    if(time <= 9){
        return "0" + time;
    }else{
        return time;
    }
};