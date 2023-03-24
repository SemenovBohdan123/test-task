const getClosestCells = (
  matrix: ICell[][],
  hoveredCell: ICell | null,
  X: number
) => {
  if (!hoveredCell) {
    return [];
  }

  const hoveredAmount = hoveredCell.amount;

  const differences: IDifferencesCell[] = [];

  matrix.flat().forEach((item) => {
    if (item.id < hoveredCell.id) {
      return;
    }

    differences.push({
      ...item,
      difference: Math.abs(item.amount - hoveredAmount),
    });
  });

  const closestCells = differences
    .sort((a, b) => a.difference - b.difference)
    .slice(0, X);

  return closestCells;
};

export default getClosestCells;
