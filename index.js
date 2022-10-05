/*
* Title: "uptime monitoring Application"
*Description : A Restful APi to monitor up or down time of user defined links 
* Author: Hasan Masrur Babu
* date 12/12/2020
*/
const http = require('http');
const url =require('url');

const {handleReqRes} = require('./helpers/handleReqRes');

const app ={};
app.config ={
    port: 3042,
};

app.createServer = ()=>{
    const server = http.createServer(app.handleReqRes);
    server.listen(app.config.port,()=>{
        console.log(`listening to port ${app.config.port}`);
    });  
}
//handel request response
app.handleReqRes = handleReqRes;
//start the server
 app.createServer();