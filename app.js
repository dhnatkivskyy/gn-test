import express from 'express';
import {getGNResponse} from './helpers/getGNResponse.js';

const app = express();

app.get('/', (req, res) => res.status(200).send('<h1>Hi there!</h1>'))

app.get('/get-symbols/:number', (req, res) => {
  const {number} = req.params;
  const isParamNumber = !isNaN(Number(number));
  const result = getGNResponse(number)
  const wrongTypeError = {message: "Please, provide a number"};
  res.setHeader('Content-Type', 'application/json');

  return isParamNumber ?
    res.status(200).send(JSON.stringify(result)) :
    res.status(400).send(JSON.stringify(wrongTypeError))
  
})


export default app;