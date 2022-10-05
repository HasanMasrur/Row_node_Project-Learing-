
const url =require('url');
const {StringDecoder} = require('string_decoder');
const routes = require('../routes');
const notFoundHandler = require('../handlers/routeHandlers/notFoundHandler');
const handler = {};

handler.handleReqRes = (req,res) =>{
const parsedUrl = url.parse(req.url,true);
const path = parsedUrl.pathname;
const trimmedPath = path.replace(/^\/+|\/+$/g,'');
const method = req.method.toLowerCase();
const queryStringObject = parsedUrl.query;
const headersObject = req.headers;

const requestProperties ={
    parsedUrl,
    path,
    trimmedPath,
    method,
    queryStringObject,
    headersObject
};
const decoder = new StringDecoder('utf-8');
let realData ='';
console.log(trimmedPath);
console.log(routes);
console.log(routes[trimmedPath]);

const chosenHandler =  routes[trimmedPath] ? routes[trimmedPath] : notFoundHandler;
console.log(chosenHandler);

chosenHandler(requestProperties,(statusCode,payload)=>{
    statusCode = typeof(statusCode) == 'number'? statusCode :500;
    payload = typeof(payload) == 'object'? payload:{};
    const paylodString = JSON.stringify(payload);
    res.writeHead(statusCode);
    res.end(paylodString);
});

// req.on('data',(buffer)=>{
// realData += decoder.write(buffer);
// });

// req.on('end',()=>{
//     realData += decoder.end();
// });
}
module.exports = handler;