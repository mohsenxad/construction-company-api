const buildTranslateGetAllContractCustomerByContractResponse = require('./src/translate-get-all-contract-customer-by-contract-response');
const buildCreateGetAllContractCustomerByContractOptions = require('./src/create-get-all-contract-customer-by-contract-options');
const buildGetAllContractCustomerByContract = require('./src/get-all-contract-customer-by-contract');

module.exports = function
(
    {
        getDb,
        ObjectId
    }
)
    {
        
        const translateGetAllContractCustomerByContractResponse = buildTranslateGetAllContractCustomerByContractResponse();

        const createGetAllContractCustomerByContractOptions = buildCreateGetAllContractCustomerByContractOptions(
            {
                ObjectId: ObjectId
            }
        );

        const getAllContractCustomerByContract = buildGetAllContractCustomerByContract(
            {
                getDb: getDb,
                createOptions: createGetAllContractCustomerByContractOptions,
                translateResponse: translateGetAllContractCustomerByContractResponse
            }
        );

        const servies = Object.freeze(
            {
                getAllContractCustomerByContract
            }
        );

        return servies;
    }