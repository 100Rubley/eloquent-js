const arrayToList = (array) => {
  let list = null
  for (let i = 0; i < array.length; i++) {
    list = { value: array[i], rest: list }
  }

  return list
}


const listToArray = (list) => {
  let array = []
  for (let node = list; node; node = node.rest) {
    array.push(node.value)
  }

  return array
}

const prepend = (value, list) => ({
  value, rest: list
})

const nth = (list, position) => {
  if (!list) return undefined
  else if (position === 0) return list.value
  else return nth(list.rest, position-1)
}

console.log(listToArray(arrayToList([1, 2, 3, 4])))
console.log(prepend(22, arrayToList([1, 2, 3, 4])))
