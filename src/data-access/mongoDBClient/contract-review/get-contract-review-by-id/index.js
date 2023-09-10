const buildTranslateGetContractReviewByIdResponse = require('./src/translate-get-contract-review-by-id-response');
const buildCreateGetContractReviewByIdOpions = require('./src/create-get-contract-review-by-id-opions');
const buildGetContractReviewById = require('./src/get-contract-review-by-id');

module.exports = function
(
    {
        getDb,
        ObjectId
    }
)
    {
        
        const translateGetContractReviewByIdResponse = buildTranslateGetContractReviewByIdResponse();

        const createGetContractReviewByIdOpions = buildCreateGetContractReviewByIdOpions(
            {
                ObjectId: ObjectId
            }
        );

        const getContractReviewById = buildGetContractReviewById(
            {
                getDb: getDb,
                createOptions: createGetContractReviewByIdOpions,
                translateResponse: translateGetContractReviewByIdResponse
            }
        );

        const servies = Object.freeze(
            {
                getContractReviewById
            }
        );

        return servies;
    }