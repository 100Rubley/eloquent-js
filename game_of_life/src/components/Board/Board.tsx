import { MouseEvent, useCallback, useRef } from 'react'
import { CELL_SIZE, COLS, HEIGHT, ROWS, WIDTH } from '../../constants'
import './Board.css'
import { getElementOffset } from '../../store/helpers';
import { useGameStore } from '../../store/store';
import { Cell } from '../Cell/Cell';

export const Board = () => {
  const { flipCell, makeCells, cells } = useGameStore(state => state);
  const boardRef = useRef<HTMLDivElement>(null);

  const handleClick = useCallback((e: MouseEvent<HTMLDivElement>) => {
    const elementOffset = getElementOffset(boardRef);
    const offsetX = e.clientX - elementOffset.x;
    const offsetY = e.clientY - elementOffset.y;

    const x = Math.floor(offsetX / CELL_SIZE);
    const y = Math.floor(offsetY / CELL_SIZE);

    if (x >= 0 && x <= COLS && y >= 0 && y <= ROWS) {
      flipCell(x, y);
    }

    makeCells();
  }, [flipCell, makeCells])

  return (
    <div className="board"
      style={{ width: WIDTH, height: HEIGHT, backgroundSize: `${CELL_SIZE}px ${CELL_SIZE}px` }}
      ref={boardRef}
      onClick={handleClick}
    >
      {cells.map(({ x, y }) => {
        return <Cell x={x} y={y} key={`${x},${y}`} />
      })}
    </div>
  )
}
