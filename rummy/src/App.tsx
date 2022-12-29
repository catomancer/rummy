import { CanvasView } from './view/CanvasView';
import { Card } from './sprites/Card';
import { Deck } from './sprites/Deck';
import { Hand } from './sprites/Hand';
import React from 'react';
import logo from './logo.svg';
import './App.css';
// Helpers
import { createDeck, createHands } from './helpers';

let gameOver = false;
let score = 0;

function setGameOver(view: CanvasView) {
  view.drawInfo('Game Over!');
  gameOver = true;
}

function setGameWin(view: CanvasView) {
  view.drawInfo('Game Won!');
  gameOver = false;
}

function gameLoop(
  view: CanvasView
) {
  
//  console.log('draw!');
  view.clear();

  // draw Deck
  view.drawDeck(view.deckCards);
  // draw player's hand
  view.drawHand(view.hand1Cards);
  // wait for player to take a card
  view.drawInfo('Take a card from the deck or the discard pile.');
  
  // wait for click
  // fill this in

  // wait for player to discard
  // fill this in
  view.drawInfo('Discard a card from your hand.');

  // check if game won
  // fill this in
  
  // end turn
  // check if deck is depleted
  if (view.deckCards === null) {
    setGameOver(view);
  }
  // switch turn
  if (view.turn === view.hand1Cards) {
    view.playerTurn = view.hand1Cards;
  }
  else {
    view.playerTurn = view.hand2Cards;
  }

  // loop the game if not over
  if (gameOver === false) requestAnimationFrame(() => gameLoop(view));
}

function startGame(view: CanvasView) {
  // Reset displays
  score = 0;
  view.drawInfo('');
  view.drawScore(0);
  // Create deck
  view.deckCards = createDeck();
  console.log(view.deckCards);
  
  // Create both player's hands
  [view.hand1Cards, view.hand2Cards] = createHands(view.deckCards);

  // Create discard pile

  gameLoop(view);
}

function App() {
  return (
    <div id="main" className="main">
      <canvas id="playField" width="1000" height="600"></canvas>
      <img id="background" src={require('./images/background.jpg')} width="1000" height="600"></img>
      <div id="display">
        <div id="score"></div>
        <button id="start">Play</button>
        <div id="info">Press play!</div>
      </div>
    </div>
  );
}

// Create a new view
const view = new CanvasView('#playField');
view.initStartButton(startGame);

export default App;