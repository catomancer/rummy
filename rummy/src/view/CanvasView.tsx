// Types
import { createCard } from '../helpers';
import { Card } from '../sprites/Card';
import { Deck } from '../sprites/Deck';
import { Hand } from '../sprites/Hand';
import { CARD_WIDTH, CARD_SPACING, DECK_X, DECK_Y, HAND_START_X, HAND_Y } from '../setup';

export class CanvasView {
    canvas: HTMLCanvasElement;
    private context: CanvasRenderingContext2D | null;
    private scoreDisplay: HTMLObjectElement | null;
    private start: HTMLObjectElement | null;
    private info: HTMLObjectElement | null;

    constructor(canvasName: string) {
        this.canvas = document.querySelector(canvasName) as HTMLCanvasElement;
        this.context = this.canvas.getContext('2d');
        this.scoreDisplay = document.querySelector('#score');
        this.start = document.querySelector('#start');
        this.info = document.querySelector('#info');
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

    drawDeck(deck: Deck): void {
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

    drawHand(hand: Hand): void {
        if (!hand) return;

        console.log("draw hand");
        console.log(hand);
        
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
}