module.exports = function buildSetUserAccess
(
    {
        setUserAccessDB
    }
)
    {
        if
        (
            !setUserAccessDB
        )
            {
                throw new Error('buildSetUserAccess must have setUserAccessDB.');
            }

        return async function setUserAccess
        (
            {
                userAccessInfo
            }
        )
            {
                
                const userId = userAccessInfo.userId
                const isAddContract = userAccessInfo.isAddContract
                const isUserManager = userAccessInfo.isUserManager
                const isCustomerManager = userAccessInfo.isCustomerManager
                const isContractManager = userAccessInfo.isContractManager
                const isContractPaymentManager = userAccessInfo.isContractPaymentManager
                const isContractReviwer = userAccessInfo.isContractReviwer
                const isActive = userAccessInfo.isActive

                

                const setUserAccessDBResult = await setUserAccessDB(
                    {
                        userId: userId,
                        isAddContract: isAddContract,
                        isUserManager: isUserManager,
                        isCustomerManager: isCustomerManager,
                        isContractManager: isContractManager,
                        isContractPaymentManager: isContractPaymentManager,
                        isContractReviwer: isContractReviwer,
                        isActive: isActive
                    }
                );

                return setUserAccessDBResult;
            }
    }