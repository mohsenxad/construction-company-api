module.exports = function
(
    {
        getDb
    }
)
    {
        const { addCustomer } = require('./add-customer')
        (
            {
                getDb: getDb
            } 
        );

        const { getCustomerByNationalCode } = require('./get-customer-by-national-code')
        (
            {
                getDb: getDb
            } 
        );

        const services = Object.freeze(
            {
                addCustomer,
                getCustomerByNationalCode
            }
        );

        return services;

    }