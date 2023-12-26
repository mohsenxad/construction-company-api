const buildTranslateRemoveDarftedContractByIdResponse = require('./src/translate-remove-darfted-contract-by-id-response');
const buildCreateRemoveDarftedContractByIdOptions = require('./src/create-remove-darfted-contract-by-id-options');
const buildRemoveDarftedContractById = require('./src/remove-darfted-contract-by-id');

module.exports = function
(
    {
        getDb,
        ObjectId
    }
)
    {
        
        const translateRemoveDarftedContractByIdResponse = buildTranslateRemoveDarftedContractByIdResponse();

        const createRemoveDarftedContractByIdOptions = buildCreateRemoveDarftedContractByIdOptions(
            {
                ObjectId: ObjectId
            }
        );

        const removeDarftedContractById = buildRemoveDarftedContractById(
            {
                getDb: getDb,
                createOptions: createRemoveDarftedContractByIdOptions,
                translateResponse: translateRemoveDarftedContractByIdResponse
            }
        );

        const servies = Object.freeze(
            {
                removeDarftedContractById
            }
        );

        return servies;
    }