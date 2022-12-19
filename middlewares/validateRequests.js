import Joi from 'joi';
import {NUMBER_ERROR} from '../common/constants.js'

/**
 * The function validateGNRequest validates the params passed in request. in case of error it sends the 400 response with an error message. Otherwise it calls next() method which allows to proceed the following logic.
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
export const validateGNRequest = (req, res, next) => { 
  const schema = Joi.object({
    number: Joi.number().min(0).required()
  })
  const {error} = schema.validate(req.params)
  if (error) {
    const wrongTypeError = {message: NUMBER_ERROR};
    res.setHeader('Content-Type', 'application/json');
    res.status(400).send(JSON.stringify(wrongTypeError))
  } else {
    next() 
  }
} 
