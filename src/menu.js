import catLatte from "./assets/images/cat-latte.jpg";


export function menuPage() {

  const content = document.querySelector("#content");
  content.textContent = "";
  content.classList.add("menu-bg");

  const contentDiv = document.createElement('div');
  contentDiv.classList.add('content-div');


  const title = document.createElement("h2");
  title.textContent = "Menu";
  title.classList.add("menu-title");
  contentDiv.appendChild(title);

  const menuItemDiv = document.createElement("div");
  menuItemDiv.classList.add("menu-item-div");
  contentDiv.appendChild(menuItemDiv);

  const menuItem = [
    {
      name: "purrfect hand-drip coffee",
      description: "Light and floral scent coffee",
      category: "Coffee"
    },
    {
      name: "purrfect latte",
      description: "Light and floral scent coffee",
      category: "Coffee"
    },
    {
      name: "catpuccino",
      description: "Classic cappuccino",
      category: "Coffee"
    },
    {
      name: "meowcha latte",
      description: "Made with japanese matcha and milk foam",
      category: "Tea"
    },
    {
      name: "purrfect cheesecake",
      description: "Classic ny-style cheesecake",
      category: "dessert"
    },
    {
      name: "purr chococake",
      description: "Top 1 chocolate cake in meow cafe",
      category: "dessert"
    },

  ]

const menuCard = menuItem.map( item => {
  const card = document.createElement("div");
  card.classList.add("menu-card");

  const itemName = document.createElement("h3");
  itemName.classList.add("menu-item-name");
  itemName.textContent = item.name;

  const itemDescription = document.createElement("p");
  itemDescription.classList.add("menu-item-description");
  itemDescription.textContent = item.description;

  const itemCategory = document.createElement("p");
  itemCategory.classList.add("menu-item-category");
  itemCategory.textContent = item.category;

  card.append(itemName, itemDescription, itemCategory);
  return card;

});

menuCard.forEach( card =>{ 
  menuItemDiv.appendChild(card);

} )


const latteImg = document.createElement("img");
latteImg.src = catLatte;
latteImg.classList.add("menu-latte-img");

contentDiv.appendChild(latteImg);


  content.append(contentDiv);  
  
}