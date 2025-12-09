const searchInput = document.getElementById("search-input");
const searchBtn = document.getElementById("search-btn");
const cards = document.querySelectorAll(".top1");

function filterCards() {
  const term = searchInput.value.toLowerCase().trim();

  cards.forEach(function (card) {
    const text = card.textContent.toLowerCase();

    if (term === "" || text.includes(term)) {
      card.style.display = "block";  
    } else {
      card.style.display = "none";   
    }
  });
}

searchInput.addEventListener("click", filterCards);

