import { Rect } from 'react-konva';
import { TABLE_WIDTH, TABLE_HEIGHT } from '../../setup';

type ICardTable = {
  windowWidth: number
  windowHeight: number
}

export const CardTable = ({ windowWidth, windowHeight }: ICardTable) => {

  const width = TABLE_WIDTH;
  const height = TABLE_HEIGHT;

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