const buildTranslateRemoveContractProjectItemResponse = require('./src/translate-remove-contract-projectItem-response');
const buildCreateRemoveContractProjectItemOptions = require('./src/create-remove-contract-projectItem-options');
const buildRemoveContractProjectItem = require('./src/remove-contract-projectItem');

module.exports = function
(
    {
        getDb,
        ObjectId
    }
)
    {
        
        const translateRemoveContractProjectItemResponse = buildTranslateRemoveContractProjectItemResponse();

        const createRemoveContractProjectItemOptions = buildCreateRemoveContractProjectItemOptions(
            {
                ObjectId: ObjectId
            }
        );

        const removeContractProjectItem = buildRemoveContractProjectItem(
            {
                getDb: getDb,
                createOptions: createRemoveContractProjectItemOptions,
                translateResponse: translateRemoveContractProjectItemResponse
            }
        );

        const servies = Object.freeze(
            {
                removeContractProjectItem
            }
        );

        return servies;
    }