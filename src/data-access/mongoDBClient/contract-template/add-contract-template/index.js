const buildTranslateAddContractTemplateResponse = require('./src/translate-add-contract-template-response');
const buildCreateAddContractTemplateOptions = require('./src/create-add-contract-template-options');
const buildAddContractTemplate = require('./src/add-contract-template');

module.exports = function
(
    {
        getDb
    }
)
    {
        
        const translateAddContractTemplateResponse = buildTranslateAddContractTemplateResponse();

        const createAddContractTemplateOptions = buildCreateAddContractTemplateOptions();

        const addContractTemplate = buildAddContractTemplate(
            {
                getDb: getDb,
                createOptions: createAddContractTemplateOptions,
                translateResponse: translateAddContractTemplateResponse
            }
        );

        const servies = Object.freeze(
            {
                addContractTemplate
            }
        );

        return servies;
    }