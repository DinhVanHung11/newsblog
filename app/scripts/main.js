const progressBar = document.querySelector(".progress-bar");
const header = document.querySelector(".header");
const backToTop = document.querySelector(".back-to-top");
window.addEventListener("scroll", (e) => {
  const srollY = window.pageYOffset;
  const height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  const width = (scrollY / height) * 100;
  progressBar.style.width = `${width}%`;
  const headerHeight = header.offsetHeight;
  if (srollY >= headerHeight) {
    header.classList.add("is-fixed");
    backToTop.classList.add("is-show");
  } else {
    header.classList.remove("is-fixed");
    backToTop.classList.remove("is-show");
  }
});

const headerDropdown = document.querySelector(".header-menu-dropdown");
const dropdown = document.querySelector(".header-dropdown");
headerDropdown.addEventListener("click", (e) => {
  dropdown.classList.toggle("active");
  const angleDown = document.querySelector(".header-menu-down");
  angleDown.classList.toggle("fa-angle-up");
  angleDown.classList.toggle("fa-angle-down");
});

const headerSideBar = document.querySelector(".header-sidebar-bar");
const headerSearch = document.querySelector(".header-search");
const headerMenu = document.querySelector(".header-menu");
headerSideBar.addEventListener("click", (e) => {
  headerSearch.classList.toggle("active");
  headerMenu.classList.toggle("active");
  e.target.classList.toggle("fa-bars");
  e.target.classList.toggle("fa-times");
});

$(document).ready(function () {
  $(".feature-main-list").slick({
    dots: true,
    autoplay: true,
    autoplaySpeed: 2200,
    prevArrow:
      "<button type='button' class='slick-prev pull-left'><i class='fas fa-angle-left' aria-hidden='true'></i></button>",
    nextArrow:
      "<button type='button' class='slick-next pull-right'><i class='fas fa-angle-right' aria-hidden='true'></i></button>",
    responsive: [
      {
        breakpoint: 767,
        settings: {
          arrows: false,
        },
      },
    ],
  });
  const slickArrow = document.querySelectorAll(".slick-arrow");
  const feature = document.querySelector(".feature");
  feature.addEventListener("mouseenter", () => {
    [...slickArrow].forEach((item) => {
      item.style.opacity = "1";
      item.style.visibility = "visible";
    });
  });
  feature.addEventListener("mouseleave", () => {
    [...slickArrow].forEach((item) => {
      item.style.opacity = "0";
      item.style.visibility = "hidden";
    });
  });
});

const regexEmail =
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
const inputSubcribe = document.querySelector(".subcribe-input");
const checkIcon = document.querySelector(".fa-check");
inputSubcribe.addEventListener("input", (e) => {
  const value = e.target.value;
  if (value === "") {
    e.target.classList.remove("valid");
    e.target.classList.remove("invalid");
  } else if (regexEmail.test(value.trim())) {
    e.target.classList.add("valid");
    e.target.classList.remove("invalid");
    checkIcon.style.display = "block";
  } else {
    e.target.classList.add("invalid");
    e.target.classList.remove("valid");
  }
});

const subcribeBtn = document.querySelector(".subcribe-btn");
subcribeBtn.addEventListener("click", (e) => {
  e.preventDefault();
});

const sideBar = document.querySelector(".sidebar");
const showSideBar = document.querySelector(".show-sidebar");
const hideSideBar = document.querySelector(".hide-sidebar");
const coords = hideSideBar.getBoundingClientRect();
const leftHideSidebar = hideSideBar.offsetLeft;
showSideBar.style.top = `${coords.top}px`;
showSideBar.style.right = `${leftHideSidebar}px`;

showSideBar.addEventListener("click", (e) => {
  e.target.classList.toggle("fa-angle-double-right");
  setTimeout(() => {
    sideBar.style.transform = "translateX(0)";
  }, 200);
});
hideSideBar.parentNode.addEventListener("click", () => {
  showSideBar.classList.remove("fa-angle-double-right");
  sideBar.style.transform = "translateX(100%)";
});

const moonParent = document.querySelector(".header-moon");
const moon = document.querySelector(".body-light");
const feature = document.querySelector(".feature");
// const top = document.querySelector(".top");
const pick = document.querySelector(".pick");
const fashion = document.querySelector(".fashion");
const beauty = document.querySelector(".beauty");
const trending = document.querySelector(".trending");
const subcribe = document.querySelector(".subcribe");
const subcribeContainer = document.querySelector(".subcribe-container");
const pickTitle = document.querySelectorAll(".pick-editor-title");
const headerLogoText = document.querySelectorAll(".header-logo-text");
const footer = document.querySelector(".footer");
moonParent.addEventListener("click", (e) => {
  moon.classList.toggle("far");
  moon.classList.toggle("fa-moon");
  moon.classList.toggle("fas");
  moon.classList.toggle("fa-sun");
  if (moon.classList.contains("fa-sun")) {
    header.style.background = "#131617";
    document.body.style.color = "#fff";
    feature.style.background = "#0B0D0E";
    feature.nextElementSibling.style.background = "#131617";
    pick.style.background = "#000000";
    fashion.style.background = "#000000";
    beauty.style.background = "#0B0D0E";
    trending.style.background = "#000000";
    subcribe.style.background = "#0B0D0E";
    subcribeContainer.style.background = "#131617";
    footer.style.background = "#131617";
    [...pickTitle].forEach((item) => (item.style.color = "#131617"));
    [...headerLogoText].forEach((item) => (item.style.color = "#fff"));
  } else {
    header.style.background = "#fff";
    document.body.style.color = "#2d3748";
    feature.style.background = "#f4f4f4";
    feature.nextElementSibling.style.background = "#fff";
    pick.style.background = "#f8f9fa";
    fashion.style.background = "#f8f9fa";
    beauty.style.background = "#f4f4f4";
    trending.style.background = "#f8f9fa";
    subcribe.style.background = "#f4f4f4";
    subcribeContainer.style.background = "white";
    footer.style.background = "white";
    [...headerLogoText].forEach((item) => (item.style.color = "#2d3748"));
  }
});
