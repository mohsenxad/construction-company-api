const buildTranslateGetAllUserResponse = require('./src/translate-get-all-user-response');
const buildCreateGetAllUserOptions = require('./src/create-get-all-user-options');
const buildGetAllUser = require('./src/get-all-user');

module.exports = function
(
    {
        getDb
    }
)
    {
        
        const translateGetAllUserResponse = buildTranslateGetAllUserResponse();

        const createGetAllUserOptions = buildCreateGetAllUserOptions();

        const getAllUser = buildGetAllUser(
            {
                getDb: getDb,
                createOptions: createGetAllUserOptions,
                translateResponse: translateGetAllUserResponse
            }
        );

        const servies = Object.freeze(
            {
                getAllUser
            }
        );

        return servies;
    }