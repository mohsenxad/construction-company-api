const buildTranslateRemoveContractCustomerResponse = require('./src/translate-remove-contract-customer-response');
const buildCreateRemoveContractCustomerOptions = require('./src/create-remove-contract-customer-options');
const buildRemoveContractCustomer = require('./src/remove-contract-customer');

module.exports = function
(
    {
        getDb,
        ObjectId
    }
)
    {
        
        const translateRemoveContractCustomerResponse = buildTranslateRemoveContractCustomerResponse();

        const createRemoveContractCustomerOptions = buildCreateRemoveContractCustomerOptions(
            {
                ObjectId: ObjectId
            }
        );

        const removeContractCustomer = buildRemoveContractCustomer(
            {
                getDb: getDb,
                createOptions: createRemoveContractCustomerOptions,
                translateResponse: translateRemoveContractCustomerResponse
            }
        );

        const servies = Object.freeze(
            {
                removeContractCustomer
            }
        );

        return servies;
    }