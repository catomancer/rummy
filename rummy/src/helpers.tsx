import { Card } from './sprites/Card';
import { Deck } from './sprites/Deck';
import { Hand } from './sprites/Hand';
import { Vector } from './types';
import {
    CARD_WIDTH,
    CARD_HEIGHT,
    CARD_IMAGES
} from './setup';

export function createCard(cardNum: number, pos: Vector): Card {
    return new Card(
        CARD_WIDTH, 
        CARD_HEIGHT, 
        pos, 
        CARD_IMAGES[cardNum]
        );
}

export function createDeck(): Deck {
    var deck = Array.from(Array(52).keys());

    // shuffle deck
    deck.sort(() => Math.random() - 0.5);

    return new Deck(deck);
}

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
}