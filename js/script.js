const menu = document.querySelector(".menu");
const navbar = document.querySelector(".navbar");
menu.addEventListener("click", () => {
  navbar.classList.toggle("active");
  window.addEventListener("scroll", () => {
    navbar.classList.remove("active", window.scrollY > 100);
  });
});
// light mode
const changeMode = document.querySelector(".change-mode");
const theme = localStorage.getItem("theme");
if (theme) {
  document.body.classList.add("light-mode");
}
changeMode.addEventListener("click", () => {
  document.body.classList.toggle("light-mode");
  if (document.body.classList.contains("light-mode")) {
    localStorage.setItem("theme", "light-mode");
  } else {
    localStorage.removeItem("theme");
  }
});
// arrow top
const arrowTop = document.querySelector(".arrow-top");
window.addEventListener("scroll", () => {
  arrowTop.classList.toggle("show", window.scrollY > 100);
});
arrowTop.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
// stiky header
const header = document.querySelector(".header");
window.addEventListener("scroll", () => {
  header.classList.toggle("stiky", window.scrollY > 48);
});
// title change
const docTitle = document.title;
window.addEventListener("blur", () => {
  document.title = "Come Back :(";
});
window.addEventListener("focus", () => {
  document.title = docTitle;
});
