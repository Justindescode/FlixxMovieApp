const global = {
  currentPage: window.location.pathname,
};
//Variables
const links = document.querySelectorAll(".nav-link");

// Highlight active link
const highLightActiveLink = function () {
  links.forEach((link) => {
    if (link.getAttribute("href") === global.currentPage) {
      link.classList.add("active");
    }
  });
};

//Init App
function init() {
  switch (global.currentPage) {
    case "/":
    case "index.html":
    case "/":
      console.log("Home");
      break;
    case "/shows.html":
      console.log("Shows");
      break;
    case "/movie-details.html":
      console.log("Movie Details");
      break;
    case "/tv-details.html":
      console.log("TV Details");
      break;
    case "/search.html":
      console.log("search");
      break;
  }
  highLightActiveLink();
}
