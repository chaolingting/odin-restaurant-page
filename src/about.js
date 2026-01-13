export function aboutPage(){
  const content = document.querySelector("#content");
  content.classList.add("about-bg");

  const title = document.createElement("p");
  title.textContent = "This is about page.";
  title.classList.add("description");

  content.appendChild(title);

}