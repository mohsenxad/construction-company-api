const buildTranslateGetProjectItemByContractIdResponse = require('./src/translate-get-project-item-by-contract-id-response');
const buildCreateGetProjectItemByContractIdOptions = require('./src/create-get-project-item-by-contract-id-options');
const buildGetProjectItemByContractId = require('./src/get-project-item-by-contract-id');

module.exports = function
(
    {
        getDb,
        ObjectId
    }
)
    {
        
        const translateGetProjectItemByContractIdResponse = buildTranslateGetProjectItemByContractIdResponse();

        const createGetProjectItemByContractIdOptions = buildCreateGetProjectItemByContractIdOptions(
            {
                ObjectId: ObjectId
            }
        );

        const getProjectItemByContractId = buildGetProjectItemByContractId(
            {
                getDb: getDb,
                createOptions: createGetProjectItemByContractIdOptions,
                translateResponse: translateGetProjectItemByContractIdResponse
            }
        );

        const servies = Object.freeze(
            {
                getProjectItemByContractId
            }
        );

        return servies;
    }