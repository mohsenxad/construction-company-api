const buildTranslateGetAllCompanyResponse = require('./src/translate-get-all-company-response');
const buildCreateGetAllCompanyOptions = require('./src/create-get-all-company-options');
const buildGetAllCompany = require('./src/get-all-company');

module.exports = function
(
    {
        getDb,
        ObjectId
    }
)
    {
        
        const translateGetAllCompanyResponse = buildTranslateGetAllCompanyResponse();

        const createGetAllCompanyOptions = buildCreateGetAllCompanyOptions();

        const getAllCompany = buildGetAllCompany(
            {
                getDb: getDb,
                createOptions: createGetAllCompanyOptions,
                translateResponse: translateGetAllCompanyResponse
            }
        );

        const servies = Object.freeze(
            {
                getAllCompany
            }
        );

        return servies;
    }