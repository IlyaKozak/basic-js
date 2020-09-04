module.exports = function countCats(matrix) {
  return (matrix.join().match(/(?<=,|^)\^\^(?=,|$)/g) || []).length;
};
