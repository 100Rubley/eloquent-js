const range = (start, end, step = start < end ? 1 : -1) => {
  let array = []

  if (step > 0) {
    for (let i = start; i <= end; i += step) array.push(i);
  } else {
    for (let i = start; i >= end; i += step) array.push(i);
  }
  
  return array
}

const sum = (array) => {
  let result = 0
  for (let value of array) {
    result += value
  }

  //можно и через reduce

  return result
}

// console.log(sum(range(1,10)))
// console.log(range(1,10))
