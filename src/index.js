
exports.min = function min (array) {
  let min;
  for (let i of array) {
      if (i == '') {
          min = 0;
      } else {
          min = Math.min.apply(null, array);
      }
  }
  return min;
}

exports.max = function max (array) {
  let max;
  for (let i of array) {
      if (i == '') {
          max = 0;
      } else {
          max = Math.max.apply(null, array);
      }
  }
  return max;
}

exports.avg = function avg (array) {
  function getCountEl(array) {
      let numCallbackRuns = 0;
      array.forEach((item) => numCallbackRuns++);
      return numCallbackRuns;
  }

  function getSum(array) {
      let sum = 0;
      array.forEach((item) => sum += item);
      return sum;
  }

  return getSum(array) / getCountEl(array);
}
