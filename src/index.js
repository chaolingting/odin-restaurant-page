// src/index.js
import "./styles.css";
import { homeContent } from "./greeting.js";
import { aboutPage } from "./about.js";
import { menuPage } from "./menu.js";
import { resetPage } from "./resetpage.js";


const homeBtn = document.querySelector(".tab-home");
const aboutBtn = document.querySelector(".tab-about");
const menuBtn = document.querySelector(".tab-menu");


if(homeBtn) {
  homeBtn.addEventListener("click", () => {
    console.log("Home click active");
    resetPage("home-bg");
    homeContent();
    });
}

if(aboutBtn) {
    aboutBtn.addEventListener("click", () => {
      console.log("About click active");
      resetPage("about-bg");
      aboutPage();
    });
}

if(menuBtn) {
    menuBtn.addEventListener("click", () => {
      console.log("menu click active");
      resetPage("menu-bg");
      menuPage();
    });
}



homeContent();