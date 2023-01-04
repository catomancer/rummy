import { Image } from 'react-konva';
import { CARD_HEIGHT, CARD_WIDTH } from '../../setup';
import cardsheet from '../../images/cardsheet.png';

const suits = [
  'diamonds', 'hearts', 'spades', 'clubs'
];

type ICard = {
  rank: number,
  suit: typeof suits[number]
};

export const Card = ({ rank, suit }: ICard ) => {
  // use rank to get offsetX
  const offsetX = CARD_WIDTH * rank;
  // use suit to get offsetY
  let offsetY = 0;
  switch (suit) {
    case 'diamonds':
      offsetY = CARD_HEIGHT * 1;
      break;
    case 'hearts':
      offsetY = CARD_HEIGHT * 2;
      break;
    case 'spades':
      offsetY = CARD_HEIGHT * 3;
      break;
    case 'clubs':
      offsetY = CARD_HEIGHT * 4;
      break;
  }

  return (
    <Image 
      x={100}
      y={100}
      width={CARD_WIDTH}
      height={CARD_HEIGHT}
      offsetX={offsetX}
      offsetY={offsetY}
      image={cardsheet} // how to render an image?
    />
  );
}