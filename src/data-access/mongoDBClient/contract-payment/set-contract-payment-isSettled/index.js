const buildTransalteSetContractPaymentIsSettledResponse = require('./src/translate-set-contract-payment-isSettled-response');
const buildCreateSetContractPaymentIsSettledOptions = require('./src/create-set-contract-payment-isSettled-options');
const buildSetContractPaymentIsSettled = require('./src/set-contract-payment-isSettled');

module.exports = function
(
    {
        getDb,
        ObjectId
    }
)
    {
        
        const transalteSetContractPaymentIsSettledResponse = buildTransalteSetContractPaymentIsSettledResponse();

        const createSetContractPaymentIsSettledOptions = buildCreateSetContractPaymentIsSettledOptions(
            {
                ObjectId: ObjectId
            }
        );

        const setContractPaymentIsSettled = buildSetContractPaymentIsSettled(
            {
                getDb: getDb,
                createOptions: createSetContractPaymentIsSettledOptions,
                translateResponse: transalteSetContractPaymentIsSettledResponse
            }
        );

        const servies = Object.freeze(
            {
                setContractPaymentIsSettled
            }
        );

        return servies;
    }