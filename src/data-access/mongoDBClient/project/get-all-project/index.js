const buildTranslateGetAllProjectResponse = require('./src/translate-get-all-project-response');
const buildCreateGetAllProjectOptions = require('./src/create-get-all-project-options');
const buildGetAllProject = require('./src/get-all-project');

module.exports = function
(
    {
        getDb,
        ObjectId
    }
)
    {
        
        const translateGetAllProjectResponse = buildTranslateGetAllProjectResponse();

        const createGetAllProjectOptions = buildCreateGetAllProjectOptions(
            {
                ObjectId: ObjectId
            }
        );

        const getAllProject = buildGetAllProject(
            {
                getDb: getDb,
                createOptions: createGetAllProjectOptions,
                translateResponse: translateGetAllProjectResponse
            }
        );

        const servies = Object.freeze(
            {
                getAllProject
            }
        );

        return servies;
    }