import homeImg from "./assets/images/home.jpg";

export function homeContent() {
  const content = document.querySelector("#content");
  content.classList.add("home-bg");

  const topTitles = document.createElement("div");
  topTitles.classList.add("home-top");

  const title = document.createElement("h2");
  title.textContent = "Welcome to meow Café";
  title.classList.add("description");

  const subtitle = document.createElement("p");
  subtitle.textContent = "we puurrvide nice hand-drip coffee and nice cakes."
  subtitle.classList.add("home-subtitle");


  const img = document.createElement("img");
  img.src = homeImg;
  img.classList.add("home-img");

 
   topTitles.appendChild(title);
   topTitles.appendChild(subtitle);
   topTitles.appendChild(img);
   content.append(topTitles);

}