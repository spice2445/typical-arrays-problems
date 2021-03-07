exports.min = function min(array) {
  let g = Math.min.apply(null, array);
  if (array == 0 || array == undefined) {
    return 0;
  }
  return g;
};

exports.max = function max(array) {
  let g = Math.max.apply(null, array);
  if (array == 0 || array == undefined) {
    return 0;
  }
  return g;
}


exports.avg = function avg(array) {
  let num = 0
  if (array == 0 || array == undefined) {
    return 0;
  }
  for (let i = 0; i < array.length; i++) {
    num += array[i];
  } 

  let g = num / array.length;
  return g;
};
