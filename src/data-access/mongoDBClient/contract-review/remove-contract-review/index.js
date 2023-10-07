const buildTransalteRemoveContractReviewResponse = require('./src/translate-remove-contract-review-response');
const buildCreateRemoveContractReviewOptions = require('./src/create-remove-contract-review-options');
const buildRemoveContractReview = require('./src/remove-contract-review');

module.exports = function
(
    {
        getDb,
        ObjectId
    }
)
    {
        
        const transalteRemoveContractReviewResponse = buildTransalteRemoveContractReviewResponse();

        const createRemoveContractReviewOptions = buildCreateRemoveContractReviewOptions(
            {
                ObjectId: ObjectId
            }
        );

        const removeContractReview = buildRemoveContractReview(
            {
                getDb: getDb,
                createOptions: createRemoveContractReviewOptions,
                translateResponse: transalteRemoveContractReviewResponse
            }
        );

        const servies = Object.freeze(
            {
                removeContractReview
            }
        );

        return servies;
    }