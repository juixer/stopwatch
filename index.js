let interval;
function start(){
    
    let second = 0;
    let minute = 0;
    let hour = 0;
    const secondText = document.getElementById('sec');
    const minuteText = document.getElementById('min');
    const hourText = document.getElementById('hour');
    interval = setInterval(() =>{
        second = ++second;
        if(second === 60){
            minute = ++minute;
            minuteText.innerText = minute;
            second = 0;
            if(minute === 60){
                hour = ++hour;
                hourText.innerText = hour;
                minute = 0;
                minuteText.innerText = minute;
            }
        }
        secondText.innerText = second;
    },1000)
    const startBtn = document.getElementById('starbtn');
    startBtn.setAttribute('disabled', true);
    const stopBtn = document.getElementById('stopbtn');
    stopBtn.removeAttribute('disabled');
    const resetBtn = document.getElementById('resetbtn');
    resetBtn.removeAttribute('disabled');
    
}
function stop(){
    clearInterval(interval);
    const stopBtn = document.getElementById('stopbtn');
    stopBtn.setAttribute('disabled', true);
    const startBtn = document.getElementById('starbtn');
    startBtn.removeAttribute('disabled');
    const resetBtn = document.getElementById('resetbtn');
    resetBtn.removeAttribute('disabled');
}




function reset(){
    clearInterval(interval);
    const secondText = document.getElementById('sec');
    const minuteText = document.getElementById('min');
    const hourText = document.getElementById('hour');
    
    secondText.innerText = '0';
    minuteText.innerText = '0';
    hourText.innerText = '0';

    const stopBtn = document.getElementById('stopbtn');
    stopBtn.setAttribute('disabled', true);
    const startBtn = document.getElementById('starbtn');
    startBtn.removeAttribute('disabled');
    const resetBtn = document.getElementById('resetbtn');
    resetBtn.setAttribute('disabled', true);
    
}