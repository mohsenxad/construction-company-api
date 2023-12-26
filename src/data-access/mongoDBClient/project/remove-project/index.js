const buildTransalteRemoveProjectResponse = require('./src/translate-remove-project-response');
const buildCreateRemoveProjectOptions = require('./src/create-remove-project-options');
const buildRemoveProject = require('./src/remove-project');

module.exports = function
(
    {
        getDb,
        ObjectId
    }
)
    {
        
        const transalteRemoveProjectResponse = buildTransalteRemoveProjectResponse();

        const createRemoveProjectOptions = buildCreateRemoveProjectOptions(
            {
                ObjectId: ObjectId
            }
        );

        const removeProject = buildRemoveProject(
            {
                getDb: getDb,
                createOptions: createRemoveProjectOptions,
                translateResponse: transalteRemoveProjectResponse
            }
        );

        const servies = Object.freeze(
            {
                removeProject
            }
        );

        return servies;
    }