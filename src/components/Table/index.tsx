import { FC, useContext } from "react";

import averageColumnValues from "../../utils/averageColumnValues";
import calculateSumOfCell from "../../utils/calculateSumOfCell";

import TableCell from "../common/TableCell";

import MatrixContext from "../../context/MatrixContext";

import "../Table/styles.css";

const Table: FC = () => {
  const { matrix, setMatrix } = useContext(MatrixContext);

  const averageColumnValuesCalculate = averageColumnValues(matrix);

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
          {matrix.map((cellArray, index) => (
            <tr>
              {`Cell Value M = ${index + 1}`}
              <>
                {cellArray.map((tableCell) => (
                  <TableCell>{tableCell.amount}</TableCell>
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
          {averageColumnValuesCalculate.map((item) => (
            <th>{item}</th>
          ))}
        </tr>
      </tfoot>
    </table>
  );
};

export default Table;
