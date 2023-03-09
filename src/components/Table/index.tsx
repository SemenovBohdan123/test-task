import { FC, useContext } from "react";

import averageColumnValues from "../../utils/averageColumnValues";
import calculateSumOfCell from "../../utils/calculateSumOfCell";

import TableCell from "../common/TableCell";

import MatrixContext from "../../context/MatrixContext";

import "../Table/styles.css";

const Table: FC = () => {
  const { matrix, setMatrix } = useContext(MatrixContext);

  const averageColumnValuesCalculate: number[] = averageColumnValues(matrix);

  const incrementCell = (idToFind: number) => {
    const copyMatrix = [...matrix];
    const foundItem = copyMatrix
      .find((row) => row.some((item) => item.id === idToFind))
      ?.find((item) => item.id === idToFind);

    if (foundItem) {
      foundItem.amount += 1;
    }

    setMatrix(copyMatrix);
  };

  return (
    <table className="table">
      <thead className="table-head">
        <tr>
          <th>Cell values N = 0</th>
          {matrix[0].map((item) => (
            <th>Cell values N ={item.id}</th>
          ))}
          <th>Sum values</th>
        </tr>
      </thead>
      {matrix.length === 0 ? (
        <></>
      ) : (
        <tbody>
          {matrix.map((cellArray: Cell[], index: number) => (
            <tr>
              {`Cell Value M = ${index + 1}`}
              <>
                {cellArray.map((tableCell: Cell) => (
                  <th onClick={() => incrementCell(tableCell.id)}>
                    {tableCell.amount}
                  </th>
                ))}
              </>
              <th>{calculateSumOfCell(cellArray)}</th>
            </tr>
          ))}
        </tbody>
      )}
      <tfoot>
        <tr>
          <th>Avarage value</th>
          {averageColumnValuesCalculate.map((item: number) => (
            <th>{item}</th>
          ))}
        </tr>
      </tfoot>
    </table>
  );
};

export default Table;
