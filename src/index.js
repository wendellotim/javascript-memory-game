import MemoryGame from "./memory.js";

const cards = [
  { name: "aquaman", img: "aquaman.jpg" },
  { name: "batman", img: "batman.jpg" },
  { name: "captain america", img: "captain-america.jpg" },
  { name: "fantastic four", img: "fantastic-four.jpg" },
  { name: "flash", img: "flash.jpg" },
  { name: "green arrow", img: "green-arrow.jpg" },
  { name: "green lantern", img: "green-lantern.jpg" },
  { name: "ironman", img: "ironman.jpg" },
  { name: "spiderman", img: "spiderman.jpg" },
  { name: "superman", img: "superman.jpg" },
  { name: "the avengers", img: "the-avengers.jpg" },
  { name: "thor", img: "thor.jpg" },
  { name: "aquaman", img: "aquaman.jpg" },
  { name: "batman", img: "batman.jpg" },
  { name: "captain america", img: "captain-america.jpg" },
  { name: "fantastic four", img: "fantastic-four.jpg" },
  { name: "flash", img: "flash.jpg" },
  { name: "green arrow", img: "green-arrow.jpg" },
  { name: "green lantern", img: "green-lantern.jpg" },
  { name: "ironman", img: "ironman.jpg" },
  { name: "spiderman", img: "spiderman.jpg" },
  { name: "superman", img: "superman.jpg" },
  { name: "the avengers", img: "the-avengers.jpg" },
  { name: "thor", img: "thor.jpg" },
];

const memoryGame = new MemoryGame(cards);

let flippedCard = [null, null, 0];

function updateElements() {
  let html = "";

  memoryGame.cards.forEach((pic) => {
    html += `
            <div class="card" data-card-name="${pic.name}">
                <div class="back" name="${pic.img}"></div>
                <div class="front" style="background: url(img/${pic.img}) no-repeat"></div>
            </div>
        `;
  });

  const memoryBoardElement = document.querySelector("#memory-board");

  if (memoryBoardElement !== null) {
    memoryBoardElement.innerHTML = html;

    checkCards();
  }
}

function checkCards() {
  document.querySelectorAll(".card").forEach((card) => {
    card.addEventListener("click", () => {
      if (!card.classList.contains("turned")) {
        card.classList.add("turned");
        flippedCard[2]++;

        if (flippedCard[2] === 1) {
          flippedCard[0] = card;
        } else if (flippedCard[2] === 2) {
          flippedCard[1] = card;

          const cardName1 = flippedCard[0].dataset.cardName;
          const cardName2 = flippedCard[1].dataset.cardName;

          const isPair = memoryGame.checkIfPair(cardName1, cardName2);

          if (isPair) {
            setTimeout(() => {
              flippedCard[0].parentNode.removeChild(flippedCard[0]);
              flippedCard[1].parentNode.removeChild(flippedCard[1]);
            }, 1000);
          } else {
            setTimeout(() => {
              flippedCard[0].classList.remove("turned");
              flippedCard[1].classList.remove("turned");
            }, 1000);
          }
          flippedCard[2] = 0;

          if (memoryGame.checkIfFinished()) {
            alert("Congratulations! You found all the pairs.");
          }
        }
      }
    });
  });
}

const onload = (event) => {
  updateElements();

  document.getElementById("shuffle").addEventListener("click", () => {
    memoryGame.shuffleCards();

    updateElements();
  });
};

window.addEventListener("load", onload);
