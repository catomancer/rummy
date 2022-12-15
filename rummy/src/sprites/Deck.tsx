export class Deck {
    constructor(
        private cards: number[]
    ) {
        this.cards = cards;
    }
      
    // Getters
    get cardsInDeck(): number[] {
      return this.cards;
    }
  };