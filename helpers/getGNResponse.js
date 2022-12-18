export const getGNResponse = (num) => {
  let result = num;
  const multipleThree = num % 3 === 0;
  const multipleFive = num % 5 === 0;
  const multipleBoth = multipleThree && multipleFive;

  switch(true) {
    case multipleBoth:
      result = "GN"
      break
    case multipleThree:
      result = "G"
      break
    case multipleFive:
      result = "N"
      break
    default:
      break
  }

  return {
    result
  }
}