
exports.min = function min (array) {
  let min;
  if ((array && array.length)) {
    min = Math.min.apply(null, array);
  } else {
    return 0;
  }
  return min;
}

exports.max = function max (array) {
  let max;
  if ((array && array.length)) {
      max = Math.max.apply(null, array);
  } else {
      return 0;
  }
  return max;
}

exports.avg = function avg (array) {
  if (array && array.length) {

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
  } else {
    return 0;
  }
  
}
