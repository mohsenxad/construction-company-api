const buildTranslateGetAllContractByProjectResponse = require('./src/translate-get-all-contract-by-project-response');
const buildCreateGetAllContractByProjectOptions = require('./src/create-get-all-contract-by-project-options');
const buildGetAllContractByProject = require('./src/get-all-contract-by-project');

module.exports = function
(
    {
        getDb,
        ObjectId
    }
)
    {
        
        const translateGetAllContractByProjectResponse = buildTranslateGetAllContractByProjectResponse();

        const createGetAllContractByProjectOptions = buildCreateGetAllContractByProjectOptions(
            {
                ObjectId: ObjectId
            }
        );

        const getAllContractByProject = buildGetAllContractByProject(
            {
                getDb: getDb,
                createOptions: createGetAllContractByProjectOptions,
                translateResponse: translateGetAllContractByProjectResponse
            }
        );

        const servies = Object.freeze(
            {
                getAllContractByProject
            }
        );

        return servies;
    }