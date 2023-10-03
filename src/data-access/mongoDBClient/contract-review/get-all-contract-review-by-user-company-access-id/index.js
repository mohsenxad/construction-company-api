const buildTranslateGetAllContractReviewByUserCompanyAccessIdResponse = require('./src/translate-get-all-contract-review-by-user-company-access-id-response');
const buildCreateGetAllContractReviewByUserCompanyAccessIdOptions = require('./src/create-get-all-contract-review-by-user-company-access-id-options');
const buildGetAllContractReviewByUserCompanyAccessId = require('./src/get-all-contract-review-by-user-company-access-id');

module.exports = function
(
    {
        getDb,
        ObjectId
    }
)
    {
        
        const translateGetAllContractReviewByUserCompanyAccessIdResponse = buildTranslateGetAllContractReviewByUserCompanyAccessIdResponse();

        const createGetAllContractReviewByUserCompanyAccessIdOptions = buildCreateGetAllContractReviewByUserCompanyAccessIdOptions(
            {
                ObjectId: ObjectId
            }
        );

        const getAllContractReviewByUserCompanyAccessId = buildGetAllContractReviewByUserCompanyAccessId(
            {
                getDb: getDb,
                createOptions: createGetAllContractReviewByUserCompanyAccessIdOptions,
                translateResponse: translateGetAllContractReviewByUserCompanyAccessIdResponse
            }
        );

        const servies = Object.freeze(
            {
                getAllContractReviewByUserCompanyAccessId
            }
        );

        return servies;
    }