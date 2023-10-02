import { CELL_SIZE } from "../../constants";
import './Cell.css'

interface ICellProps {
  x: number;
  y: number;
}

export const Cell = ({ x, y }: ICellProps) => {
  return (
    <div className="cell" style={{
      left: `${CELL_SIZE * x + 1}px`,
      top: `${CELL_SIZE * y + 1}px`,
      width: `${CELL_SIZE - 1}px`,
      height: `${CELL_SIZE - 1}px`,
    }} />
  )
}
