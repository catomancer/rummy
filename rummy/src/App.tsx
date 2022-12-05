import { CanvasView } from './view/CanvasView';
import { Card } from './sprites/Card';
import { Deck } from './types'
import React from 'react';
import logo from './logo.svg';
import './App.css';
// Helpers
import { createDeck } from './helpers';

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
  deck: Deck
) {
  console.log('draw!');
  view.clear();
  view.drawCards(deck);

  // Game Over when player discards final card
  // fill this in

  requestAnimationFrame(() => gameLoop(view, deck));
}

function startGame(view: CanvasView) {
  // Reset displays
  score = 0;
  view.drawInfo('');
  view.drawScore(0);
  // Create all cards
  const deck = createDeck();

  gameLoop(view, deck);
}

function App() {
  return (
    <div id="main" className="main">
      <canvas id="playField" width="1000" height="600"></canvas>
      <img id="background" src="./images/background.png"></img>
      <div id="display">
        <div id="score"></div>
        <button id="start">Start</button>
        <div id="info">Press play!</div>
      </div>
    </div>
  );
}

// Create a new view
const view = new CanvasView('#playField');
view.initStartButton(startGame);

export default App;