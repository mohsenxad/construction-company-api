const buildTranslateAddUserResponse = require('./src/translate-add-user-response');
const buildCreateAddUserOptions = require('./src/create-add-user-options');
const buildAddUser = require('./src/add-user');

module.exports = function
(
    {
        getDb
    }
)
    {
        
        const translateAddUserResponse = buildTranslateAddUserResponse();

        const createAddUserOptions = buildCreateAddUserOptions();

        const addUser = buildAddUser(
            {
                getDb: getDb,
                createOptions: createAddUserOptions,
                translateResponse: translateAddUserResponse
            }
        );

        const servies = Object.freeze(
            {
                addUser
            }
        );

        return servies;
    }