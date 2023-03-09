const calculateSumOfCell = (array: Array<Cell>): number => {
  const sumRow = array.reduce((acc, curr) => acc + curr.amount, 0);

  return sumRow;
};

export default calculateSumOfCell;
