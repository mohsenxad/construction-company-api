const buildTranslateAddProjectItemResponse = require('./src/translate-add-project-item-response');
const buildCreateAddProjectItemOptions = require('./src/create-add-project-item-options');
const buildAddProjectItem = require('./src/add-project-item');

module.exports = function
(
    {
        getDb
    }
)
    {
        
        const translateAddProjectItemResponse = buildTranslateAddProjectItemResponse();

        const createAddProjectItemOptions = buildCreateAddProjectItemOptions();

        const addProjectItem = buildAddProjectItem(
            {
                getDb: getDb,
                createOptions: createAddProjectItemOptions,
                translateResponse: translateAddProjectItemResponse
            }
        );

        const servies = Object.freeze(
            {
                addProjectItem
            }
        );

        return servies;
    }