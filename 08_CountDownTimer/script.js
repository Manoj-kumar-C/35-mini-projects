let days = document.getElementById("days");
let hours = document.getElementById("hours");
let minutes = document.getElementById("minutes");
let seconds = document.getElementById("seconds");
let countdown = document.getElementById("countdown");
let year = document.getElementById("year");
let loading = document.getElementById("loading");

let nextYear = new Date().getFullYear() + 1;
let newYearTime = new Date(`January 01 ${nextYear} 00:00:00`);

function updateCountdown() {
  let currentTime = new Date();
  let difference = newYearTime - currentTime;
  let currentDays = Math.floor(difference / 1000 / 60 / 60 / 24);
  let currentHours = Math.floor(difference / 1000 / 60 / 60) % 24;
  let currentMinutes = Math.floor(difference / 1000 / 60) % 60;
  let currentSeconds = Math.floor(difference / 1000) % 60;
  days.innerText = currentDays;
  hours.innerText = currentHours < 10 ? "0" + currentHours : currentHours;
  minutes.innerText =
    currentMinutes < 10 ? "0" + currentMinutes : currentMinutes;
  seconds.innerText =
    currentSeconds < 10 ? "0" + currentSeconds : currentSeconds;
}

setTimeout(() => {
  loading.remove();
  countdown.style.display = "flex";
}, 1000);

setInterval(updateCountdown, 1000);

year.innerText = nextYear;