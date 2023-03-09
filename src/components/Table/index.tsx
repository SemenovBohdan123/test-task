import { FC, useContext, useState } from "react";

import averageColumnValues from "../../utils/averageColumnValues";
import calculateSumOfCell from "../../utils/calculateSumOfCell";
import getPercent from "../../utils/getPercentOfCell";
import getClosestCells from "../../utils/getClosestCells";

import MatrixContext from "../../context/MatrixContext";

import "../Table/styles.css";

const Table: FC = () => {
  const { matrix, setMatrix } = useContext(MatrixContext);

  const [hoveredCell, setHoveredCell] = useState<Cell | null>(null);

  const averageColumnValuesCalculate: number[] = averageColumnValues(matrix);

  const X = 7;

  const handleMouseOver = (cell: Cell) => {
    setHoveredCell(cell);
  };

  const handleMouseOut = () => {
    setHoveredCell(null);
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

  return (
    <div className="container">
      <table className="table">
        <thead className="table-head">
          <tr>
            <th>Cell values N = 0</th>
            {matrix[0].map((item) => (
              <th key={item.id}>Cell values N ={item.id}</th>
            ))}
            <th>Sum values</th>
          </tr>
        </thead>
        {matrix.length === 0 ? (
          <></>
        ) : (
          <tbody>
            {matrix.map((cellArray: Cell[], index: number) => {
              const rowSum = calculateSumOfCell(cellArray);

              return (
                <tr key={index}>
                  {`Cell Value M = ${index + 1}`}
                  <>
                    {cellArray.map((tableCell: Cell) => (
                      <th
                        style={{
                          backgroundColor: getClosestCells(
                            matrix,
                            hoveredCell,
                            X
                          ).some(
                            (closestCell) => closestCell.id === tableCell.id
                          )
                            ? "yellow"
                            : "white",
                        }}
                        key={tableCell.id}
                        onClick={() => incrementCell(tableCell.id)}
                        onMouseOver={() => handleMouseOver(tableCell)}
                        onMouseOut={handleMouseOut}
                      >
                        {hoveredCell && hoveredCell.id === tableCell.id
                          ? `${tableCell.amount} -> ${getPercent(
                              tableCell.amount,
                              rowSum
                            )}`
                          : tableCell.amount}
                      </th>
                    ))}
                  </>
                  <th>{rowSum}</th>
                </tr>
              );
            })}
          </tbody>
        )}
        <tfoot style={{}}>
          <tr>
            <th>Avarage value</th>
            {averageColumnValuesCalculate.map((item: number, index: number) => (
              <th key={index}>{item}</th>
            ))}
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default Table;
