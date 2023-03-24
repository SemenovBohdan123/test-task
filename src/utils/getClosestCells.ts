const getClosestCells = (
  matrix: ICell[][],
  hoveredCell: ICell | null,
  X: number
) => {
  if (!hoveredCell) {
    return [];
  }

  const hoveredAmount = hoveredCell.amount;
  const matrixSize = matrix.length;

  const rowIndex = matrix.findIndex((row) => row.includes(hoveredCell));
  const colIndex = matrix[rowIndex].indexOf(hoveredCell);

  const startRow = Math.max(rowIndex - 3, 0);
  const endRow = Math.min(rowIndex + 3, matrixSize - 1);
  const startCol = Math.max(colIndex - 3, 0);
  const endCol = Math.min(colIndex + 3, matrixSize - 1);

  const differences: IDifferencesCell[] = [];

  matrix.forEach((row, i) => {
    if (i < startRow || i > endRow) return;
    row.forEach((item, j) => {
      if (j < startCol || j > endCol || item.id < hoveredCell.id) return;
      differences.push({
        ...item,
        difference: Math.abs(item.amount - hoveredAmount),
      });
    });
  });

  const closestCells = differences
    .sort((a, b) => a.difference - b.difference)
    .slice(0, X);

  return closestCells;
};

export default getClosestCells;
