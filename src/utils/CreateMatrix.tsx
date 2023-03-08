const createMatrix = (n: number, m: number) => {
  const matrix = [];
  let cellId = 1;
  for (let i = 0; i < m; i++) {
    const row = [];
    for (let j = 0; j < n; j++) {
      const cell = {
        id: cellId,
        amount: Math.floor(Math.random() * 101),
      };
      row.push(cell);
      cellId++;
    }
    matrix.push(row);
  }

  return matrix;
};

export default createMatrix;
