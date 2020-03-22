module.exports = function countCats( matrix ) {
  if (!matrix || !matrix.length) return 0;
  const findCats = matrix.reduce((flat, current) => flat.concat(current)).filter(item => item === "^^");
  return findCats.length;
};
