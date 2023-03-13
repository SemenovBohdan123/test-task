import { createContext } from "react";

const XContext = createContext<IXContext>({
  X: 0,
  setX: () => {},
});

export default XContext;
