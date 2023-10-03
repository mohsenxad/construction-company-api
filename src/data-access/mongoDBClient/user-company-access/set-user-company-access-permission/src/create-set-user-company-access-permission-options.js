module.exports = function buildCreateSetUserCompanyAccessPermissionOptions
(
    {
        ObjectId
    }
)
    {
        if
        (
            !ObjectId
        )
            {
                throw new Error('buildCreateSetUserCompanyAccessPermissionOptions must have ObjectId.');
            }

        return function createSetUserCompanyAccessPermissionOptions
        (
            {
                userCompanyAccessId,
                isAddContract,
                isUserManager,
                isCustomerManager,
                isContractManager,
                isContractPaymentManager,
                isContractReviewer,
                isActive,
                isAddContractTemplate,
                isAddProject
            }
        )
            {
                if
                (
                    !userCompanyAccessId
                )
                    {
                        throw new Error('createSetUserCompanyAccessPermissionOptions must have userCompanyAccessId.');
                    }

              

                const userCompanyAccessObjectId = new ObjectId(
                    userCompanyAccessId
                );


                const filter = {
                    "_id": userCompanyAccessObjectId
                };

                const update = {
                    $set: {
                        isAddContract: isAddContract,
                        isUserManager: isUserManager,
                        isCustomerManager: isCustomerManager,
                        isContractManager: isContractManager,
                        isContractPaymentManager: isContractPaymentManager,
                        isContractReviewer: isContractReviewer,
                        isActive: isActive,
                        isAddContractTemplate: isAddContractTemplate,
                        isAddProject: isAddProject
                    }
                }
                
                const options = {
                    filter:filter,
                    update: update,
                }
                
                return options;
            }
    }