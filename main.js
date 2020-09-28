const days1 = document.getElementById("days");
const hours1 = document.getElementById("hours");
const mins1 = document.getElementById("mins");
const seconds1 = document.getElementById("seconds");

const birthYear = "14 Oct 2020";

function countdown(){
    const birthYearDate = new Date(birthYear);
    const currentDate = new Date();

    const totalSeconds = (birthYearDate - currentDate) / 1000;

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const mins = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;

    days1.innerHTML = days;
    hours1.innerHTML = formatTime(hours);
    mins1.innerHTML = formatTime(mins);
    seconds1.innerHTML = formatTime(seconds);
}

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

countdown();

setInterval(countdown, 1000);