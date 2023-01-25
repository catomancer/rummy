export const test = 1;
/*import { Deck } from './sprites/Deck';
import { Hand } from './sprites/Hand';

export function createHands(deck: Deck): [Hand, Hand] {
    // get top 14 cards from deck
    var hands = deck.cards.slice(0,14);
    console.log("after splice");
    console.log(deck.cards);
    // remove top 14 cards from deck
    deck.cardsInDeck = deck.cards.slice(15,52);
    console.log("after deck splice");
    console.log(deck.cards);

    // assign every other card to hands
    var hand1 = hands.filter((element, index) => {
        return index % 2 === 0;
    })

    var hand2 = hands.filter((element, index) => {
        return index % 2 !== 0;
    })

    return [new Hand(hand1, 'Hand 1'), new Hand(hand2, 'Hand 2')];
}*/