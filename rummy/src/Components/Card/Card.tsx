const CARD_WIDTH = 50;
const CARD_HEIGHT = 100;

const suits = [
  'diamonds', 'hearts', 'spades', 'clubs'
];

type ICard = {
  rank: number,
  suit: typeof suits[number]
};

export const Card = ({ rank, suit }: ICard ) => {
  const divStyle = {
    marginTop: 100,
    marginLeft: 100,
    width: CARD_WIDTH,
    height: CARD_HEIGHT,
    backgroundColor: '#FFFFFF'
  };

  return (
    <div style={divStyle}></div>
  );
}