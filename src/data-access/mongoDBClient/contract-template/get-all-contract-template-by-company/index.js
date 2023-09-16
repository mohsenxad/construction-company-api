const buildTranslateGetAllContractTemplateByCompanyResponse = require('./src/translate-get-all-contract-template-by-company-response');
const buildCreateGetAllContractTemplateByCompanyOptions = require('./src/create-get-all-contract-template-by-company-options');
const buildGetAllContractTemplateByCompany = require('./src/get-all-contract-template-by-company');

module.exports = function
(
    {
        getDb,
        ObjectId
    }
)
    {
        
        const translateGetAllContractTemplateByCompanyResponse = buildTranslateGetAllContractTemplateByCompanyResponse();

        const createGetAllContractTemplateByCompanyOptions = buildCreateGetAllContractTemplateByCompanyOptions(
            {
                ObjectId: ObjectId
            }
        );

        const getAllContractTemplateByCompany = buildGetAllContractTemplateByCompany(
            {
                getDb: getDb,
                createOptions: createGetAllContractTemplateByCompanyOptions,
                translateResponse: translateGetAllContractTemplateByCompanyResponse
            }
        );

        const servies = Object.freeze(
            {
                getAllContractTemplateByCompany
            }
        );

        return servies;
    }