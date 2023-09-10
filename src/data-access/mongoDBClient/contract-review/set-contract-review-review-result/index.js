const buildTranslateSetContractReviewReviewResultResponse = require('./src/translate-set-contract-review-review-result-response');
const buildCreateSetContractReviewReviewResultOptions = require('./src/create-set-contract-review-review-result-options');
const buildSetContractReviewReviewResult = require('./src/set-contract-review-review-result');

module.exports = function
(
    {
        getDb,
        ObjectId
    }
)
    {
        
        const translateSetContractReviewReviewResultResponse = buildTranslateSetContractReviewReviewResultResponse();

        const createSetContractReviewReviewResultOptions = buildCreateSetContractReviewReviewResultOptions(
            {
                ObjectId: ObjectId
            }
        );

        const setContractReviewReviewResult = buildSetContractReviewReviewResult(
            {
                getDb: getDb,
                createOptions: createSetContractReviewReviewResultOptions,
                translateResponse: translateSetContractReviewReviewResultResponse
            }
        );

        const servies = Object.freeze(
            {
                setContractReviewReviewResult
            }
        );

        return servies;
    }