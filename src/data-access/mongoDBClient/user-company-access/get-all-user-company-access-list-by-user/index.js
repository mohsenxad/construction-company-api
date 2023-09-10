
const buldTranslateGetAllUserCompanyAccessListByUserResponse = require('./src/translate-get-all-user-company-access-list-by-user-response');
const buldCreateGetAllUserCompanyAccessListByUserOptions = require('./src/create-get-all-user-company-access-list-by-user-options');
const buldGetAllUserCompanyAccessListByUser = require('./src/get-all-user-company-access-list-by-user');

module.exports = function
(
    {
        getDb,
        ObjectId
    }
)
    {
        
        const translateGetAllUserCompanyAccessListByUserResponse = buldTranslateGetAllUserCompanyAccessListByUserResponse();

        const createGetAllUserCompanyAccessListByUserOptions = buldCreateGetAllUserCompanyAccessListByUserOptions(
            {
                ObjectId: ObjectId
            }
        );

        const getAllUserCompanyAccessListByUser = buldGetAllUserCompanyAccessListByUser(
            {
                getDb: getDb,
                createOptions: createGetAllUserCompanyAccessListByUserOptions,
                translateResponse: translateGetAllUserCompanyAccessListByUserResponse
            }
        );

        const servies = Object.freeze(
            {
                getAllUserCompanyAccessListByUser
            }
        );

        return servies;
    }