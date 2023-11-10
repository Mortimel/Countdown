const daysEl = document.getElementById('days-c');
const hoursEl = document.getElementById('hours-c');
const minsEl = document.getElementById('mins-c');
const secsEl = document.getElementById('secs-c');

const christmas = "25 Dec 2023";

function countdown() {
    const newChristmas = new Date(christmas);
    const currentDate = new Date();

    const timeDifference = newChristmas - currentDate;

    // Convert milliseconds to days, hours, minutes, and seconds
    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const mins = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const secs = Math.floor((timeDifference % (1000 * 60)) / 1000);

    daysEl.innerHTML = days;
    hoursEl.innerHTML = hours;
    minsEl.innerHTML = mins;
    secsEl.innerHTML = secs;
}

countdown();
