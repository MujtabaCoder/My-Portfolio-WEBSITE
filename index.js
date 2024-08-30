// ---

function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

document.addEventListener("DOMContentLoaded", () => {
  const textElement = document.querySelector(".heading-primary");
  const text = textElement.textContent;
  textElement.textContent = ""; // Clear the text

  let index = 0;

  function typeEffect() {
    if (index < text.length) {
      textElement.textContent += text[index];
      index++;
      setTimeout(typeEffect, 100); // Adjust typing speed here (in milliseconds)
    }
  }

  typeEffect();

  // const randomColor = getRandomColor();
  // document.documentElement.style.setProperty("--main-bg-color", randomColor);

  // const mainText = document.getElementById("mainText");
  // const subText = document.getElementById("subText");

  // mainText.setAttribute("fill", randomColor); // Set a new color for the main text
  // subText.setAttribute("fill", randomColor);

  const mainText = document.getElementById("mainText");
  const subText = document.getElementById("subText");

  function changeColors() {
    const newColor = getRandomColor();
    document.documentElement.style.setProperty("--main-bg-color", newColor); // Change the background color
  }

  // Initial color change
  changeColors();

  // Change color every 5 seconds
  setInterval(changeColors, 5000);
});

const hamMenuBtn = document.querySelector(".header__main-ham-menu-cont");
const smallMenu = document.querySelector(".header__sm-menu");
const headerHamMenuBtn = document.querySelector(".header__main-ham-menu");
const headerHamMenuCloseBtn = document.querySelector(
  ".header__main-ham-menu-close"
);
const headerSmallMenuLinks = document.querySelectorAll(".header__sm-menu-link");

hamMenuBtn.addEventListener("click", () => {
  if (smallMenu.classList.contains("header__sm-menu--active")) {
    smallMenu.classList.remove("header__sm-menu--active");
  } else {
    smallMenu.classList.add("header__sm-menu--active");
  }
  if (headerHamMenuBtn.classList.contains("d-none")) {
    headerHamMenuBtn.classList.remove("d-none");
    headerHamMenuCloseBtn.classList.add("d-none");
  } else {
    headerHamMenuBtn.classList.add("d-none");
    headerHamMenuCloseBtn.classList.remove("d-none");
  }
});

for (let i = 0; i < headerSmallMenuLinks.length; i++) {
  headerSmallMenuLinks[i].addEventListener("click", () => {
    smallMenu.classList.remove("header__sm-menu--active");
    headerHamMenuBtn.classList.remove("d-none");
    headerHamMenuCloseBtn.classList.add("d-none");
  });
}

// ---
const headerLogoConatiner = document.querySelector(".header__logo-container");

headerLogoConatiner.addEventListener("click", () => {
  location.href = "/";
});
