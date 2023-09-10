const buildTranslateGetAllContractResponse = require('./src/translate-get-all-contract-response');
const buildCreateGetAllContractOptions = require('./src/create-get-all-contract-options');
const buildGetAllContract = require('./src/get-all-contract');

module.exports = function
(
    {
        getDb,
        ObjectId
    }
)
    {
        
        const translateGetAllContractResponse = buildTranslateGetAllContractResponse();

        const createGetAllContractOptions = buildCreateGetAllContractOptions(
            {
                ObjectId:ObjectId
            }
        );

        const getAllContract = buildGetAllContract(
            {
                getDb: getDb,
                createOptions: createGetAllContractOptions,
                translateResponse: translateGetAllContractResponse
            }
        );

        const servies = Object.freeze(
            {
                getAllContract
            }
        );

        return servies;
    }