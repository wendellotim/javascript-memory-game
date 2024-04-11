class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    // add the rest of the class properties here
    this.thisPickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }

  shuffleCards() {
    // ... write your code here
      for (let i = this.cards.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
      }
  }

  checkIfPair(card1, card2) {
    // ... write your code here
      this.pairsClicked++;
  
      if (card1 === card2) {
        this.pairsGuessed++;
        return true; 
      } else {
        return false; 
      }
    }

  checkIfFinished() {
    // ... write your code here
return this.pairsGuessed === this.cards.length / 2
  
}
}
