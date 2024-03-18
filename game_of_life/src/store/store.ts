import { create } from 'zustand'
import { IGameStore } from './storeTypes'
import { calculateNeighbors, makeEmptyBoard } from './helpers'
import { COLS, ROWS } from '../constants';

export const useGameStore = create<IGameStore>((set, get) => ({
  cells: [],
  board: makeEmptyBoard(),
  interval: 100,
  isRunning: false,
  timeoutHandler: null,
  startGame: () => {
    const { runIteration } = get();

    set({ isRunning: true });
    runIteration();
  },
  endGame: () => {
    const { timeoutHandler } = get();

    set({ isRunning: false })

    if (timeoutHandler) {
      window.clearTimeout(timeoutHandler);
      set({ timeoutHandler: null })
    }
  },
  updateInterval: (newInterval) => set({ interval: Number.parseInt(newInterval.currentTarget.value, 10) }),
  makeCells: () => {
    const { board } = get();

    const cells = [];

    for (let y = 0; y < ROWS; y++) {
      for (let x = 0; x < COLS; x++) {
        if (board[y][x]) {
          cells.push({ x, y })
        }
      }
    }

    set({ cells: cells });
  },
  flipCell: (x, y) => {
    const { board } = get();

    board[y][x] = !board[y][x];
    set({ board: board });
  },
  runIteration: () => {
    const { board, makeCells, runIteration, interval } = get();
    const newBoard = makeEmptyBoard();

    for (let y = 0; y < ROWS; y++) {
      for (let x = 0; x < COLS; x++) {
        const neighbors = calculateNeighbors(board, x, y);

        if (board[y][x]) {
          if (neighbors === 2 || neighbors === 3) {
            newBoard[y][x] = true;
          } else {
            newBoard[y][x] = false;
          }
        } else {
          if (!board[y][x] && neighbors === 3) {
            newBoard[y][x] = true;
          }
        }
      }
    }

    const newTimoutHandler = window.setTimeout(() => {
      runIteration();
    }, interval)
    makeCells();

    set({ board: newBoard, timeoutHandler: newTimoutHandler })
  },
  handleClear: () => {
    const board = makeEmptyBoard();

    set({ board: board, cells: [] })
  },
  handleRandom: () => {
    const { makeCells, board } = get();
    for (let y = 0; y < ROWS; y++) {
      for (let x = 0; x < COLS; x++) {
        board[y][x] = (Math.random() >= 0.5);
      }
    }
    makeCells()
    set({ board: board });

  }
}))
