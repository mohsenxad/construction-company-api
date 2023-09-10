const buildTranslateGetUserByUsernameAndPasswordResponse = require('./src/translate-get-user-by-username-and-password-response')
const buildCreateGetUserByUsernameAndPasswordOptions = require('./src/create-get-user-by-username-and-password-options');
const buildGetUserByUsernameAndPassword = require('./src/get-user-by-username-and-password');

module.exports = function
(
    {
        getDb
    }
)
    {
        
        const translateGetUserByUsernameAndPasswordResponse = buildTranslateGetUserByUsernameAndPasswordResponse();

        const createGetUserByUsernameAndPasswordOptions = buildCreateGetUserByUsernameAndPasswordOptions();

        const getUserByUsernameAndPassword = buildGetUserByUsernameAndPassword(
            {
                getDb: getDb,
                createOptions: createGetUserByUsernameAndPasswordOptions,
                translateResponse: translateGetUserByUsernameAndPasswordResponse
            }
        );

        const servies = Object.freeze(
            {
                getUserByUsernameAndPassword
            }
        );

        return servies;
    }