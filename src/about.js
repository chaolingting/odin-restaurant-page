import catOwnerImg from "./assets/images/cat-owners.jpg"

export function aboutPage(){
  const content = document.querySelector("#content");
  content.classList.add("about-bg");

  const title = document.createElement("h2");
  title.textContent = "About us";
  title.classList.add("about-title");

  const subtitle = document.createElement("p");
  subtitle.textContent = "meow café is owned by bobby and grace since 2025.  we traveled around the world and brought back our favorite flavors to the city to puurrvide the best coffee and tea."
  subtitle.classList.add("about-subtitle");

  const aboutContentDiv = document.createElement("div");
  aboutContentDiv.classList.add("about-content");
  aboutContentDiv.append(title, subtitle);


  const figure = document.createElement("figure");
  const figcap = document.createElement("figcaption");
  figcap.textContent = "bobby and grace";
 
  const ownerImg = document.createElement("img");
  ownerImg.classList.add("owner-img")
  ownerImg.src = catOwnerImg;
  
  figure.appendChild(ownerImg);
  figure.appendChild(figcap);

  aboutContentDiv.appendChild(figure);
  content.appendChild(aboutContentDiv);


}