const buildTransalteRemoveContractTemplateResponse = require('./src/translate-remove-contract-template-response');
const buildCreateRemoveContractTemplateOptions = require('./src/create-remove-contract-template-options');
const buildRemoveContractTemplate = require('./src/remove-contract-template');

module.exports = function
(
    {
        getDb,
        ObjectId
    }
)
    {
        
        const transalteRemoveContractTemplateResponse = buildTransalteRemoveContractTemplateResponse();

        const createRemoveContractTemplateOptions = buildCreateRemoveContractTemplateOptions(
            {
                ObjectId: ObjectId
            }
        );

        const removeContractTemplate = buildRemoveContractTemplate(
            {
                getDb: getDb,
                createOptions: createRemoveContractTemplateOptions,
                translateResponse: transalteRemoveContractTemplateResponse
            }
        );

        const servies = Object.freeze(
            {
                removeContractTemplate
            }
        );

        return servies;
    }