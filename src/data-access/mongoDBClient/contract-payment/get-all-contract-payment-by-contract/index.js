const buildTranslateGetAllContractPaymentByContractResponse = require('./src/translate-get-all-contract-paymnet-by-contract-response');
const buildCreateGetAllContractPaymentByContractOptions = require('./src/create-get-all-contract-paymnet-by-contract-options');
const buildGetAllContractPaymentByContract = require('./src/get-all-contract-payment-by-contract');

module.exports = function
(
    {
        getDb,
        ObjectId
    }
)
    {
        
        const translateGetAllContractPaymentByContractResponse = buildTranslateGetAllContractPaymentByContractResponse();

        const createGetAllContractPaymentByContractOptions = buildCreateGetAllContractPaymentByContractOptions(
            {
                ObjectId: ObjectId
            }
        );

        const getAllContractPaymentByContract = buildGetAllContractPaymentByContract(
            {
                getDb: getDb,
                createOptions: createGetAllContractPaymentByContractOptions,
                translateResponse: translateGetAllContractPaymentByContractResponse
            }
        );

        const servies = Object.freeze(
            {
                getAllContractPaymentByContract
            }
        );

        return servies;
    }