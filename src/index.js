
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (matrix == null) {return []};
  let arr = [];
  let done = matrix.forEach((elem, i) => {
    if (i%2 === 0) {
       elem.forEach(item => arr.push(item));
    } else {
        let das = elem.reverse();
        das.forEach(item => arr.push(item));
    }

    });
  return arr;
}
