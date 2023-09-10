module.exports = function
(
    {
        getDb,
        ObjectId
    }
)
    {

        const { addBankAccount } = require('./add-bank-account')(
            {
                getDb: getDb
            }
        )

        const { getAllBankAccount } = require('./get-all-bank-account')
        (
            {
                getDb: getDb,
                ObjectId: ObjectId
            } 
        );

        const services = Object.freeze(
            {
                getAllBankAccount,
                addBankAccount
            }
        );

        return services;

    }