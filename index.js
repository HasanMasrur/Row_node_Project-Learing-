/*
* Title: "uptime monitoring Application"
*Description : A Restful APi to monitor up or down time of user defined links 
* Author: Hasan Masrur Babu
* date 12/12/2020
*/
const http = require('http');
const url =require('url');

const {StringDecoder} = require('string_decoder');

const app ={};
app.config ={
    port: 3041,
};

app.createServer = ()=>{
    const server = http.createServer(app.handleReqRes);
    server.listen(app.config.port,()=>{
        console.log(`listening to port ${app.config.port}`);
    });  
}
//handel request response
app.handleReqRes = (req,res) => {
const parsedUrl = url.parse(req.url,true);
const path = parsedUrl.pathname;
const trimmedPath = path.replace(/^\/+|\/+$/g,'');
const method = req.method.toLowerCase();
const queryStringObject = parsedUrl.query;
const header = req.headers;
const decoder = new StringDecoder('utf-8');
let realData ='';

req.on('data',(buffer)=>{
realData += decoder.write(buffer);
});

req.on('end',()=>{
    realData += decoder.end();
    console.log(realData);
    res.end('working');
})

;}
//start the server
 app.createServer();