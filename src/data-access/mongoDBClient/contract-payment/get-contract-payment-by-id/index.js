const buildTranslateGetContractPaymentByIdResponse = require('./src/translate-get-contract-payment-by-id-response');
const buildCreateGetContractPaymentByIdOptions = require('./src/create-get-contract-payment-by-id-options');
const buildGetContractPaymentById = require('./src/get-contract-payment-by-id');

module.exports = function
(
    {
        getDb,
        ObjectId
    }
)
    {
        
        const translateGetContractPaymentByIdResponse = buildTranslateGetContractPaymentByIdResponse();

        const createGetContractPaymentByIdOptions = buildCreateGetContractPaymentByIdOptions(
            {
                ObjectId: ObjectId
            }
        );

        const getContractPaymentById = buildGetContractPaymentById(
            {
                getDb: getDb,
                createOptions: createGetContractPaymentByIdOptions,
                translateResponse: translateGetContractPaymentByIdResponse
            }
        );

        const servies = Object.freeze(
            {
                getContractPaymentById
            }
        );

        return servies;
    }