const buildTranslateGetCustomerByIdResponse = require('./src/translate-get-customer-by-id-response');
const buildCreateGetCustomerByIdOptions = require('./src/create-get-customer-by-id-options');
const buildGetCustomerById = require('./src/get-customer-by-id');

module.exports = function
(
    {
        getDb,
        ObjectId
    }
)
    {
        
        const translateGetCustomerByIdResponse = buildTranslateGetCustomerByIdResponse();

        const createGetCustomerByIdOptions = buildCreateGetCustomerByIdOptions(
            {
                ObjectId: ObjectId
            }
        );

        const getCustomerById = buildGetCustomerById(
            {
                getDb: getDb,
                createOptions: createGetCustomerByIdOptions,
                translateResponse: translateGetCustomerByIdResponse
            }
        );

        const servies = Object.freeze(
            {
                getCustomerById
            }
        );

        return servies;
    }