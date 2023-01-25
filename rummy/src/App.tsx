import { useEffect, useState } from 'react';
import { Stage, Layer } from 'react-konva';
import { CardTable } from './Components/CardTable/CardTable';
import { Card } from './Components/Card/Card';
import { Deck } from './Components/Deck/Deck';
import { HAND_START_X, HAND_Y } from './setup';

function App() {
  // set window proportionally to browser
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth)
      setWindowHeight(window.innerHeight)
    };

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, [])

  // how to redraw when window size changes?
  return (
    <Stage width={windowWidth} height={windowHeight}>
      <Layer>
        <CardTable windowWidth={windowWidth} windowHeight={windowHeight} />
        <Deck />
        <Card rank={1} suit={'diamonds'} posX={HAND_START_X} posY={HAND_Y} />
      </Layer>
    </Stage>
  );
}

export default App;
