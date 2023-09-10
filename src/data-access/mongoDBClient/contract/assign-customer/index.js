const buildTranslateAssignCustomerResponse = require('./src/translate-assign-customer-response');
const buildCreateAssignCustomerOptions = require('./src/create-assign-customer-options');
const buildAssignCustomer = require('./src/assign-customer');

module.exports = function
(
    {
        getDb
    }
)
    {
        
        const translateAssignCustomerResponse = buildTranslateAssignCustomerResponse();

        const createAssignCustomerOptions = buildCreateAssignCustomerOptions();

        const assignCustomer = buildAssignCustomer(
            {
                getDb: getDb,
                createOptions: createAssignCustomerOptions,
                translateResponse: translateAssignCustomerResponse
            }
        );

        const servies = Object.freeze(
            {
                assignCustomer
            }
        );

        return servies;
    }