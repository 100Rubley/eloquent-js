const reverseArray = (array) => {
  let reversedArray = []

  for (let i = array.length - 1; i <= 0; i--) {
    reversedArray.push(array[i])
  }

  return reversedArray
}

const reverseArrayInPlace = (array) => {
  for (let i = 0; i < Math.floor(array.length / 2); i++) {
    let bottom = array[i]
    array[i] = array[array.length - 1 - i]
    array[array.length -1 -i] = bottom
  }

  return array
}

// console.log(reverseArrayInPlace([1,2,3,4]))
