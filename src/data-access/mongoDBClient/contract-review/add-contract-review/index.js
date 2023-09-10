const buildTranslateAddContractReviewResponse = require('./src/translate-add-contract-review-response');
const buildCreateAddContractReviewOptions = require('./src/create-add-contract-review-options');
const buildAddContractReview = require('./src/add-contract-review');

module.exports = function
(
    {
        getDb
    }
)
    {
        
        const translateAddContractReviewResponse = buildTranslateAddContractReviewResponse();

        const createAddContractReviewOptions = buildCreateAddContractReviewOptions();

        const addContractReview = buildAddContractReview(
            {
                getDb: getDb,
                createOptions: createAddContractReviewOptions,
                translateResponse: translateAddContractReviewResponse
            }
        );

        const servies = Object.freeze(
            {
                addContractReview
            }
        );

        return servies;
    }