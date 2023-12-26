module.exports = function
(
    {
        getDb,
        ObjectId
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

        

        const { getCustomerById } = require('./get-customer-by-id')
        (
            {
                getDb: getDb,
                ObjectId: ObjectId
            } 
        );
        
        
        const { editCustomer } = require('./edit-customer')
        (
            {
                getDb: getDb,
                ObjectId: ObjectId
            } 
        );

        const services = Object.freeze(
            {
                addCustomer,
                getCustomerByNationalCode,
                getCustomerById,
                editCustomer
            }
        );

        return services;

    }