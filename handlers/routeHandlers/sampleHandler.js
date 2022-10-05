const handler ={};
handler.sampleHandler = (requestProperties,callback) => {
    console.log('sample');
    callback(200,{
        message:'this is a sample url',
    });
};

handler.testController = (requestProperties,callback) => {
    console.log('sample');
    callback(200,{
        message:'this is a Test controller url',
    });
};
module.exports = handler;