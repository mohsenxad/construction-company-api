const buildTranslateAddBankAccountResponse = require('./src/translate-add-bank-account-response');
const buildCreateAddBankAccountOptions = require('./src/create-add-bank-account-options');
const buildAddBankAccount = require('./src/add-bank-account');

module.exports = function
(
    {
        getDb
    }
)
    {
        
        const translateAddBankAccountResponse = buildTranslateAddBankAccountResponse();

        const createAddBankAccountOptions = buildCreateAddBankAccountOptions();

        const addBankAccount = buildAddBankAccount(
            {
                getDb:getDb,
                createAddBankAccountOptions: createAddBankAccountOptions,
                translateAddBankAccountResponse: translateAddBankAccountResponse
            }
        );

        const servies = Object.freeze(
            {
                addBankAccount
            }
        );

        return servies;
    }