const flatter = (array) => {
  return array.reduce((result, current) => result.concat(current), [])
}

console.log(flatter([[1,2], [3,4]]));
