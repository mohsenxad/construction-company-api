const buildTranslateEditContractBaseInfoResponse = require('./src/translate-edit-contract-base-info-response');
const buildCreateEditContractBaseInfoOptions = require('./src/create-edit-contract-base-info-options');
const buildEditContractBaseInfo = require('./src/edit-contract-base-info');

module.exports = function
(
    {
        getDb,
        ObjectId
    }
)
    {
        
        const translateEditContractBaseInfoResponse = buildTranslateEditContractBaseInfoResponse();

        const createEditContractBaseInfoOptions = buildCreateEditContractBaseInfoOptions(
            {
                ObjectId: ObjectId
            }
        );

        const editContractBaseInfo = buildEditContractBaseInfo(
            {
                getDb: getDb,
                createOptions: createEditContractBaseInfoOptions,
                translateResponse: translateEditContractBaseInfoResponse
            }
        );

        const servies = Object.freeze(
            {
                editContractBaseInfo
            }
        );

        return servies;
    }