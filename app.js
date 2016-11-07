var millisec = 0;
var sec = 0;
var minutes = 0;
function setTimeForStopWatch() {
    millisec++;
    if (millisec == 1000) {
        sec++;
        millisec = 0;
        if (sec == 60) {
            sec = 0;
            minutes++
        }
    }
    document.getElementById("timer").innerHTML = millisec + " : " + sec + " : " + minutes;
}

function start() {
t = setInterval(setTimeForStopWatch, 1);
document.getElementById("strt").className = "glyphicon glyphicon-pause";
}
function stopWatch() {
    millisec = 0;
    sec = 0;
    minutes = 0;
    clearInterval(t);
    document.getElementById("strt").className = "glyphicon glyphicon-play";
    document.getElementById("stp").className = "glyphicon glyphicon-play"
}

function resetWatch() {
    stopWatch();
    document.getElementById("timer").innerHTML = "00 : 00 : 00";
    var doc = document.getElementById("stp").className = "glyphicon glyphicon-pause";
}
