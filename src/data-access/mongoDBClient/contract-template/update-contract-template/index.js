const buildTranslateUpdateContractTemplateResponse = require('./src/translate-update-contract-template-response');
const buildCreateUpdateContractTemplateOptions = require('./src/create-update-contract-template-options');
const buildUpdateContractTemplate = require('./src/update-contract-template');

module.exports = function
(
    {
        getDb,
        ObjectId
    }
)
    {
        
        const translateUpdateContractTemplateResponse = buildTranslateUpdateContractTemplateResponse();

        const createUpdateContractTemplateOptions = buildCreateUpdateContractTemplateOptions(
            {
                ObjectId: ObjectId
            }
        );

        const updateContractTemplate = buildUpdateContractTemplate(
            {
                getDb: getDb,
                createOptions: createUpdateContractTemplateOptions,
                translateResponse: translateUpdateContractTemplateResponse
            }
        );

        const servies = Object.freeze(
            {
                updateContractTemplate
            }
        );

        return servies;
    }