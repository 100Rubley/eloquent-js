interface ICell {
  x: number;
  y: number;
}

type TRow = boolean[];

export interface IGameStore {
  cells: ICell[],
  board: TRow[],
  makeCells: () => ICell[],
  flipCell: (x: number, y: number) => void;
}
