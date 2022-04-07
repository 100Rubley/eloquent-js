const fizzBuzz = (edge) => {
  for (let i = 0; i <= edge; i++) {
    i % 3 === 0 && i % 5 === 0
      ? console.log('Fizz Buzz')
      : i % 3 === 0
        ? console.log('Fizz')
        : i % 5 === 0
          ? console.log('Buzz')
          : console.log(i)
  }
}

fizzBuzz(100)
