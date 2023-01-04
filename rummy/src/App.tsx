import React, { useEffect, useState } from 'react';
import { Stage, Layer, Rect } from 'react-konva';
import { CardTable } from './Components/CardTable/CardTable';
import { Card } from './Components/Card/Card';
import { TABLE_WIDTH, TABLE_HEIGHT } from './setup';

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
        <CardTable windowWidth={windowWidth} windowHeight={windowHeight}></CardTable>
        <Card rank={1} suit={'diamonds'} />
        </Layer>
    </Stage>
  );
}

export default App;
