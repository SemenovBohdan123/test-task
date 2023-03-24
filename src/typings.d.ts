interface IMatrixContext {
  matrix: Cell[][];
  setMatrix: (matrix: Cell[][]) => void;
}
interface IXContext {
  X: number;
  setX: (matrix: number) => void;
}

interface ICell {
  id: number;
  amount: number;
}
interface IDifferencesCell {
  id: number;
  amount: number;
  difference: number;
}

interface IHoverSum {
  rowIndex: number;
  rowSum: number;
}

interface IInputs {
  n: number;
  m: number;
  x: number;
}
