import { MutableRefObject } from 'react';
import { COLS, ROWS } from './../constants';

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
  const { left, top } = ref?.current?.getBoundingClientRect() ?? { left: 0, top: 0};
  const { clientLeft, clientTop } = document.documentElement;
  const { scrollX, scrollY } = window;

  return {
    x: (left + scrollX) - clientLeft,
    y: (top + scrollY) - clientTop
  }
}
