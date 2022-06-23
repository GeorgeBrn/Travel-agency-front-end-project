//HTML TO VARIABLES
const slides = document.querySelectorAll(".slide");
const message = document.querySelector(".message");
const schedule = document.querySelector(".schedule");
const monthBar = document.querySelector(".month-bar");
const months = document.querySelectorAll(".month");
const parentCoord = monthBar.getBoundingClientRect();
const now = new Date().getMonth();

import * as Navigation from "./Navigation.js";
import * as Calendar from "./Calendar.js";

//NAVIGATION
Navigation.navigation();

//SLIDER
let activeSlide = 0;

function showSlide() {
  slides.forEach((slide, iteration) => {
    slide.style.transform = `translateX(${100 * (iteration - activeSlide)}%)`;
  });
}

function nextSlide() {
  if (activeSlide === slides.length - 1) {
    activeSlide = 0;
    showSlide();
  } else {
    activeSlide++;
    showSlide();
  }
}

showSlide();

setInterval(() => {
  nextSlide();
}, 5000);

//MESSAGE BUTTON
message.addEventListener("click", function () {
  const calendar = document.getElementById("section--1");
  const calendarCoord = calendar.getBoundingClientRect().top - 85;

  scrollTo({
    top: calendarCoord + window.pageYOffset,
    behavior: "smooth",
  });
});

//TEMPLATE
function template(object) {
  schedule.insertAdjacentHTML(
    "beforeend",
    `<div class="card flex">
<div class="card-title">${object.title}</div>
<img src="img/${object.image}.jpg"></img>
<div class="card-body">
  <p>Data: ${object.date}</p>
  <p>Locație: ${object.location}</p>
  <p>Preț: ${object.price}</p>
  <p>Durata: ${object.duration}</p>
</div>
<div class="card-btn"><a href="./evenimente/${object.link}">Rezervă acum</a></div>
</div>`
  );
}

//MONTH SELECTOR
function selector(e) {
  if (e.target.classList.contains("month")) {
    //Active Month
    months.forEach(e => e.classList.remove("selected-month"));
    e.target.classList.add("selected-month");

    //Scroll
    const monthCoord = e.target.getBoundingClientRect();
    monthBar.scrollTo({
      left: monthCoord.left - parentCoord.left + monthBar.scrollLeft - 400,
      behavior: "smooth",
    });

    //Content selector
    schedule.replaceChildren();
    const num = Calendar.allMonths[e.target.dataset.num];
    if (num) {
      schedule.style.display = "grid";
      num.forEach(month => template(month));
    } else {
      schedule.style.display = "block";
      schedule.insertAdjacentHTML(
        "beforeend",
        '<p class="no-events">Luna aceasta nu există evenimente...</p>'
      );
    }

    //Content fade toggle
    schedule.childNodes.forEach(e => (e.style.opacity = 0));
    setTimeout(() => {
      schedule.childNodes.forEach(e => (e.style.opacity = 1));
    }, 1);
  }
}

monthBar.addEventListener("click", selector);

//MONTH FADE
months.forEach(function (month) {
  if (month.dataset.num < now) {
    month.classList.add("faded");
  }
});

//AUTO SELECTOR
const monthsArray = [];
for (let i = months.length; i--; monthsArray.unshift(months[i]));

setTimeout(() => {
  monthsArray.find(e => e.dataset.num == now).click();
}, 200);

//CARD LINK CLICK
schedule.addEventListener("click", function (e) {
  if (e.target.parentElement.classList.contains("card")) {
    e.target.closest(".card").lastElementChild.lastElementChild.click();
  }
});
