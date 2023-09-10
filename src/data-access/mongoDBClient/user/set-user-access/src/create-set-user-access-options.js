module.exports = function buildCreateSetUserAccessOptions
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
                throw new Error('buildCreateSetUserAccessOptions must have ObjectId.');
            }
        return function createSetUserAccessOptions
        (
            {
                userId,
                isAddContract,
                isUserManager,
                isCustomerManager,
                isContractManager,
                isContractPaymentManager,
                isContractReviwer,
                isActive
            }
        )
            {

                if
                (
                    !userId
                )
                    {
                        throw new Error('createSetUserAccessOptions must have userId.');
                    }

              

                const userObjectId = new ObjectId(
                    userId
                );


                const filter = {
                    "_id": userObjectId
                };

                const update = {
                    $set: {
                        isAddContract: isAddContract,
                        isUserManager: isUserManager,
                        isCustomerManager: isCustomerManager,
                        isContractManager: isContractManager,
                        isContractPaymentManager: isContractPaymentManager,
                        isContractReviwer: isContractReviwer,
                        isActive: isActive
                    }
                }
                
                const options = {
                    filter:filter,
                    update: update,
                }
                
                return options;
            }
    }