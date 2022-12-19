import express from 'express';
import {validateGNRequest} from './middlewares/validateRequests.js';
import {handleSymbolsResponse} from './handlers/index.js';
import {INDEX_ROUTE_RESULT} from './common/constants.js'


const app = express();

app.get('/', (req, res) => res.status(200).send(INDEX_ROUTE_RESULT));

app.get('/get-symbols/:number', validateGNRequest, handleSymbolsResponse);


export default app;