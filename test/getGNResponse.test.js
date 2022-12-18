import {getGNResponse} from '../helpers/getGNResponse.js'; 

describe('Should return correct values', () => {
  test('should return G', () => {
    const functionOutput = getGNResponse(12)
    expect(functionOutput.result).toBe('G')
  })
  test('should return N', () => {
    const functionOutput = getGNResponse(10)
    expect(functionOutput.result).toBe('N')
  })
  test('should return GN', () => {
    const functionOutput = getGNResponse(15)
    expect(functionOutput.result).toBe('GN')
  })
  test('should return 22', () => {
    const functionOutput = getGNResponse(22)
    expect(functionOutput.result).toBe(22)
  })
  test('should return 22', () => {
    const functionOutput = getGNResponse('22')
    expect(functionOutput.result).toBe('22')
  })
})