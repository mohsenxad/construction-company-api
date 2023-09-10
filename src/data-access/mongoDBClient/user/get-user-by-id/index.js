const buildTranslateGetUserByIdResponse = require('./src/translate-get-user-by-id-response');
const buildCreateGetUserByIdOptions = require('./src/create-get-user-by-id-options');
const buildGetUserById = require('./src/get-user-by-id');

module.exports = function
(
    {
        getDb,
        ObjectId
    }
)
    {
        
        const translateGetUserByIdResponse = buildTranslateGetUserByIdResponse();

        const createGetUserByIdOptions = buildCreateGetUserByIdOptions(
            {
                ObjectId: ObjectId
            }
        );

        const getUserById = buildGetUserById(
            {
                getDb: getDb,
                createOptions: createGetUserByIdOptions,
                translateResponse: translateGetUserByIdResponse
            }
        );

        const servies = Object.freeze(
            {
                getUserById
            }
        );

        return servies;
    }