module.exports = function buildSetUserAccess
(
    {
        setUserCompanyAccessPermissionDB
    }
)
    {
        if
        (
            !setUserCompanyAccessPermissionDB
        )
            {
                throw new Error('buildSetUserAccess must have setUserCompanyAccessPermissionDB.');
            }

        return async function setUserAccess
        (
            {
                userAccessInfo
            }
        )
            {
                
                const userCompanyAccessId = userAccessInfo.userCompanyAccessId
                const isAddContract = userAccessInfo.isAddContract
                const isUserManager = userAccessInfo.isUserManager
                const isCustomerManager = userAccessInfo.isCustomerManager
                const isContractManager = userAccessInfo.isContractManager
                const isContractPaymentManager = userAccessInfo.isContractPaymentManager
                const isContractReviewer = userAccessInfo.isContractReviewer
                const isActive = userAccessInfo.isActive
                const isAddProject = userAccessInfo.isAddProject
                const isAddContractTemplate= userAccessInfo.isAddContractTemplate

                

                const setUserCompanyAccessPermissionDBResult = await setUserCompanyAccessPermissionDB(
                    {
                        userCompanyAccessId: userCompanyAccessId,
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
                );

                return setUserCompanyAccessPermissionDBResult;
            }
    }