const buildTranslateGetAllUserCompanyAccessByIsContractReviewerReponse = require('./src/translate-get-all-user-company-access-by-isContractReviwer-response');
const buildCreateGetAllUserCompanyAccessByIsContractReviewerOptions = require('./src/create-get-all-user-company-access-by-isContractReviwer-options');
const buildGetAllUserCompanyAccessByIsContractReviewer = require('./src/get-all-user-company-access-by-isContractReviwer');

module.exports = function
(
    {
        getDb,
        ObjectId
    }
)
    {
        
        const translateGetAllUserCompanyAccessByIsContractReviewerReponse = buildTranslateGetAllUserCompanyAccessByIsContractReviewerReponse();

        const createGetAllUserCompanyAccessByIsContractReviewerOptions = buildCreateGetAllUserCompanyAccessByIsContractReviewerOptions(
            {
                ObjectId: ObjectId
            }
        );

        const getAllUserCompanyAccessByIsContractReviewer = buildGetAllUserCompanyAccessByIsContractReviewer(
            {
                getDb: getDb,
                createOptions: createGetAllUserCompanyAccessByIsContractReviewerOptions,
                translateResponse: translateGetAllUserCompanyAccessByIsContractReviewerReponse
            }
        );

        const servies = Object.freeze(
            {
                getAllUserCompanyAccessByIsContractReviewer
            }
        );

        return servies;
    }