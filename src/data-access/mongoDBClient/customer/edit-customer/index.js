const buildTranslateEditCustomerResponse = require('./src/translate-edit-customer-response');
const buildCreateEditCustomerOptions = require('./src/create-edit-customer-options');
const buildEditCustomer = require('./src/edit-customer');

module.exports = function
(
    {
        getDb,
        ObjectId
    }
)
    {
        
        const translateEditCustomerResponse = buildTranslateEditCustomerResponse();

        const createEditCustomerOptions = buildCreateEditCustomerOptions(
            {
                ObjectId: ObjectId
            }
        );

        const editCustomer = buildEditCustomer(
            {
                getDb: getDb,
                createOptions: createEditCustomerOptions,
                translateResponse: translateEditCustomerResponse
            }
        );

        const servies = Object.freeze(
            {
                editCustomer
            }
        );

        return servies;
    }