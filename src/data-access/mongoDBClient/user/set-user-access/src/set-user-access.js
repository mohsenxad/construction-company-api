module.exports = function buildSetUserAccess
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
                throw new Error('buildSetUserAccess must have getDb.');
            }

        if
        (
            !createOptions
        )
            {
                throw new Error('buildSetUserAccess must have createOptions.');
            }

        if
        (
            !translateResponse
        )
            {
                throw new Error('buildSetUserAccess must have translateResponse.');
            }

        const COLLECTION_NAME = 'users';

        return async function setUserAccess
        (
            {
                userId,
                isAddContract = false,
                isUserManager= false,
                isCustomerManager= false,
                isContractManager= false,
                isContractPaymentManager= false,
                isContractReviwer= false,
                isActive =true
            }
        )
            {
                const db = await getDb();
                
                const collection = db.collection(
                    COLLECTION_NAME
                );

                const options = createOptions(
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