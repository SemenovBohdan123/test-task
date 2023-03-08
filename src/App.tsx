import { FC, useState } from "react";

import Table from "./components/Table";
import Form from "./components/Form";

import MatrixContext from "./context/MatrixContext";

import "./App.css";

const App: FC = () => {
  const [matrix, setMatrix] = useState<Cell[][]>([]);

  console.log(matrix, "app.js");

  return (
    <MatrixContext.Provider value={{ matrix, setMatrix }}>
      <div className="main">
        <Form />
        <Table />
      </div>
    </MatrixContext.Provider>
  );
};

export default App;
