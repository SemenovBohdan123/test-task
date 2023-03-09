const sumObjectsAmount = (array: Array<Cell>) => {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i].amount;
  }
  return sum;
};

const calculateSumOfCell = (cellArray: Array<Cell>) => {
  const totalAmount = sumObjectsAmount(cellArray);

  return totalAmount;
};

export default calculateSumOfCell;
