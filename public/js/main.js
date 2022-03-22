let modo = document.getElementById("modo");
let html = document.getElementsByTagName("html");
let navbar = document.getElementById("navbar");

modo.onclick = () => {
  modo.classList.toggle("open");
  if (modo.classList.contains("open") === true) {
    window.localStorage.setItem("modo", "light");
    navbar.classList.remove("navbar-dark");
    navbar.classList.add("navbar-light");
    modo.innerText = "الوضع الداكن";
    html[0].style.cssText =
      "--main-color: #ececec;--main-bg-color:#fff;--color-ddd: #111; --color-white: #000";
  } else {
    window.localStorage.setItem("modo", "dark");
    navbar.classList.add("navbar-dark");
    navbar.classList.remove("navbar-light");
    modo.innerText = "الوضع المضيء";
    html[0].style.cssText =
      "--main-color: #1d2239;--main-bg-color: #292e48;--color-ddd: #ddd;--color-white: #fff;";
  }
};

if (window.localStorage.getItem("modo") == "light") {
  navbar.classList.remove("navbar-dark");
  navbar.classList.add("navbar-light");
  modo.innerText = "الوضع الداكن";
  html[0].style.cssText =
    "--main-color: #ececec;--main-bg-color:#fff;--color-ddd: #111; --color-white: #000";
} else {
  navbar.classList.add("navbar-dark");
  navbar.classList.remove("navbar-light");
  window.localStorage.setItem("modo", "dark");
  modo.innerText = "الوضع المضيء";
  html[0].style.cssText =
    "--main-color: #1d2239;--main-bg-color: #292e48;--color-ddd: #ddd;--color-white: #fff;";
}
