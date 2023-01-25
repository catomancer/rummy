import { Image } from 'react-konva';
import useImage from 'use-image';
import { CARD_HEIGHT, CARD_WIDTH } from '../../setup';
import cardsheet from '../../images/cardsheet.png';

const suits = [
  'diamonds', 'hearts', 'spades', 'clubs'
];

type ICard = {
  rank: number,
  suit: typeof suits[number]
  posX: number,
  posY: number
};

export const Card = ({ rank, suit, posX, posY }: ICard) => {
  // use rank to get offsetX
  const offsetX = CARD_WIDTH * (rank - 1);
  // use suit to get offsetY
  let offsetY = 0;
  switch (suit) {
    case 'clubs':
      offsetY = 0;
      break;
    case 'diamonds':
      offsetY = CARD_HEIGHT;
      break;
    case 'hearts':
      offsetY = CARD_HEIGHT * 2;
      break;
    case 'spades':
      offsetY = CARD_HEIGHT * 3;
      break;
  }

  // load image
  const [image] = useImage(cardsheet);

  return (
    <Image 
      image={image} 
      crop={{x: offsetX, y: offsetY, width: CARD_WIDTH, height: CARD_HEIGHT}}
      x={posX}
      y={posY}
      width={CARD_WIDTH}
      height={CARD_HEIGHT}
    />
  );
}