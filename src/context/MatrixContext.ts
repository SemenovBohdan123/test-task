import { createContext } from "react";

const MatrixContext = createContext<IMatrixContext>({
  matrix: [],
  setMatrix: () => {},
});

export default MatrixContext;
