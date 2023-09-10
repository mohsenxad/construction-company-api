const buildTranslateGetAllProjectTypeResponse = require('./src/translate-get-all-project-type-response');
const buildCreateGetAllProjectTypeOptions = require('./src/create-get-all-project-type-options');
const buildGetAllProjectType = require('./src/get-all-project-type');

module.exports = function
(
    {
        getDb
    }
)
    {
        
        const translateGetAllProjectTypeResponse = buildTranslateGetAllProjectTypeResponse();

        const createGetAllProjectTypeOptions = buildCreateGetAllProjectTypeOptions();

        const getAllProjectType = buildGetAllProjectType(
            {
                getDb: getDb,
                createOptions: createGetAllProjectTypeOptions,
                translateResponse: translateGetAllProjectTypeResponse
            }
        );

        const servies = Object.freeze(
            {
                getAllProjectType
            }
        );

        return servies;
    }