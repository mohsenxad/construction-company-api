const buildTranslateSetContractProjectAndProjectItemResponse = require('./src/translate-set-contract-project-and-projectItem-response');
const buildCreateSetContractProjectAndProjectItemOptions = require('./src/create-set-contract-project-and-projectItem-options');
const buildSetContractProjectAndProjectItem = require('./src/set-contract-project-and-projectItem');

module.exports = function
(
    {
        getDb,
        ObjectId
    }
)
    {
        
        const translateSetContractProjectAndProjectItemResponse = buildTranslateSetContractProjectAndProjectItemResponse();

        const createSetContractProjectAndProjectItemOptions = buildCreateSetContractProjectAndProjectItemOptions(
            {
                ObjectId: ObjectId
            }
        );

        const setContractProjectAndProjectItem = buildSetContractProjectAndProjectItem(
            {
                getDb: getDb,
                createOptions: createSetContractProjectAndProjectItemOptions,
                translateResponse: translateSetContractProjectAndProjectItemResponse
            }
        );

        const servies = Object.freeze(
            {
                setContractProjectAndProjectItem
            }
        );

        return servies;
    }