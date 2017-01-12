var loadedDie = (function () {
  var list = [5, 4, 6, 1, 6, 4, 2, 3, 3, 5];
  var id = -1;

  return function() {
    id++;
    return list[id];
  }
}());

console.log(loadedDie());  // 5
console.log(loadedDie());  // 4
console.log(loadedDie());  // 6


var funcName = (function () {

})
