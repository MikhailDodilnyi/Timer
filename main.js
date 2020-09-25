let timerId;
function upd() {
    let time = document.getElementById('time');
    let date = new Date();

    let hours = date.getHours();
    if(hours < 10) hours = '0' + hours;
    time.children[0].innerHTML = hours;

    let minutes = date.getMinutes();
    if(minutes < 10) minutes = '0' + minutes;
    time.children[1].innerHTML = minutes;

    let seconds = date.getSeconds();
    if(seconds < 10) seconds = '0' + seconds;
    time.children[2].innerHTML = seconds;
}

function timeStart() {
    timerId = setInterval(upd, 1000);
    upd();
}

function timeStop() {
    clearInterval(timerId);
}

timeStart();
