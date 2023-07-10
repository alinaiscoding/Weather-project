let currentTime = new Date();
let h2 = document.querySelector("h2");
let date = currentTime.getDate();
let hour = currentTime.getHours();
let minutes = currentTime.getMinutes();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[currentTime.getDay()];

h2.innerHTML = `${day} ${date}, ${hour}:${minutes}`;

function search(event) {
  event.preventDefault();
  let input = document.querySelector("#cityInput");
  let name = document.querySelector("#city");
  name.innerHTML = `${input.value}`;
}

let form1 = document.querySelector("form");
form1.addEventListener("click", search);
