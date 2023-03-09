const getPercent = (amount: number, sum: number) => {
  return sum !== 0 ? ((amount / sum) * 100).toFixed(1) + "%" : "0%";
};

export default getPercent;
