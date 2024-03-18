import { ChangeEvent } from "react";

export interface ICell {
  x: number;
  y: number;
}

export type TRow = boolean[];

export interface IGameStore {
  cells: ICell[],
  board: TRow[],
  interval: number;
  isRunning: boolean;
  startGame: () => void;
  endGame: () => void;
  makeCells: () => void;
  flipCell: (x: number, y: number) => void;
  updateInterval: (newInteval: ChangeEvent<HTMLInputElement>) => void;
  runIteration: () => void;
  timeoutHandler: number | null;
  handleClear: () => void;
  handleRandom: () => void;
}
