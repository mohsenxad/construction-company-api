const buildTransalteGetCustomerByNationalCodeResponse = require('./src/transalte-get-customer-by-national-code-response');
const buildCreateGetCustomerByNationalCodeOptions = require('./src/create-get-customer-by-national-code-options');
const buildGetCustomerByNationalCode = require('./src/get-customer-by-national-code');

module.exports = function
(
    {
        getDb
    }
)
    {
        
        const transalteGetCustomerByNationalCodeResponse = buildTransalteGetCustomerByNationalCodeResponse();

        const createGetCustomerByNationalCodeOptions = buildCreateGetCustomerByNationalCodeOptions();

        const getCustomerByNationalCode = buildGetCustomerByNationalCode(
            {
                getDb: getDb,
                createOptions: createGetCustomerByNationalCodeOptions,
                translateResponse: transalteGetCustomerByNationalCodeResponse
            }
        );

        const servies = Object.freeze(
            {
                getCustomerByNationalCode
            }
        );

        return servies;
    }