module.exports = function
(
    {
        getDb
    }
)
    {

        const { getAllContractType } = require('./get-all-contract-type')
        (
            {
                getDb: getDb
            } 
        );

        const services = Object.freeze(
            {
                getAllContractType
            }
        );

        return services;

    }