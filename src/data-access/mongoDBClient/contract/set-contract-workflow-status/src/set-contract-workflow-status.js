module.exports = function buildSetContractWorkflowStatus
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
                throw new Error('buildSetContractWorkflowStatus must have getDb.');
            }

        if
        (
            !createOptions
        )
            {
                throw new Error('buildSetContractWorkflowStatus must have createOptions.');
            }

        if
        (
            !translateResponse
        )
            {
                throw new Error('buildSetContractWorkflowStatus must have translateResponse.');
            }

        const COLLECTION_NAME = 'contracts';

        return async function setContractWorkflowStatus
        (
            {
                contractId,
                isDraft,
                isRequested,
                isAccepted,
                isConcluded,
                isFinished
            }
        )
            {
                const db = await getDb();
                
                const collection = db.collection(
                    COLLECTION_NAME
                );

                const options = createOptions(
                    {
                        contractId: contractId,
                        isDraft: isDraft,
                        isRequested: isRequested,
                        isAccepted: isAccepted,
                        isConcluded: isConcluded,
                        isFinished: isFinished
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