import { create } from 'zustand'
import { IGameStore } from './storeTypes'
import { makeEmptyBoard } from './helpers'
import { COLS, ROWS } from '../constants';

export const useGameStore = create<IGameStore>((set, get) => ({
  cells: [],
  board: makeEmptyBoard(),
  interval: 100,
  isRunning: false,
  startGame: () => set({ isRunning: true }),
  endGame: () => set({ isRunning: false }),
  updateInterval: (newInterval) => set({ interval: Number.parseInt(newInterval.currentTarget.value, 10) }),
  makeCells: () => {
    const { cells, board } = get();

    for (let y = 0; y < ROWS; y++) {
      for (let x = 0; x < COLS; x++) {
        if (board[y][x]) {
          cells.push({ x, y })
        }
      }
    }

    return cells;
  },
  flipCell: (x, y) => {
    const { board } = get();

    board[y][x] = !board[y][x];
    set({ board: board });
  },
}))
