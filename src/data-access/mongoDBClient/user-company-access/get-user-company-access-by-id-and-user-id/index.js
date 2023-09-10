
const buildTranslateGetUserCompanyAccessByIdAndUserIdResponse = require('./src/translate-get-user-company-access-by-id-and-user-id-response');
const buildCreateGetUserCompanyAccessByIdAndUserIdOptions = require('./src/create-get-user-company-access-by-id-and-user-id-options');
const buildGetUserCompanyAccessByIdAndUserId = require('./src/get-user-company-access-by-id-and-user-id');

module.exports = function
(
    {
        getDb,
        ObjectId
    }
)
    {
        
        const translateGetUserCompanyAccessByIdAndUserIdResponse = buildTranslateGetUserCompanyAccessByIdAndUserIdResponse();

        const getUserCompanyAccessByIdAndUserIdOptions = buildCreateGetUserCompanyAccessByIdAndUserIdOptions(
            {
                ObjectId: ObjectId
            }
        );

        const getUserCompanyAccessByIdAndUserId = buildGetUserCompanyAccessByIdAndUserId(
            {
                getDb: getDb,
                createOptions: getUserCompanyAccessByIdAndUserIdOptions,
                translateResponse: translateGetUserCompanyAccessByIdAndUserIdResponse
            }
        );

        const servies = Object.freeze(
            {
                getUserCompanyAccessByIdAndUserId
            }
        );

        return servies;
    }