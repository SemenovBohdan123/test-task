import { FC, useState } from "react";

import Table from "./components/Table";
import Form from "./components/Form";

import MatrixContext from "./context/MatrixContext";
import XContext from "./context/XContext";

import "./App.css";

const App: FC = () => {
  const [matrix, setMatrix] = useState<Cell[][]>([]);
  const [X, setX] = useState<number>(0);

  console.log(matrix);
  return (
    <MatrixContext.Provider value={{ matrix, setMatrix }}>
      <XContext.Provider value={{ X, setX }}>
        <div className="main">
          <Form />
          {matrix.length !== 0 ? (
            <Table />
          ) : (
            <div className="container_enter_data">
              Enter data for generate table
            </div>
          )}
        </div>
      </XContext.Provider>
    </MatrixContext.Provider>
  );
};

export default App;
