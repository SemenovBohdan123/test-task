const getClosestCells = (
  matrix: Cell[][],
  hoveredCell: Cell | null,
  X: number
) => {
  if (!hoveredCell) {
    return [];
  }

  const hoveredAmount = hoveredCell.amount;

  const differences = matrix.flat().map((item) => ({
    ...item,
    difference: Math.abs(item.amount - hoveredAmount),
  }));
  const closestCells = differences
    .sort((a, b) => a.difference - b.difference)
    .slice(0, X);

  return closestCells;
};

export default getClosestCells;
