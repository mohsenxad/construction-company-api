module.exports = function
(
    {
        getDb,
        ObjectId
    }
)
    {
        // const { addContractCustomer } = require('./add-contract-customer')
        // (
        //     {
        //         getDb: getDb
        //     } 
        // );

        // const { removeContractCustomer } = require('./remove-contract-customer')
        // (
        //     {
        //         getDb: getDb,
        //         ObjectId: ObjectId
        //     } 
        // );

        const { getAllUserCompanyAccessListByUser } = require('./get-all-user-company-access-list-by-user')
        (
            {
                getDb: getDb,
                ObjectId: ObjectId
            }
        );


        const { getUserCompanyAccessByIdAndUserId } = require('./get-user-company-access-by-id-and-user-id')
        (
            {
                getDb: getDb,
                ObjectId: ObjectId
            }
        );
        

        const services = Object.freeze(
            {
                getAllUserCompanyAccessListByUser,
                getUserCompanyAccessByIdAndUserId
            }
        );

        return services;

    }