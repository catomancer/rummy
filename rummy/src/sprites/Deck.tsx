import { Card } from './Card';
import { createCard } from '../helpers';
import { Vector } from '../types';
import { DECK_X, DECK_Y } from '../setup';

export class Deck {
  cards: number[];
  pos: Vector;

    constructor(
      cards: number[]
    ) {
        this.cards = cards;
        this.pos = {x: DECK_X, y: DECK_Y};
    }
      
    // Getters
    get cardsInDeck(): number[] {
      return this.cards;
    }

    get position(): Vector {
      return this.pos;
    }

    // Setters
    set cardsInDeck(cards: number[]) {
      this.cards = cards;
    }

  };