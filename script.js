const api = {
  key: "2fa73590fd8b5a4c6e68098ad5625395",
  base: "https://api.openweathermap.org/data/2.5/"
};

const searchbox = document.querySelector(".search-box");
searchbox.addEventListener("keypress", setQuery);

function setQuery(evt) {
  if (evt.keyCode == 13) {
    getResults(searchbox.value);
  }
}

function getResults(query) {
  fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
    .then((weather) => {
      return weather.json();
    })
    .then(displayResults);
}

function displayResults(weather) {
  console.log(weather);
  let city = document.querySelector(".location .city");
  city.innerText = `${weather.name}, ${weather.sys.country}`;

  let now = new Date();
  let date = document.querySelector(".location .date");
  date.innerText = dateBuilder(now);

  let temp = document.querySelector(".current .temp");
  temp.innerHTML = `${Math.round(weather.main.temp)}<span>°C</span>`;

  let weather_el = document.querySelector(".current .weather");
  weather_el.innerText = weather.weather[0].main;

  let hilow = document.querySelector(".hi-low");
  hilow.innerText = `${weather.main.temp_min}°C / ${weather.main.temp_max}°C`;
}

function dateBuilder(d) {
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];
  let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ];
  
    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();
  
    return `${day} ${date} ${month} ${year}`;
  }
  
  'use strict';

// ||ELEMENT TOGGLE FUNCTION 

const elemToggleFunc = function (elem) { elem.classList.toggle("active"); }



// || HEADER STICKY AND GO UP

const header = document.querySelector("[data-header]");
const goTopBtn = document.querySelector("[data-go-top]");

window.addEventListener("scroll", function () {

if (window.scrollY >= 10) {
  header.classList.add("active");
  goTopBtn.classList.add("active");
} else {
  header.classList.remove("active");
  goTopBtn.classList.remove("active");
}

});


// ||NAV BAR TOGGLE 

const navToggleBtn = document.querySelector("[data-nav-toggle-btn]");
const navbar = document.querySelector("[data-navbar]");

navToggleBtn.addEventListener("click", function () {

elemToggleFunc(navToggleBtn);
elemToggleFunc(navbar);
elemToggleFunc(document.body);

});

// ||SKILLS TOGGLE 


const toggleBtnBox = document.querySelector("[data-toggle-box]");
const toggleBtns = document.querySelectorAll("[data-toggle-btn]");
const skillsBox = document.querySelector("[data-skills-box]");

for (let i = 0; i < toggleBtns.length; i++) {
toggleBtns[i].addEventListener("click", function () {

  elemToggleFunc(toggleBtnBox);
  for (let i = 0; i < toggleBtns.length; i++) { elemToggleFunc(toggleBtns[i]); }
  elemToggleFunc(skillsBox);

});
}

// || DARK AND LIGHT THEME TOGGLE 


// const themeToggleBtn = document.querySelector("[data-theme-btn]");

// themeToggleBtn.addEventListener("click", function () {

// elemToggleFunc(themeToggleBtn);

// if (themeToggleBtn.classList.contains("active")) {
//   document.body.classList.remove("dark_theme");
//   document.body.classList.add("light_theme");

//   localStorage.setItem("theme", "light_theme");
// } else {
//   document.body.classList.add("dark_theme");
//   document.body.classList.remove("light_theme");

//   localStorage.setItem("theme", "dark_theme");
// }

// });

// ||CHECK AND SELECT LAST SELECCTED THEME IN BY USING LocalStorage 

if (localStorage.getItem("theme") === "light_theme") {
themeToggleBtn.classList.add("active");
document.body.classList.remove("dark_theme");
document.body.classList.add("light_theme");
} else {
themeToggleBtn.classList.remove("active");
document.body.classList.remove("light_theme");
document.body.classList.add("dark_theme");
}