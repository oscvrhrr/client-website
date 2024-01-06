let topOfPage = document.getElementById("Home");
const hamburgerMenu = document.querySelector(".hamburger-menu");
const navMenu = document.querySelector(".nav-menu");
let dynamicNav = document.getElementsByClassName("dynamic-nav")[0];
const techStack = document.querySelector(".media-scroller");
let imgSlide = document.getElementsByClassName("top-image")[0];
let aboutSlide = document.getElementsByClassName("container-about-me")[0];
let aboutBottom = document.getElementsByClassName("container-about-me")[0];
let arrows = Array.from(document.getElementsByClassName("arrow"));
let curtains = Array.from(document.getElementsByClassName("curtain"));
const projectSection = document.getElementsByClassName("my-projects")[0];
const project = document.getElementsByClassName("project-flex--width");

hamburgerMenu.addEventListener("click", () => {
  navMenu.classList.toggle("hide");
});

let state = true;
let checkScroll = () => {
  if (!topOfPage.getBoundingClientRect().top && state) {
    dynamicNav.style.backgroundColor = "transparent";
    state = false;
  }

  if (topOfPage.getBoundingClientRect().top && !state) {
    dynamicNav.style.backgroundColor = "black";
    state = true;
  }

  requestAnimationFrame(checkScroll);
};

window.addEventListener("scroll", checkScroll);
checkScroll();

window.addEventListener("scroll", () => {
  if (techStack.getBoundingClientRect().top <= 400) {
    imgSlide.classList.add("top-image-active");
    aboutSlide.classList.add("container-about-me-active");
  }
});

window.addEventListener("scroll", () => {
  if (projectSection.getBoundingClientRect().top <= 400) {
    project[0].classList.add("project-flex--width--active");
  }
  if (project[0].getBoundingClientRect().top <= 200) {
    project[1].classList.add("project-flex--width--active");
  }
  if (project[1].getBoundingClientRect().top <= 200) {
    project[2].classList.add("project-flex--width--active");
  }
  if (project[2].getBoundingClientRect().top <= 200) {
    project[3].classList.add("project-flex--width--active");
  }
  if (project[3].getBoundingClientRect().top <= 200) {
    project[4].classList.add("project-flex--width--active");
  }
});

curtains.forEach((curtain) => {
  curtain.addEventListener("mouseover", () => {
    arrows.forEach((arrow) => {
      arrow.classList.add("view-img-active");
    });
  });

  curtain.addEventListener("mouseout", () => {
    arrows.forEach((arrow) => {
      arrow.classList.remove("view-img-active");
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  let textToType = "I am deeply impassioned by the art of web development.";
  let typedElement = document.getElementsByClassName("paragraph__intro")[0];
  let index = 0;
  function typeText() {
    if (index < textToType.length) {
      typedElement.textContent += textToType.charAt(index);
      index++;
      setTimeout(typeText, 65);
    }
  }

  typeText();
});

// document.addEventListener("DOMContentLoaded", function() {

//     const rotatingElement = document.getElementsByClassName('scroll')[0];

//     window.addEventListener('scroll', function() {
//       // Calculate the rotation angle based on the scroll position
//       let rotationfactor = 0.2;
//       const rotationAngle = window.scrollY * rotationfactor;

//       // Apply the rotation to the element
//       rotatingElement.style.transform = `translate(-50%, -50%) rotate(${rotationAngle}deg)`;
//     });
// });

document.addEventListener("DOMContentLoaded", function () {
  const rotatingElement = document.getElementsByClassName("scroll")[0];
  let rotationAngle = 0;

  function updateRotation() {
    // Calculate the rotation angle based on the scroll position with a reduced factor
    const rotationFactor = 0.2; // Adjust this value to control the rotation speed
    rotationAngle = window.scrollY * rotationFactor;

    // Apply the rotation to the element
    rotatingElement.style.transform = `translate(-50%, -50%) rotate(${rotationAngle}deg)`;

    // Request the next animation frame
    requestAnimationFrame(updateRotation);
  }

  // Initial rotation setup
  updateRotation();
});

function initMap() {
  // MAP OPTIONS
  const options = {
    center: { lat: 41.8781, lng: -87.6298 },
    zoom: 10,
  };

  // NEW MAP
  map = new google.maps.Map(document.getElementById("map"), options);

  //MARKER

  const marker = new google.maps.Marker({
    position: { lat: 41.8674, lng: -87.6275 },
    map: map,
  });
}
