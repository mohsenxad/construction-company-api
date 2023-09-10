const buildTranslateAddContractResponse = require('./src/translate-add-contract-response');
const buildCreateAddContractOptions = require('./src/create-add-contract-options');
const buildAddContract = require('./src/add-contract');

module.exports = function
(
    {
        getDb
    }
)
    {
        
        const translateAddContractResponse = buildTranslateAddContractResponse();

        const createAddContractOptions = buildCreateAddContractOptions();

        const addContract = buildAddContract(
            {
                getDb: getDb,
                createOptions: createAddContractOptions,
                translateResponse: translateAddContractResponse
            }
        );

        const servies = Object.freeze(
            {
                addContract
            }
        );

        return servies;
    }