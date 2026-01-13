export function homeContent() {
  const content = document.querySelector("#content");
  content.classList.add("home-bg");

  const title = document.createElement("p");
  title.textContent = "This is a resturant.";
  title.classList.add("description");

  content.appendChild(title);
}