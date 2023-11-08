const buildCreateProjectRouter = require('./projects');
const buildCreateContractRouter = require('./contract');

module.exports = function
(
    {
        express,
        panelServices,
        sendResult,
        processError,
        checkAuthentication,
        checkAuthorization
    }
)
    {

        const createProjectRouter = buildCreateProjectRouter(
            {
                express,
                panelServices,
                sendResult,
                processError,
                checkAuthentication,
                checkAuthorization
            }
        );

        const createContractRouter = buildCreateContractRouter(
            {
                express,
                panelServices,
                sendResult,
                processError,
                checkAuthentication,
                checkAuthorization
            }
        );
        
        const services = Object.freeze(
            {
                project: createProjectRouter,
                contract: createContractRouter
            }
        );

        return services;
    }