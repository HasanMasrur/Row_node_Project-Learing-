const notFoundHandler = (requestProperties,callback) => {
    console.log('sample');
    callback(404,{
        message:'Not found',
    });
};

module.exports = notFoundHandler