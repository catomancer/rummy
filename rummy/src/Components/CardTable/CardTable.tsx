import { Rect } from 'react-konva';

type ICardTable = {
  windowWidth: number
  windowHeight: number
}

export const CardTable = ({ windowWidth, windowHeight }: ICardTable) => {

  const width = 1000;
  const height = 500;

  const top = (windowHeight / 2) - (height / 2);
  const left = (windowWidth / 2) - (width / 2);

  console.log({ top, left, width, height });

  return (
    <Rect
    x={left}
    y={top}
    width={width}
    height={height}
    fill="green"
    />
  );
}