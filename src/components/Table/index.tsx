import { FC, useContext, useState } from "react";

import averageColumnValues from "../../utils/averageColumnValues";
import calculateSumOfCell from "../../utils/calculateSumOfCell";
import getPercent from "../../utils/getPercentOfCell";
import getClosestCells from "../../utils/getClosestCells";

import MatrixContext from "../../context/MatrixContext";

import "../Table/styles.css";
import XContext from "../../context/XContext";

const Table: FC = () => {
  const { matrix, setMatrix } = useContext(MatrixContext);
  const { X, setX } = useContext(XContext);

  const [closestCellArray, setClosestCellArray] = useState<Cell[]>([]);

  const [hoverSum, setHoverSum] = useState<any>(null);

  const averageColumnValuesCalculate: number[] = averageColumnValues(matrix);

  const handleMouseOver = (cell: Cell) => {
    const closestCell = getClosestCells(matrix, cell, X);

    setClosestCellArray(closestCell);
  };

  const handleMouseOut = () => {
    setClosestCellArray([]);
  };

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

  const onDeleteRow = (index: number) => {
    const copyMatrix = [...matrix];

    copyMatrix.splice(index, 1);

    setMatrix(copyMatrix);
  };

  const onCreateRow = () => {
    const copyMatrix = [...matrix];

    const lastElement =
      matrix[matrix.length - 1][matrix[matrix.length - 1].length - 1];

    let cellId = lastElement.id;

    const row = [];
    for (let j = 0; j < matrix[0].length; j++) {
      const cell = {
        id: ++cellId,
        amount: Math.floor(Math.random() * 101),
      };
      row.push(cell);
      cellId++;
    }
    copyMatrix.push(row);

    setMatrix(copyMatrix);
  };

  const getBackgroundCell = (id: number) => {
    const findCell = closestCellArray.find((item) => item.id === id);

    const color = findCell ? "yellow" : "white";

    return color;
  };

  const getBackgroundCellForSum = (id: number, percent: string) => {
    const tableCell = matrix[hoverSum.rowIndex].find((item) => item.id === id);

    if (tableCell) {
      const gradient = `linear-gradient(to bottom, #2196f3 ${percent}, #fff ${percent})`;

      return gradient;
    }

    return "white";
  };

  return (
    <div className="container">
      <table className="table">
        <thead className="table-head">
          <tr>
            <th>Cell values N = 0</th>
            {matrix[0].map((item: Cell, index: number) => (
              <th key={item.id}>Cell values N = {index + 1}</th>
            ))}
            <th>Sum values</th>
          </tr>
        </thead>
        {
          <tbody>
            {matrix.map((cellArray: Cell[], rowIndex: number) => {
              const rowSum = calculateSumOfCell(cellArray);

              return (
                <tr key={rowIndex}>
                  <th>
                    {`Cell Value M = ${rowIndex + 1}`}
                    <button
                      className="delete_button"
                      onClick={() => onDeleteRow(rowIndex)}
                    >
                      x
                    </button>
                  </th>
                  <>
                    {cellArray.map((tableCell: Cell) => (
                      <th
                        style={{
                          background: hoverSum
                            ? getBackgroundCellForSum(
                                tableCell.id,
                                getPercent(tableCell.amount, rowSum)
                              )
                            : getBackgroundCell(tableCell.id),
                        }}
                        key={tableCell.id}
                        onClick={() => incrementCell(tableCell.id)}
                        onMouseOver={() => handleMouseOver(tableCell)}
                        onMouseOut={handleMouseOut}
                      >
                        {hoverSum?.rowIndex === rowIndex
                          ? `${tableCell.amount} -> ${getPercent(
                              tableCell.amount,
                              rowSum
                            )}`
                          : tableCell.amount}
                      </th>
                    ))}
                  </>
                  <th
                    onMouseOut={() => setHoverSum(null)}
                    onMouseOver={() => setHoverSum({ rowIndex, rowSum })}
                  >
                    {rowSum}
                  </th>
                </tr>
              );
            })}
          </tbody>
        }
        <tfoot>
          <tr>
            <th>Avarage value</th>
            {averageColumnValuesCalculate.map((item: number, index: number) => (
              <th key={index}>{item}</th>
            ))}
            <th></th>
          </tr>
          <tr>
            <th className="create-row">
              Create row <button onClick={onCreateRow}>+</button>
            </th>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default Table;
