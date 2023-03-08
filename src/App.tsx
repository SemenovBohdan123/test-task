import { FC, useState } from "react";

import Table from "./components/Table";
import Form from "./components/Form";

import "./App.css";

const App: FC = () => {
  const [matrix, setMatrix] = useState();

  return (
    <div className="main">
      <Form />
      <Table />
    </div>
  );
};

export default App;
