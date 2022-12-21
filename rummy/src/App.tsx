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
  gameOver = false;
}

function setGameWin(view: CanvasView) {
  view.drawInfo('Game Won!');
  gameOver = false;
}

function gameLoop(
  view: CanvasView,
  deck: Deck,
  hand1: Hand,
  hand2: Hand,
  turn: Boolean
) {
//  console.log('draw!');
  view.clear();
  // determine whose turn it is
  if (turn) {
      // draw Deck
    view.drawDeck(deck, hand1);
    //draw player's hand
    view.drawHand(hand1);
  }
  else {
      // draw Deck
    view.drawDeck(deck, hand2);
    // draw player's hand
    view.drawHand(hand2);
  }

  // Game Over when player discards final card
  // fill this in

  requestAnimationFrame(() => gameLoop(view, deck, hand1, hand2, !turn));
}

function startGame(view: CanvasView) {
  // Reset displays
  score = 0;
  view.drawInfo('');
  view.drawScore(0);
  // Set turn
  var turn = true;
  // Create deck
  const deck = createDeck();

  // Create both player's hands
  let [hand1, hand2] = createHands(deck);
/*  console.log("hand 1");
  console.log(hand1);
  console.log("hand 2");
  console.log(hand2); */
  // Create discard pile

  gameLoop(view, deck, hand1, hand2, turn);
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