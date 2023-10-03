module.exports = function buildSetUserCompanyAccessPermission
(
    {
        getDb,
        createOptions,
        translateResponse
    }
)
    {
        if
        (
            !getDb
        )
            {
                throw new Error('buildSetUserCompanyAccessPermission must have getDb.');
            }

        if
        (
            !createOptions
        )
            {
                throw new Error('buildSetUserCompanyAccessPermission must have createOptions.');
            }

        if
        (
            !translateResponse
        )
            {
                throw new Error('buildSetUserCompanyAccessPermission must have translateResponse.');
            }

        const COLLECTION_NAME = 'userCompanyAccess';

        return async function setUserCompanyAccessPermission
        (
            {
                userCompanyAccessId,
                isAddContract = false,
                isUserManager= false,
                isCustomerManager= false,
                isContractManager= false,
                isContractPaymentManager= false,
                isContractReviewer= false,
                isActive =true,
                isAddContractTemplate= false,
                isAddProject = false
            }
        )
            {
                const db = await getDb();
                
                const collection = db.collection(
                    COLLECTION_NAME
                );

                const options = createOptions(
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

                const response = await collection.updateOne(
                    options.filter,
                    options.update
                );

                const result = translateResponse(
                    {
                        response: response
                    }
                );

                return result;
            }
    }