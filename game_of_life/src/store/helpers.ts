import { MutableRefObject } from 'react';
import { COLS, ROWS } from './../constants';
import { TRow } from './storeTypes';

export const makeEmptyBoard = () => {
  const board: Array<boolean[]> = [];

  for (let y = 0; y < ROWS; y++) {
    board[y] = [];

    for (let x = 0; x < COLS; x++) {
      board[y][x] = false;
    }
  }

  return board;
};

export const getElementOffset = (ref: MutableRefObject<HTMLDivElement | null>) => {
  const { left, top } = ref?.current?.getBoundingClientRect() ?? { left: 0, top: 0 };
  const { clientLeft, clientTop } = document.documentElement;
  const { scrollX, scrollY } = window;

  return {
    x: (left + scrollX) - clientLeft,
    y: (top + scrollY) - clientTop
  }
}

export const calculateNeighbors = (board: TRow[], x: number, y: number) => {
  let neighbors = 0;
  const dirs = [[-1, -1], [-1, 0], [-1, 1], [0, 1], [1, 1], [1, 0], [1, -1], [0, -1]];
  for (let i = 0; i < dirs.length; i++) {
    const dir = dirs[i];
    const y1 = y + dir[0];
    const x1 = x + dir[1];

    if (x1 >= 0 && x1 < COLS && y1 >= 0 && y1 < ROWS && board[y1][x1]) {
      neighbors++;
    }
  }

  return neighbors;
}
