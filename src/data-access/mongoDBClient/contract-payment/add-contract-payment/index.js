const buildTranslateAddContractPaymentResponse = require('./src/translate-add-contract-payment-response');
const buildCreateAddContractPaymentOptions = require('./src/create-add-contract-payment-options');
const buildAddContractPayment = require('./src/add-contract-payment');

module.exports = function
(
    {
        getDb
    }
)
    {
        
        const translateAddContractPaymentResponse = buildTranslateAddContractPaymentResponse();

        const createAddContractPaymentOptions = buildCreateAddContractPaymentOptions();

        const addContractPayment = buildAddContractPayment(
            {
                getDb: getDb,
                createOptions: createAddContractPaymentOptions,
                translateResponse: translateAddContractPaymentResponse
            }
        );

        const servies = Object.freeze(
            {
                addContractPayment
            }
        );

        return servies;
    }