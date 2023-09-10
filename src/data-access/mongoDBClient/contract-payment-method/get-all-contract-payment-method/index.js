const buildTranslateGetAllContractPaymentMethodResponse = require('./src/translate-get-all-contract-payment-method-response');
const buildCreateGetAllContractPaymentMethodOptions = require('./src/create-get-all-contract-payment-method-options');
const buildGetAllContractPaymentMethods = require('./src/get-all-contract-payment-method');

module.exports = function
(
    {
        getDb
    }
)
    {
        
        const translateGetAllContractPaymentMethodResponse = buildTranslateGetAllContractPaymentMethodResponse();

        const createGetAllContractPaymentMethodOptions = buildCreateGetAllContractPaymentMethodOptions();

        const getAllContractPaymentMethods = buildGetAllContractPaymentMethods(
            {
                getDb: getDb,
                createOptions: createGetAllContractPaymentMethodOptions,
                translateResponse: translateGetAllContractPaymentMethodResponse
            }
        );

        const servies = Object.freeze(
            {
                getAllContractPaymentMethods
            }
        );

        return servies;
    }