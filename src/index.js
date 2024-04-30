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

const onload = (event) => {
  let html = "";

  document.getElementById("shuffle").addEventListener("click", () => {
    memoryGame.shuffleCards();
    console.log("clicked")
  });
  memoryGame.cards.forEach((pic) => {
    html += `
      <div class="card" data-card-name="${pic.name}">
        <div class="back" name="${pic.img}"></div>
        <div class="front" style="background: url(img/${pic.img}) no-repeat"></div>
      </div>
    `;
  });
  // Add all the divs to the HTML
  /** 
   * Understand the game - done
   * Flip a card
   * ---Add clickevent listener on card - done
   * ---Add the classname turned to the class card in the car - done
   * Flip only two cards -- done
   * Compare the two cards -- done
   * ---If card1 and card2 are not the same flip the cards -- done
   * ---if Card1 and card2 are the same keep them open -- done
   *  
      
   **/

  document.querySelector("#memory-board").innerHTML = html;

  let cardsFlipped = 0;
  const cardLimit = 2;
  let firstFlippedCard;
  let secondFlippedCard;

  // Bind the click event of each element to a function
  document.querySelectorAll(".card").forEach((card) => {
    card.addEventListener("click", () => {
      if (cardsFlipped < cardLimit) {
        card.classList.add("turned");
        cardsFlipped++;

        if (cardsFlipped === 1) {
          firstFlippedCard = card;
        } else if (cardsFlipped === 2) {
          secondFlippedCard = card;

          if (
            firstFlippedCard.dataset.cardName ===
            secondFlippedCard.dataset.cardName
          ) {
            setTimeout(() => {
              firstFlippedCard.parentNode.removeChild(firstFlippedCard);
              secondFlippedCard.parentNode.removeChild(secondFlippedCard);
            }, 1000);
          } else {
            setTimeout(() => {
              firstFlippedCard.classList.remove("turned");
              secondFlippedCard.classList.remove("turned");
            }, 1000);
          }
          cardsFlipped = 0;
        }
      }
    });
  });
};

window.addEventListener("load", onload);
