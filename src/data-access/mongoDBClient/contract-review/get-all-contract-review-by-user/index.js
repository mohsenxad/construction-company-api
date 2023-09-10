const buildTranslateGetAllContractReviewByUserResponse = require('./src/translate-get-all-contract-review-by-user-response');
const buildCreateGetAllContractReviewByUserOptions = require('./src/create-get-all-contract-review-by-user-options');
const buildGetAllContractReviewByUser = require('./src/get-all-contract-review-by-user');

module.exports = function
(
    {
        getDb,
        ObjectId
    }
)
    {
        
        const translateGetAllContractReviewByUserResponse = buildTranslateGetAllContractReviewByUserResponse();

        const createGetAllContractReviewByUserOptions = buildCreateGetAllContractReviewByUserOptions(
            {
                ObjectId: ObjectId
            }
        );

        const getAllContractReviewByUser = buildGetAllContractReviewByUser(
            {
                getDb: getDb,
                createOptions: createGetAllContractReviewByUserOptions,
                translateResponse: translateGetAllContractReviewByUserResponse
            }
        );

        const servies = Object.freeze(
            {
                getAllContractReviewByUser
            }
        );

        return servies;
    }