import { Component } from 'react';
import { Card } from '../Card';
import { Deck } from '../Deck';
import { HAND_START_X, HAND_Y } from '../../setup';

export class Hand extends Component<{currentDeck: Deck}, { cards: number[] }> {
    constructor(props: {currentDeck: Deck) {
        // call parent class constructor
        super(props);

        // take top 7 cards from deck and put them in hand
        let cards = props.currentDeck.state.currentDeck.slice(0,7);
    }

    // need a function to assign numbers that render a card

    // render
    render() {
        return <Card rank={this.state.cardRank} suit={this.state.cardSuit} posX={HAND_START_X} posY={HAND_Y}/>;
    }
}