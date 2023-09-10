const buildTranslateSetUserAccessResponse = require('./src/translate-set-user-access-response');
const buildCreateSetUserAccessOptions = require('./src/create-set-user-access-options');
const buildSetUserAccess = require('./src/set-user-access');

module.exports = function
(
    {
        getDb,
        ObjectId
    }
)
    {
        
        const translateSetUserAccessResponse = buildTranslateSetUserAccessResponse();

        const createSetUserAccessOptions = buildCreateSetUserAccessOptions(
            {
                ObjectId: ObjectId
            }
        );

        const setUserAccess = buildSetUserAccess(
            {
                getDb: getDb,
                createOptions: createSetUserAccessOptions,
                translateResponse: translateSetUserAccessResponse
            }
        );

        const servies = Object.freeze(
            {
                setUserAccess
            }
        );

        return servies;
    }