const buildTranslateAddContractCustomerResponse = require('./src/translate-add-contract-customer-response');
const buildCreateAddContractCustomerOptions = require('./src/create-add-contract-customer-options');
const buildAddContractCustomer = require('./src/add-contract-customer');

module.exports = function
(
    {
        getDb
    }
)
    {
        
        const translateAddContractCustomerResponse = buildTranslateAddContractCustomerResponse();

        const createAddContractCustomerOptions = buildCreateAddContractCustomerOptions();

        const addContractCustomer = buildAddContractCustomer(
            {
                getDb: getDb,
                createOptions: createAddContractCustomerOptions,
                translateResponse: translateAddContractCustomerResponse
            }
        );

        const servies = Object.freeze(
            {
                addContractCustomer
            }
        );

        return servies;
    }