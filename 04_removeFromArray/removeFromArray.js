
const removeFromArray = function(array, ...values) {
  uniq = [...new Set(array)];
  values.forEach(value => {
    let index = uniq.indexOf(value);
    if (index !== -1) {
      uniq.splice(index, 1);
    }
  });
  return uniq;
}
 removeFromArray([1, 2, 3, 4], 3);
 removeFromArray([1, 2, 3, 4], 3, 2);
 removeFromArray([1, 2, 2, 3], 2);
 removeFromArray([1, 2, 3, 4], 7, "tacos");
 removeFromArray([1, 2, 3, 4], 7, 2);
 removeFromArray([1, 2, 3, 4], 1, 2, 3, 4);
 removeFromArray(["hey", 2, 3, "ho"], "hey", 3);
 removeFromArray([1, 2, 3], "1", 3);
// Do not edit below this line
module.exports = removeFromArray;
