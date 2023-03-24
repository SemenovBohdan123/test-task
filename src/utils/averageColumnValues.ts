const averageColumnValues = (matrix: Array<Array<ICell>>): Array<number> => {
  const numColumns = matrix[0].length;
  const numRows = matrix.length;
  const columnSums = new Array<number>(numColumns).fill(0);

  matrix.forEach((row) => {
    row.forEach((cell, index) => {
      columnSums[index] += cell.amount;
    });
  });

  const averages = columnSums.map((sum) => Number((sum / numRows).toFixed(1)));

  return averages;
};

export default averageColumnValues;
