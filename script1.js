// DARK MODE TOGGLE
const themeToggle = document.getElementById("theme-toggle");

themeToggle.addEventListener("click", function () {
  // toggle class on <body>
  document.body.classList.toggle("dark-mode");

  // optional: change button text
  if (document.body.classList.contains("dark-mode")) {
    themeToggle.textContent = "Light Mode";
  } else {
    themeToggle.textContent = "Dark Mode";
  }
});


const searchInput = document.getElementById("search-input");
const searchBtn = document.getElementById("search-btn");
const cards = document.querySelectorAll(".top1");

function filterCards() {
  const term = searchInput.value.toLowerCase().trim();

  cards.forEach(function (card) {
    const text = card.textContent.toLowerCase();

    if (term === "" || text.includes(term)) {
      card.style.display = "block";   // show card
    } else {
      card.style.display = "none";    // hide card
    }
  });
}

// Click on button
searchBtn.addEventListener("click", filterCards);

// Also filter when user presses Enter in the input
searchInput.addEventListener("keyup", function (event) {
  if (event.key === "Enter") {
    filterCards();
  }
});

