// Types
import { createCard } from '../helpers';
import { Card } from '../sprites/Card';
import { Deck } from '../sprites/Deck';
import { Hand } from '../sprites/Hand';
import { CARD_WIDTH, CARD_HEIGHT, CARD_SPACING, DECK_X, DECK_Y, HAND_START_X, HAND_Y } from '../setup';

export class CanvasView {
    canvas: HTMLCanvasElement;
    deck: Deck | null;
    hand1: Hand | null;
    hand2: Hand | null;
    turn: Hand | null;
    private context: CanvasRenderingContext2D | null;
    private scoreDisplay: HTMLObjectElement | null;
    private start: HTMLObjectElement | null;
    private info: HTMLObjectElement | null;

    constructor(
        canvasName: string
        ) {
        this.canvas = document.querySelector(canvasName) as HTMLCanvasElement;
        this.deck = null;
        this.hand1 = null;
        this.hand2 = null;
        this.turn = null;
        this.context = this.canvas.getContext('2d');
        this.scoreDisplay = document.querySelector('#score');
        this.start = document.querySelector('#start');
        this.info = document.querySelector('#info');
        // make clickable
        this.canvas.addEventListener(`click`, (evt) => this.handleClick(evt.x, evt.y, this.deck, this.turn));
    }

    clear(): void {
        this.context?.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }

    initStartButton(startFunction: (view: CanvasView) => void): void {
        this.start?.addEventListener('click', () => startFunction(this));
    }

    drawScore(score: number): void {
        if (this.scoreDisplay) this.scoreDisplay.innerHTML = score.toString();
    }

    drawInfo(text: string): void {
        if (this.info) this.info.innerHTML = text;
    }

    drawSprite(card: Card): void {
        if (!card) return;

        this.context?.drawImage(
            card.image,
            card.pos.x,
            card.pos.y,
            card.width,
            card.height
        );
    }

    drawDeck(deck: Deck | null): void {
        if (!deck) return;

        //create top card
        var first = deck.cards.find(Boolean);
        if (first) {
            var topCard = createCard(first, {x: DECK_X, y: DECK_Y});

            // draw top card
            this.drawSprite(topCard);
        }
        else {
            console.log(deck);
        }
    }

    drawHand(hand: Hand | null): void {
        if (!hand) return;

    /*    console.log("draw hand");
        console.log(hand); */
        
        // create X position
        var curX = HAND_START_X;
        
        // loop through the hand and draw each card next to each other 
        hand.cards.forEach((card, index) => {
            if (index > 0) {
                curX = curX + CARD_WIDTH + CARD_SPACING;
            }

            this.drawSprite(createCard(card, {x: curX, y: HAND_Y}))
        });
    }

    private handleClick(x: number, y: number, deck: Deck | null, hand: Hand | null): void {
        if (!x || !y || !deck || !hand) return;

        console.log("handle click");

        // determine if click in deck, discard pile, or hand
        if (x >= DECK_X && x <= DECK_X + CARD_WIDTH && y >= DECK_Y && x <= DECK_Y + CARD_HEIGHT) {
            // deck is clicked
            // add deck card to hand
            // fix this
            if (hand.name === 'Hand 1') {
                deck.cardsInDeck.push(deck.cardsInDeck.slice(0));
            }
            else {
                deck.cardsInDeck.push(deck.cardsInDeck.slice(0));
            }
            
            // redraw deck
            this.drawDeck(deck);

            // redraw hand
            this.drawHand(hand);
        }
    }

    takeCard(card: number | null, deck: Deck, hand: Hand): void {
        if (!card || !deck || !hand) return;

        console.log("take card");

        // add card to hand
         hand.cards.push(card);

        // redraw hand
        this.drawHand(hand);
    }

    // Getters
    get deckCards() {
        return this.deck;
    }

    get hand1Cards() {
        return this.hand1;
    }

    get hand2Cards() {
        return this.hand2;
    }

    get playerTurn() {
        return this.turn;
    }

    // Setters
    set deckCards(deck: Deck | null) {
        this.deck = deck;
    }

    set hand1Cards(hand1: Hand | null) {
        this.hand1 = hand1;
    }

    set hand2Cards(hand2: Hand | null) {
        this.hand2 = hand2;
    }

    set playerTurn(turn: Hand | null) {
        this.turn = turn;
    }
}