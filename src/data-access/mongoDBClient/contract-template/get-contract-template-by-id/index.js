const buildTranslateGetContractTemplateByIdResponse = require('./src/translate-get-contract-template-by-id-response');
const buildCreateGetContractTemplateByIdOptions = require('./src/create-get-contract-template-by-id-options');
const buildGetContractTemplateById = require('./src/get-contract-template-by-id');

module.exports = function
(
    {
        getDb,
        ObjectId
    }
)
    {
        
        const translateGetContractTemplateByIdResponse = buildTranslateGetContractTemplateByIdResponse();

        const createGetContractTemplateByIdOptions = buildCreateGetContractTemplateByIdOptions(
            {
                ObjectId: ObjectId
            }
        );

        const getContractTemplateById = buildGetContractTemplateById(
            {
                getDb: getDb,
                createOptions: createGetContractTemplateByIdOptions,
                translateResponse: translateGetContractTemplateByIdResponse
            }
        );

        const servies = Object.freeze(
            {
                getContractTemplateById
            }
        );

        return servies;
    }