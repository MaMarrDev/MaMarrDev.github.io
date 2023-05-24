
let menu = document.getElementById("menu");
let navClose = document.getElementById("navClose");
let hamburger = document.getElementById("hamburger");

function change(x) {
  x.classList.toggle("change");
  menu.classList.toggle("menu-trans");
  navClose.classList.toggle("nav-close-trans");
}
function Close(x) {
  hamburger.classList.toggle("change");
  menu.classList.toggle("menu-trans");
  x.classList.toggle("nav-close-trans");
}

let navbar = document.getElementById("navbar");
let prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  let currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    navbar.style.top = "0";
    menu.style.top = "55px";
  } else {
    if (!hamburger.classList.contains("change")) {
      navbar.style.top = "-55px";
      menu.style.top = "-110px";
    } else {
      navbar.style.top = "0";
      menu.style.top = "55px";
    }
  }
  prevScrollpos = currentScrollPos;
}
function CloseM(x) {
  setTimeout(function() {
  hamburger.classList.toggle("change");
  menu.classList.toggle("menu-trans");
  navClose.classList.toggle("nav-close-trans");
  navbar.style.top = "0";
  }, 1);
}

const SKILL = ["Designer.", "Web Developer."]
let skill = document.getElementById("skill");
let cursor = document.getElementById("cursor");

let r = Math.floor(Math.random() * SKILL.length);

let skills = SKILL[r];
let i = -1;
let j = skills.length;

function typingAnim() {
  if (i < skills.length) {
    skill.innerHTML += skills.charAt(i);
    cursor.style.opacity = "1";
    i++;
    setTimeout(typingAnim, 200);
    return j = skills.length;
  } else {
    cursor.style.opacity = "0";
    setTimeout(function() {cursor.style.opacity = "1"}, 1000);
    setTimeout(function() {return deleteAnim()}, 1500);
  }
}
function deleteAnim() {
  if (i == skills.length) {
    cursor.style.opacity = "1";
    skill.innerHTML = skills.substr(0, j - 1);
    j--;
    if (j == 0) {
      setTimeout(deleteAnim, 200);
      return i = -1;
    }
    setTimeout(deleteAnim, 200);
  } else {
    r = Math.floor(Math.random() * SKILL.length);
    skills = SKILL[r];
    cursor.style.opacity = "0";
    setTimeout(function() {return typingAnim()}, 800);
  }
}
typingAnim();