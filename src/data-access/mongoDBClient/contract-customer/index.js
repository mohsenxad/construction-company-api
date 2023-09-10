module.exports = function
(
    {
        getDb,
        ObjectId
    }
)
    {
        const { addContractCustomer } = require('./add-contract-customer')
        (
            {
                getDb: getDb
            } 
        );

        const { removeContractCustomer } = require('./remove-contract-customer')
        (
            {
                getDb: getDb,
                ObjectId: ObjectId
            } 
        );

        const { getAllContractCustomerByContract } = require('./get-all-contract-customer-by-contract')
        (
            {
                getDb: getDb,
                ObjectId: ObjectId
            }
        );

        const services = Object.freeze(
            {
                addContractCustomer,
                removeContractCustomer,
                getAllContractCustomerByContract
            }
        );

        return services;

    }