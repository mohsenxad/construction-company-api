const buildTranslateGetAllContractPaymentByIsSettledReponse = require('./src/translate-get-all-contract-payment-by-isSettled-response');
const buildCreateGetAllContractPaymentByIsSettledOptions = require('./src/create-get-all-contract-payment-by-isSettled-options');
const buildGetAllContractPaymentByIsSettled = require('./src/get-all-contract-payment-by-isSettled');

module.exports = function
(
    {
        getDb,
        ObjectId
    }
)
    {
        
        const translateGetAllContractPaymentByIsSettledReponse = buildTranslateGetAllContractPaymentByIsSettledReponse();

        const createGetAllContractPaymentByIsSettledOptions = buildCreateGetAllContractPaymentByIsSettledOptions(
            {
                ObjectId: ObjectId
            }
        );

        const getAllContractPaymentByIsSettled = buildGetAllContractPaymentByIsSettled(
            {
                getDb: getDb,
                createOptions: createGetAllContractPaymentByIsSettledOptions,
                translateResponse: translateGetAllContractPaymentByIsSettledReponse
            }
        );

        const servies = Object.freeze(
            {
                getAllContractPaymentByIsSettled
            }
        );

        return servies;
    }