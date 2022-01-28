exports.generate = function arrGenerator(args) {
  const { size = 5, min = 1, max = 100, sort = false, reverse = false } = args;
  let arr = [];
  for (let i = 0; i < size; i++) {
    arr.push(Math.floor(Math.random() * (max - min + 1)) + min);
  }
  if (sort === true && reverse === false) return arr.sort((a, b) => a - b);
  else if (reverse == true) return arr.sort((a, b) => b - a);
  else return arr;
};
