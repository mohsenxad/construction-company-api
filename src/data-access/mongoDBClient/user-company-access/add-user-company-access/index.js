const buildTranslateAddUserCompanyAccessResponse = require('./src/translate-add-user-company-access-response');
const buildCreateAddUserCompanyAccessOptions = require('./src/create-add-user-company-access-options');
const buildAddUserCompanyAccess = require('./src/add-user-company-access');

module.exports = function
(
    {
        getDb
    }
)
    {
        
        const translateAddUserCompanyAccessResponse = buildTranslateAddUserCompanyAccessResponse();

        const createAddUserCompanyAccessOptions = buildCreateAddUserCompanyAccessOptions();

        const addUserCompanyAccess = buildAddUserCompanyAccess(
            {
                getDb: getDb,
                createOptions: createAddUserCompanyAccessOptions,
                translateResponse: translateAddUserCompanyAccessResponse
            }
        );

        const servies = Object.freeze(
            {
                addUserCompanyAccess
            }
        );

        return servies;
    }