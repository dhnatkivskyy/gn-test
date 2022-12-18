import http from 'http';
import url from 'url';
import querystring from 'querystring';
import {getGNResponse} from './helpers/getGNResponse.js';

const PORT = 3000;

const app = http.createServer(
  async (req, res) => {
    const {query, pathname} = url.parse(req.url);
    const { num }  = querystring.parse(query);
    
    if (pathname.includes('/get-symbols') && req.method === "GET") {
      const isParamNumber = !isNaN(Number(num));

      if (isParamNumber) {
        res.writeHead(200, { "Content-Type": "application/json" });
        res.write(JSON.stringify(getGNResponse(num)));
      } else {
        const wrongTypeError = {message: "Please, provide a number"};
        res.writeHead(400, { "Content-Type": "application/json" });
        res.write(JSON.stringify(wrongTypeError));
      }
      res.end();
    }

     else {
        res.writeHead(404, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ message: "Route not found" }));
    }
  }
)

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});