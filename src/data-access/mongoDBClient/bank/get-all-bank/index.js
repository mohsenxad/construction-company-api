const buildTranslateGetAllBankResponse = require('./src/translate-get-all-bank-response');
const buildCreateGetAllBankOptions = require('./src/create-get-all-bank-options');
const buildGetAllBank = require('./src/get-all-bank');

module.exports = function
(
    {
        getDb
    }
)
    {
        
        const translateGetAllBankResponse = buildTranslateGetAllBankResponse();

        const createGetAllBankOptions = buildCreateGetAllBankOptions();

        const getAllBank = buildGetAllBank(
            {
                getDb: getDb,
                createOptions: createGetAllBankOptions,
                translateResponse: translateGetAllBankResponse
            }
        );

        const servies = Object.freeze(
            {
                getAllBank
            }
        );

        return servies;
    }