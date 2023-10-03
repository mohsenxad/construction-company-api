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

        
        const { getAllUserCompanyAccessByIsContractReviewer } = require('./get-all-user-company-access-by-isContractReviwer')
        (
            {
                getDb: getDb,
                ObjectId: ObjectId
            }
        );

        const { setUserCompanyAccessPermission } = require('./set-user-company-access-permission')
        (
            {
                getDb: getDb,
                ObjectId: ObjectId
            }
        );

        

        const { getUserCompanyAccessById } = require('./get-user-company-access-by-id')
        (
            {
                getDb: getDb,
                ObjectId: ObjectId
            }
        );

        

        const { addUserCompanyAccess } = require('./add-user-company-access')
        (
            {
                getDb: getDb
            }
        );

        
        const { getAllUserCompanyAccessByCompany } = require('./get-all-user-company-access-by-company')
        (
            {
                getDb: getDb,
                ObjectId: ObjectId
            }
        );
        

        const services = Object.freeze(
            {
                getAllUserCompanyAccessListByUser,
                getUserCompanyAccessByIdAndUserId,
                getAllUserCompanyAccessByIsContractReviewer,
                setUserCompanyAccessPermission,
                getUserCompanyAccessById,
                addUserCompanyAccess,
                getAllUserCompanyAccessByCompany
            }
        );

        return services;

    }