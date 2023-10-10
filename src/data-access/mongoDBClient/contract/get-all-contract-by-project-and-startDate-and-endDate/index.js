const buildTranslateGetAllContractByProjectAndStartDateAndEndDateResponse = require('./src/translate-get-all-contract-by-project-and-startDate-and-endDate-response');
const buildCreateGetAllContractByProjectAndStartDateAndEndDateOptions = require('./src/create-get-all-contract-by-project-and-startDate-and-endDate-options');
const buildGetAllContractByProjectAndStartDateAndEndDate = require('./src/get-all-contract-by-project-and-startDate-and-endDate');

module.exports = function
(
    {
        getDb,
        ObjectId
    }
)
    {
        
        const translateGetAllContractByProjectAndStartDateAndEndDateResponse = buildTranslateGetAllContractByProjectAndStartDateAndEndDateResponse();

        const createGetAllContractByProjectAndStartDateAndEndDateOptions = buildCreateGetAllContractByProjectAndStartDateAndEndDateOptions(
            {
                ObjectId: ObjectId
            }
        );

        const getAllContractByProjectAndStartDateAndEndDate = buildGetAllContractByProjectAndStartDateAndEndDate(
            {
                getDb: getDb,
                createOptions: createGetAllContractByProjectAndStartDateAndEndDateOptions,
                translateResponse: translateGetAllContractByProjectAndStartDateAndEndDateResponse
            }
        );

        const servies = Object.freeze(
            {
                getAllContractByProjectAndStartDateAndEndDate
            }
        );

        return servies;
    }