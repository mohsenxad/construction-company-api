const buildTranslateAddProjectResponse = require('./src/translate-add-project-response');
const buildCreateAddProjectOptions = require('./src/create-add-project-options');
const buildAddProject = require('./src/add-project');

module.exports = function
(
    {
        getDb
    }
)
    {
        
        const translateAddProjectResponse = buildTranslateAddProjectResponse();

        const createAddProjectOptions = buildCreateAddProjectOptions();

        const addProject = buildAddProject(
            {
                getDb: getDb,
                createAddProjectOptions: createAddProjectOptions,
                translateAddProjectResponse: translateAddProjectResponse
            }
        );

        const servies = Object.freeze(
            {
                addProject
            }
        );

        return servies;
    }