export function resetPage(bgClass){
  const content = document.querySelector("#content");

  if (content) {
    content.textContent = "";
    content.className = "";
    content.classList.add(bgClass);
  }
}

resetPage();