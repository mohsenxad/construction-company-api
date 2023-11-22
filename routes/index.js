const buildCreateProjectRouter = require('./projects');
const buildCreateContractRouter = require('./contract');
const buildCreateContractTemplateRouter = require('./contract-template')

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

        const createContractTemplateRouter = buildCreateContractTemplateRouter(
            {
                express: express,
                contractTemplateUseCases: panelServices.contractTemplateUseCases,
                sendResult: sendResult,
                processError: processError,
                checkAuthentication: checkAuthentication,
                checkAuthorization: checkAuthorization
            }
        )
        
        const services = Object.freeze(
            {
                project: createProjectRouter,
                contract: createContractRouter,
                contractTemplate: createContractTemplateRouter
            }
        );

        return services;
    }