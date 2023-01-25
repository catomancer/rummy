import { Component } from 'react';
import { Card } from '../Card';
import { DECK_X, DECK_Y } from '../../setup';

export class Deck extends Component<{}, { currentDeck: number[], topCardRank: number, topCardSuit: string }> {
    constructor(props: {test: 'none'}) {//fix this
        // call parent class constructor
        super(props);

        // create deck
        let deck = Array.from(Array(52).keys());
        // shuffle deck
        deck.sort(() => Math.random() - 0.5);
        // get top card
        const topCard = deck[0];
        // map top card to suit and rank
        const rank = topCard % 13;
        let suit = 'none';

        if (Math.floor(topCard / 13) === 0) {
            suit = 'clubs';
        }
        else if (Math.floor(topCard / 13) === 1) {
            suit = 'diamonds';
        }
        else if (Math.floor(topCard / 13) === 2) {
            suit = 'hearts';
        }
        else if (Math.floor(topCard / 13) === 3) {
            suit = 'spades';
        }
        else {
            console.log('Error generating deck');
        }

        // save deck 
        this.state = {
            currentDeck: deck,
            topCardRank: rank,
            topCardSuit: suit
        }
    }

    // take a card
 
    // render
    render() {
        return <Card rank={this.state.topCardRank} suit={this.state.topCardSuit} posX={DECK_X} posY={DECK_Y}/>;
    }
}