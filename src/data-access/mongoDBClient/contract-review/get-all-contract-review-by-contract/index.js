const buildTranslateGetAllContractReviewByContractResponse = require('./src/translate-get-all-contract-review-by-contract-response');
const buildCreateGetAllContractReviewByContractOptions = require('./src/create-get-all-contract-review-by-contract-options');
const buildGetAllContractReviewByContract = require('./src/get-all-contract-review-by-contract');

module.exports = function
(
    {
        getDb,
        ObjectId
    }
)
    {
        
        const translateGetAllContractReviewByContractResponse = buildTranslateGetAllContractReviewByContractResponse();

        const createGetAllContractReviewByContractOptions = buildCreateGetAllContractReviewByContractOptions(
            {
                ObjectId: ObjectId
            }
        );

        const getAllContractReviewByContract = buildGetAllContractReviewByContract(
            {
                getDb: getDb,
                createOptions: createGetAllContractReviewByContractOptions,
                translateResponse: translateGetAllContractReviewByContractResponse
            }
        );

        const servies = Object.freeze(
            {
                getAllContractReviewByContract
            }
        );

        return servies;
    }