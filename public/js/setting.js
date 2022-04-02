let btn = document.getElementById("btn");
let country = document.getElementById("country");
let city = document.getElementById("city");

btn.addEventListener("click", () => {
  window.localStorage.setItem("country", country.value);
  window.localStorage.setItem("city", city.value);
});
