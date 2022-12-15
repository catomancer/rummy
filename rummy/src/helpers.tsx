import { Card } from './sprites/Card';
import { Deck } from './sprites/Deck';
import { Hand } from './sprites/Hand';
import { Vector } from './types';
import {
    CARD_WIDTH,
    CARD_HEIGHT,
    CARD_IMAGES
} from './setup';

export function createCard(cardNum: number, pos: Vector): Card[] {
    return [
        new Card(
            CARD_WIDTH,
            CARD_HEIGHT,
            pos,
            CARD_IMAGES[cardNum]
        )
    ];
}

export function createDeck(): Deck {
    var deck = Array.from(Array(52).keys());

    // shuffle deck
    deck.sort(() => Math.random() - 0.5);

    return new Deck(deck);
}