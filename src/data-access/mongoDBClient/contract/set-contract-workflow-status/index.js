const buildTranslateSetContractWorkflowStatusResponse = require('./src/translate-set-contract-workflow-status-response');
const buildCreateSetContractWorkflowStatusOptions = require('./src/create-set-contract-workflow-status-options');
const buildSetContractWorkflowStatus = require('./src/set-contract-workflow-status');

module.exports = function
(
    {
        getDb,
        ObjectId
    }
)
    {
        
        const translateSetContractWorkflowStatusResponse = buildTranslateSetContractWorkflowStatusResponse();

        const createSetContractWorkflowStatusOptions = buildCreateSetContractWorkflowStatusOptions(
            {
                ObjectId: ObjectId
            }
        );

        const setContractWorkflowStatus = buildSetContractWorkflowStatus(
            {
                getDb: getDb,
                createOptions: createSetContractWorkflowStatusOptions,
                translateResponse: translateSetContractWorkflowStatusResponse
            }
        );

        const servies = Object.freeze(
            {
                setContractWorkflowStatus
            }
        );

        return servies;
    }