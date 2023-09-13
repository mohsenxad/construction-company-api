const buildTranslateSetContractContentResponse = require('./src/transalte-set-contract-content-response');
const buildCreateSetContractContentOptions = require('./src/create-set-contract-content-options');
const buildSetContractContent = require('./src/set-contract-content');

module.exports = function
(
    {
        getDb,
        ObjectId
    }
)
    {
        
        const translateSetContractContentResponse = buildTranslateSetContractContentResponse();

        const createSetContractContentOptions = buildCreateSetContractContentOptions(
            {
                ObjectId: ObjectId
            }
        );

        const setContractContent = buildSetContractContent(
            {
                getDb: getDb,
                createOptions: createSetContractContentOptions,
                translateResponse: translateSetContractContentResponse
            }
        );

        const servies = Object.freeze(
            {
                setContractContent
            }
        );

        return servies;
    }