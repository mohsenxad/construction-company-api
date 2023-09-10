const buildTranslateRemoveContractPaymentResponse = require('./src/translate-remove-contract-payment-response');
const buildCreateRemoveContractPaymentOptions = require('./src/create-remove-contract-payment-options');
const buildRemoveContractPayment = require('./src/remove-contract-payment');

module.exports = function
(
    {
        getDb,
        ObjectId
    }
)
    {
        
        const translateRemoveContractPaymentResponse = buildTranslateRemoveContractPaymentResponse();

        const createRemoveContractPaymentOptions = buildCreateRemoveContractPaymentOptions(
            {
                ObjectId: ObjectId
            }
        );

        const removeContractPayment = buildRemoveContractPayment(
            {
                getDb: getDb,
                createOptions: createRemoveContractPaymentOptions,
                translateResponse: translateRemoveContractPaymentResponse
            }
        );

        const servies = Object.freeze(
            {
                removeContractPayment
            }
        );

        return servies;
    }