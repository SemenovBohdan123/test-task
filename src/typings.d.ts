interface IMatrixContext {
  matrix: Cell[][];
  setMatrix: (matrix: Cell[][]) => void;
}
interface IXContext {
  X: number;
  setX: (matrix: number) => void;
}

interface Cell {
  id: number;
  amount: number;
}

interface Inputs {
  n: number;
  m: number;
  x: number;
}
