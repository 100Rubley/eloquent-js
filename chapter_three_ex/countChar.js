const countChar = (string, char) => {
  let count = 0
  for (let charInString of string) {
    if (charInString === char) {
      count++
    }
  }
  return count
}

console.log(countChar('asdasdasdasd', 'a'))
