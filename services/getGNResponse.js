import {GN, G, N} from '../common/constants.js';

/**
 * The function getGNResponse takes a number as a param and depending on the number value the function returns an object with a specific result.
 * @returns {result: value}
 */
export const getGNResponse = (num) => {
  let result = num;
  const multipleThree = num % 3 === 0;
  const multipleFive = num % 5 === 0;
  const multipleBoth = multipleThree && multipleFive;
  const isZero = num == 0;

  /**
   * In case if the num is equal 0, all statements are true. In that case we return the num value separately from the switch.
   */
  if (isZero) return {
    result
  }

  switch(true) {
    case multipleBoth:
      result = GN;
      break
    case multipleThree:
      result = G;
      break
    case multipleFive:
      result = N;
      break
    default:
      break
  }

  return {
    result
  }
}