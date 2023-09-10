const buildTranslateGetAllContractPaymentByCompanyAndFromDateAndToDateResponse = require('./src/translate-get-all-contract-payment-by-company-and-fromDate-and-toDate-response');
const buildCreateGetAllContractPaymentByCompanyAndFromDateAndToDateOptions = require('./src/create-get-all-contract-payment-by-company-and-fromDate-and-toDate-options');
const buildGetAllContractPaymentByCompanyAndFromDateAndToDate = require('./src/get-all-contract-payment-by-company-and-fromDate-and-toDate');

module.exports = function
(
    {
        getDb,
        ObjectId
    }
)
    {
        
        const translateGetAllContractPaymentByCompanyAndFromDateAndToDateResponse = buildTranslateGetAllContractPaymentByCompanyAndFromDateAndToDateResponse();

        const createGetAllContractPaymentByCompanyAndFromDateAndToDateOptions = buildCreateGetAllContractPaymentByCompanyAndFromDateAndToDateOptions(
            {
                ObjectId: ObjectId
            }
        );

        const getAllContractPaymentByCompanyAndFromDateAndToDate = buildGetAllContractPaymentByCompanyAndFromDateAndToDate(
            {
                getDb: getDb,
                createOptions: createGetAllContractPaymentByCompanyAndFromDateAndToDateOptions,
                translateResponse: translateGetAllContractPaymentByCompanyAndFromDateAndToDateResponse
            }
        );

        const servies = Object.freeze(
            {
                getAllContractPaymentByCompanyAndFromDateAndToDate
            }
        );

        return servies;
    }