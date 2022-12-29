export class Hand {
    cards: number[];
    name: String;

    constructor(
        cards: number[],
        name: String
    ) {
        this.cards = cards;
        this.name = name;
    }

    // Getters
    get cardsInHand(): number[] {
        return this.cards;
    }

    get handName(): String {
        return this.name;
    }

    // Setters
    set cardsInHand(cards: number[]) {
        this.cards = cards;
    }
}