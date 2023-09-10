const buildTranslateGetProjectByIdResponse = require('./src/translate-get-project-by-id-response');
const buildCreateGetProjectByIdOptions = require('./src/create-get-project-by-id-options');
const buildGetProjectById = require('./src/get-project-by-id');

module.exports = function
(
    {
        getDb,
        ObjectId
    }
)
    {
        
        const translateGetProjectByIdResponse = buildTranslateGetProjectByIdResponse();

        const createGetProjectByIdOptions = buildCreateGetProjectByIdOptions(
            {
                ObjectId: ObjectId
            }
        );

        const getProjectById = buildGetProjectById(
            {
                getDb: getDb,
                createOptions: createGetProjectByIdOptions,
                translateResponse: translateGetProjectByIdResponse
            }
        );

        const servies = Object.freeze(
            {
                getProjectById
            }
        );

        return servies;
    }