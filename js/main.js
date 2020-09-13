// Nav
// ---------------------------------------------------------
const header = document.querySelector(".nav-container");

function checkScroll() {
  let scrollPos = window.scrollY;

  if (scrollPos > 300) {
    header.classList.add("scroll");
    header.classList.remove("no-scroll");
  } else {
    header.classList.add("no-scroll");
    header.classList.remove("scroll");
  }
}

window.addEventListener("scroll", checkScroll);
document.addEventListener("DOMContentLoaded", checkScroll);

// --------------------------------------------------------
const menuToggle = document.querySelector("#menu-togle");
const mobileNavContainer = document.querySelector("#mobile-nav");

menuToggle.onclick = function () {
  menuToggle.classList.toggle("menu-icon-active");
  mobileNavContainer.classList.toggle("mobile-nav--active");
};

// ----------------------------------------------------------

function readMore() {
  const dots = document.getElementById("dots");
  const more = document.getElementById("more");
  const btn = document.getElementById("btn_more_service");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btn.innerHTML = "More";
    more.style.display = "none";
  } else {
    dots.style.display = "none";
    btn.innerHTML = "Hide";
    more.style.display = "inline";
  }
}

function readMore2() {
  var dots = document.getElementById("dots");
  var more = document.getElementById("more2");
  var btn = document.getElementById("btn_more_service2");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btn.innerHTML = "More";
    more.style.display = "none";
  } else {
    dots.style.display = "none";
    btn.innerHTML = "Hide";
    more.style.display = "inline";
  }
}

function readMore3() {
  var dots = document.getElementById("dots");
  var more = document.getElementById("more3");
  var btn = document.getElementById("btn_more_service3");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btn.innerHTML = "More";
    more.style.display = "none";
  } else {
    dots.style.display = "none";
    btn.innerHTML = "Hide";
    more.style.display = "inline";
  }
}

function readMore4() {
  var dots = document.getElementById("dots");
  var more = document.getElementById("more4");
  var btn = document.getElementById("btn_more_service4");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btn.innerHTML = "More";
    more.style.display = "none";
  } else {
    dots.style.display = "none";
    btn.innerHTML = "Hide";
    more.style.display = "inline";
  }
}

// function addHover(hoverElem, appearingElem) {
//     appearingElem.hidden = true;
//   hoverElem.addEventListener("mouseover", function() {
//     appearingElem.hidden = !appearingElem.hidden;
//   } );
//   hoverElem.addEventListener("mouseleave", function() {
//     appearingElem.hidden = !appearingElem.hidden;
//   } );
// }

// addHover( document.querySelector(".visible"), document.querySelector(".hidden") );
// addHover( document.querySelector(".visible2"), document.querySelector(".hidden2") );
// addHover( document.querySelector(".visible3"), document.querySelector(".hidden3") );
// addHover( document.querySelector(".visible4"), document.querySelector(".hidden4") );
filterSelection("all") // Execute the function and show all columns
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("column");
  if (c == "all") c = "";
  // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

// Show filtered elements
function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

// Hide elements that are not selected
function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}

// // Add active class to the current button (highlight it)
// var btnContainer = document.getElementById("myBtnContainer");
// var btns = btnContainer.getElementsByClassName("btn");
// for (var i = 0; i < btns.length; i++) {
//   btns[i].addEventListener("click", function () {
//     var current = document.getElementsByClassName("active");
//     current[0].className = current[0].className.replace(" active", "");
//     this.className += " active";
//   });
// }

