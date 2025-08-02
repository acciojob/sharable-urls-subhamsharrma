// your code here
const form = document.getElementById("form");
const url = document.getElementById("url");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const year = document.getElementById("year").value.trim();

  let query = [];

  if (name !== "") query.push("name=" + encodeURIComponent(name));
  if (year !== "") query.push("year=" + encodeURIComponent(year));

  url.textContent = "https://localhost:8080/" + (query.length ? "?" + query.join("&") : "");
});
