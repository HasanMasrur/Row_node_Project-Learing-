
const sampleHandler = require('./handlers/routeHandlers/sampleHandler');
console.log(`from routes ${sampleHandler}`);
const routes = {
    sample: sampleHandler.sampleHandler,
    test: sampleHandler.testController,
};
module.exports = routes;