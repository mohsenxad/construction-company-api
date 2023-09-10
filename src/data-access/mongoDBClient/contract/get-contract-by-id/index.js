const buildTranslateGetContractByIdResponse = require('./src/translate-get-contract-by-id-response');
const buildCreateGetContractByIdOpions = require('./src/create-get-contract-by-id-opions');
const buildGetContractById = require('./src/get-contract-by-id');

module.exports = function
(
    {
        getDb,
        ObjectId
    }
)
    {
        
        const translateGetContractByIdResponse = buildTranslateGetContractByIdResponse();

        const createGetContractByIdOpions = buildCreateGetContractByIdOpions(
            {
                ObjectId: ObjectId
            }
        );

        const getContractById = buildGetContractById(
            {
                getDb: getDb,
                createOptions: createGetContractByIdOpions,
                translateResponse: translateGetContractByIdResponse
            }
        );

        const servies = Object.freeze(
            {
                getContractById
            }
        );

        return servies;
    }