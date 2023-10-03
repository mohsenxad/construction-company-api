const buildTranslateSetUserCompanyAccessPermissionResponse = require('./src/translate-set-user-company-access-permission-response');
const buildCreateSetUserCompanyAccessPermissionOptions = require('./src/create-set-user-company-access-permission-options');
const buildSetUserCompanyAccessPermission = require('./src/set-user-company-access-permission');

module.exports = function
(
    {
        getDb,
        ObjectId
    }
)
    {
        
        const translateSetUserCompanyAccessPermissionResponse = buildTranslateSetUserCompanyAccessPermissionResponse();

        const createSetUserCompanyAccessPermissionOptions = buildCreateSetUserCompanyAccessPermissionOptions(
            {
                ObjectId: ObjectId
            }
        );

        const setUserCompanyAccessPermission = buildSetUserCompanyAccessPermission(
            {
                getDb: getDb,
                createOptions: createSetUserCompanyAccessPermissionOptions,
                translateResponse: translateSetUserCompanyAccessPermissionResponse
            }
        );

        const servies = Object.freeze(
            {
                setUserCompanyAccessPermission
            }
        );

        return servies;
    }