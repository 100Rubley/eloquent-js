const every = (array, predicate) => {
  for (const item of array) {
    if (!predicate(item)) return false;
  }
  return true;
};

const everyDeMorgan = (array, predicate) => {
  return !array.some(element => !predicate(element))
}

console.log(every([1, 3, 5], n => n < 10));
console.log(everyDeMorgan([2, 4, 16], n => n < 10));
