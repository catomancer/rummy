import { Card } from "./Card";

export class Hand {
    constructor(
        private hand: Card[]
    ) {
        this.hand = hand;
    }

    // Getters
    get cardsInHand(): Card[] {
        return this.hand;
    }
}