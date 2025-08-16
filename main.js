"use strict";

const switchDesktop = document.querySelectorAll(".switch1");
const switchMobile = document.querySelectorAll(".switch2");
const card1Desktop = document.querySelector(".card--1");
const card2Desktop = document.querySelector(".card--2");
const card1Mobile = document.querySelector(".mobile--card--1");
const card2Mobile = document.querySelector(".mobile--card--2");

// switch desktop card display

function desktopShow2() {
  card1Desktop.style.display = "none";
  card2Desktop.style.display = "block";
  card2Desktop.style.transition = ".5s all ease";
}

function desktopShow1() {
  card2Desktop.style.display = "none";
  card1Desktop.style.display = "block";
  card1Desktop.style.transition = ".5s all ease";
}
let show1 = true;
let show2 = false;

switchDesktop.forEach((btn) => {
  btn.firstElementChild.addEventListener("click", () => {
    if (show2 === true) {
      desktopShow1();
      show1 = true;
      show2 = false;
    }
  });
  btn.lastChild.addEventListener("click", () => {
    desktopShow2();
    show1 = false;
    show2 = true;
  });
});

document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowRight") {
    desktopShow2();
    show1 = false;
    show2 = true;
  } else if (e.key === "ArrowLeft") {
    desktopShow1();
    show1 = true;
    show2 = false;
  }
});

// mobile card slide

function mobileShow2() {
  card1Mobile.style.display = "none";
  card2Mobile.style.display = "block";
  card2Mobile.style.transition = ".5s all ease";
}

function mobileShow1() {
  card2Mobile.style.display = "none";
  card1Mobile.style.display = "block";
  card1Mobile.style.transition = ".5s all ease";
}
let mobileCard1 = true;
let mobileCard2 = false;

switchMobile.forEach((btn) => {
  btn.firstElementChild.addEventListener("click", () => {
    if (mobileCard2 === true) {
      mobileShow1();
      mobileCard1 = true;
      mobileCard2 = false;
    }
  });
  btn.lastChild.addEventListener("click", () => {
    mobileShow2();
    mobileCard1 = false;
    mobileCard2 = true;
  });
});

document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowRight") {
    mobileShow2();
    mobileCard1 = false;
    mobileCard2 = true;
  } else if (e.key === "ArrowLeft") {
    mobileShow1();
    mobileCard1 = true;
    mobileCard2 = false;
  }
});
