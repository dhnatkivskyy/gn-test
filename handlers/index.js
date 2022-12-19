import {getGNResponse} from '../services/getGNResponse.js';
/**
 * the function handleSymbolsResponse takes req and res as the parameters. The number from req gets passed th the getGNResponse function which gives a result. This result gets passed as a response with status 200
 * @param {*} req 
 * @param {*} res 
 */
export const handleSymbolsResponse = (req, res) => {
  const {number} = req.params;
  const result = getGNResponse(number);

  res.setHeader('Content-Type', 'application/json');
  res.status(200).send(JSON.stringify(result))
}