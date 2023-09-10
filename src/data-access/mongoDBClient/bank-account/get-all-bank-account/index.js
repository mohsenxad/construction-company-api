const buildTranslateGetAllBankAccountResponse = require('./src/translate-get-all-bank-account-response');
const buildCreateGetAllPBankAccountOptions = require('./src/create-get-all-bank-account-options');
const buildGetAllBankAccount = require('./src/get-all-bank-account');

module.exports = function
(
    {
        getDb,
        ObjectId
    }
)
    {
        
        const translateGetAllBankAccountResponse = buildTranslateGetAllBankAccountResponse();

        const createGetAllPBankAccountOptions = buildCreateGetAllPBankAccountOptions(
            {
                ObjectId: ObjectId
            }
        );

        const getAllBankAccount = buildGetAllBankAccount(
            {
                getDb: getDb,
                createOptions: createGetAllPBankAccountOptions,
                translateResponse: translateGetAllBankAccountResponse
            }
        );

        const servies = Object.freeze(
            {
                getAllBankAccount
            }
        );

        return servies;
    }