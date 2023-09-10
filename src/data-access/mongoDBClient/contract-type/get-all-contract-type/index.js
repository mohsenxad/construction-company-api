const buildTranslateGetAllContractTypeResponse = require('./src/translate-get-all-contract-type-response');
const buildCreateGetAllContractTypeOptions = require('./src/create-get-all-contract-type-options');
const buildGetAllContractType = require('./src/get-all-contract-type');

module.exports = function
(
    {
        getDb
    }
)
    {
        
        const translateGetAllContractTypeResponse = buildTranslateGetAllContractTypeResponse();

        const createGetAllContractTypeOptions = buildCreateGetAllContractTypeOptions();

        const getAllContractType = buildGetAllContractType(
            {
                getDb: getDb,
                createOptions: createGetAllContractTypeOptions,
                translateResponse: translateGetAllContractTypeResponse
            }
        );

        const servies = Object.freeze(
            {
                getAllContractType
            }
        );

        return servies;
    }