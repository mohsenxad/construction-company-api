const buildTranslateAddSystemLogResponse = require('./src/translate-add-system-log-response');
const buildCreateAddSystemLogOptions = require('./src/create-add-system-log-options');
const buildAddSystemLog = require('./src/add-system-log');

module.exports = function
(
    {
        getDb
    }
)
    {
        
        const translateAddSystemLogResponse = buildTranslateAddSystemLogResponse();

        const createAddSystemLogOptions = buildCreateAddSystemLogOptions();

        const addSystemLog = buildAddSystemLog(
            {
                getDb: getDb,
                createOptions: createAddSystemLogOptions,
                translateResponse: translateAddSystemLogResponse
            }
        );

        const servies = Object.freeze(
            {
                addSystemLog
            }
        );

        return servies;
    }