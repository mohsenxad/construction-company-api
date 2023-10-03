
const buildTranslateGetUserCompanyAccessByIdResponse = require('./src/translate-get-user-company-access-by-id-response');
const buildCreateGetUserCompanyAccessByIdOptions = require('./src/create-get-user-company-access-by-id-options');
const buildGetUserCompanyAccessById = require('./src/get-user-company-access-by-id');

module.exports = function
(
    {
        getDb,
        ObjectId
    }
)
    {
        
        const translateGetUserCompanyAccessByIdResponse = buildTranslateGetUserCompanyAccessByIdResponse();

        const getUserCompanyAccessByIdOptions = buildCreateGetUserCompanyAccessByIdOptions(
            {
                ObjectId: ObjectId
            }
        );

        const getUserCompanyAccessById = buildGetUserCompanyAccessById(
            {
                getDb: getDb,
                createOptions: getUserCompanyAccessByIdOptions,
                translateResponse: translateGetUserCompanyAccessByIdResponse
            }
        );

        const servies = Object.freeze(
            {
                getUserCompanyAccessById
            }
        );

        return servies;
    }