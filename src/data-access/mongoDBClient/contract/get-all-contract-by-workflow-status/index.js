const buildTranslateGetAllContractByWorkflowStatusResponse = require('./src/translate-get-all-contract-by-workflow-status-response');
const buildCreateGetAllContractByWorkflowStatusOptions = require('./src/create-get-all-contract-by-workflow-status-options');
const buildGetAllContractByWorkflowStatus = require('./src/get-all-contract-by-workflow-status');

module.exports = function
(
    {
        getDb,
        ObjectId
    }
)
    {
        
        const translateGetAllContractByWorkflowStatusResponse = buildTranslateGetAllContractByWorkflowStatusResponse();

        const createGetAllContractByWorkflowStatusOptions = buildCreateGetAllContractByWorkflowStatusOptions(
            {
                ObjectId: ObjectId
            }
        );

        const getAllContractByWorkflowStatus = buildGetAllContractByWorkflowStatus(
            {
                getDb: getDb,
                createOptions: createGetAllContractByWorkflowStatusOptions,
                translateResponse: translateGetAllContractByWorkflowStatusResponse
            }
        );

        const servies = Object.freeze(
            {
                getAllContractByWorkflowStatus
            }
        );

        return servies;
    }