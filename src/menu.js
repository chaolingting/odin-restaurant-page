  import testImage from "./assets/images/test.jpg";

export function menuPage() {

  const content = document.querySelector("#content");
  content.textContent = "";
  content.classList.add("menu-bg");

  const contentDiv = document.createElement('div');
  contentDiv.classList.add('content-div');

  const aside = document.createElement('aside');
  aside.textContent = "this is aside";
  aside.classList.add("aside-content");

  const title = document.createElement("p");
  title.textContent = "This is menu.";
  title.classList.add("description");



  const img = document.createElement("img");
  img.src = testImage;


  // content.appendChild(title);
  // content.appendChild(aside);

  contentDiv.appendChild(title);
  contentDiv.appendChild(aside);
  contentDiv.appendChild(img); 
  content.append(contentDiv);  
  
}