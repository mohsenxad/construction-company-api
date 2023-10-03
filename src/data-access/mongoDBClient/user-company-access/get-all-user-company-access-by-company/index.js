const buildTranslateGetAllUserCompanyAccessByCompanyReponse = require('./src/translate-get-all-user-company-access-by-company-response');
const buildCreateGetAllUserCompanyAccessByCompanyOptions = require('./src/create-get-all-user-company-access-by-company-options');
const buildGetAllUserCompanyAccessByCompany = require('./src/get-all-user-company-access-by-company');

module.exports = function
(
    {
        getDb,
        ObjectId
    }
)
    {
        
        const translateGetAllUserCompanyAccessByCompanyReponse = buildTranslateGetAllUserCompanyAccessByCompanyReponse();

        const createGetAllUserCompanyAccessByCompanyOptions = buildCreateGetAllUserCompanyAccessByCompanyOptions(
            {
                ObjectId: ObjectId
            }
        );

        const getAllUserCompanyAccessByCompany = buildGetAllUserCompanyAccessByCompany(
            {
                getDb: getDb,
                createOptions: createGetAllUserCompanyAccessByCompanyOptions,
                translateResponse: translateGetAllUserCompanyAccessByCompanyReponse
            }
        );

        const servies = Object.freeze(
            {
                getAllUserCompanyAccessByCompany
            }
        );

        return servies;
    }