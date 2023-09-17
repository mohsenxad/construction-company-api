module.exports = function buildSetContractPaymentIsSettled
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
                throw new Error('buildSetContractPaymentIsSettled must have getDb.');
            }

        if
        (
            !createOptions
        )
            {
                throw new Error('buildSetContractPaymentIsSettled must have createOptions.');
            }

        if
        (
            !translateResponse
        )
            {
                throw new Error('buildSetContractPaymentIsSettled must have translateResponse.');
            }

        const COLLECTION_NAME = 'contractPayments';
        return async function setContractPaymentIsSettled
        (
            {
                contractPaymentId,
                isSettled,
            }
        )
            {
                if
                (
                    !contractPaymentId
                )
                    {
                        throw new Error('setContractPaymentIsSettled must have contractPaymentId.');
                    }

                if
                (
                    typeof isSettled !== "boolean"
                )
                    {
                        throw new Error('setContractPaymentIsSettled must have isSettled.');
                    }

                const db = await getDb();
                
                const collection = db.collection(
                    COLLECTION_NAME
                );

                const options = createOptions(
                    {
                        contractPaymentId: contractPaymentId,
                        isSettled: isSettled
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