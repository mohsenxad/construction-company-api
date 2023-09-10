module.exports = function
(
    {
        getDb
    }
)
    {

        const { getAllContractPaymentMethods } = require('./get-all-contract-payment-method')
        (
            {
                getDb: getDb
            } 
        );

        const services = Object.freeze(
            {
                getAllContractPaymentMethods
            }
        );

        return services;

    }