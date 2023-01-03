import React, { useEffect, useState } from 'react';
import { CardTable } from './Components/CardTable';
import { Card } from './Components/Card';

function App() {
  // set window proportionally to browser
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)
  const [windowHeight, setWindowHeight] = useState(window.innerHeight)

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth)
      setWindowHeight(window.innerHeight)
    }

    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // how to redraw when window size changes?
  return (
    <>
      <CardTable windowWidth = {windowWidth} windowHeight = {windowHeight}>
        <Card 
            rank = {1}
            suit = 'diamonds'
          />
      </CardTable>
    </>
  );
}

export default App;
