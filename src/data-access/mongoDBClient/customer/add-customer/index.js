const buildTranslateAddCustomerResponse = require('./src/translate-add-customer-response');
const buildCreateAddCustomerOptions = require('./src/create-add-customer-options');
const buildAddCustomer = require('./src/add-customer');

module.exports = function
(
    {
        getDb
    }
)
    {
        
        const translateAddCustomerResponse = buildTranslateAddCustomerResponse();

        const createAddCustomerOptions = buildCreateAddCustomerOptions();

        const addCustomer = buildAddCustomer(
            {
                getDb: getDb,
                createOptions: createAddCustomerOptions,
                translateResponse: translateAddCustomerResponse
            }
        );

        const servies = Object.freeze(
            {
                addCustomer
            }
        );

        return servies;
    }