module.exports = function buildGetAllContractByWorkflowStatus
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
                throw new Error('buildGetAllContractByWorkflowStatus must have getDb.');
            }

        if
        (
            !createOptions
        )
            {
                throw new Error('buildGetAllContractByWorkflowStatus must have createOptions.');
            }

        if
        (
            !translateResponse
        )
            {
                throw new Error('buildGetAllContractByWorkflowStatus must have translateResponse.');
            }

        const COLLECTION_NAME = 'contractsFullDetail';

        return async function getAllContractByWorkflowStatus
        (
            {
                companyId,
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
                        companyId: companyId,
                        isDraft: isDraft,
                        isRequested: isRequested,
                        isAccepted: isAccepted,
                        isConcluded: isConcluded,
                        isFinished: isFinished
                    }
                );

                const response = await collection.find(
                    options.filter
                );

                const result = translateResponse(
                    {
                        response: response
                    }
                );

                return result;
            }
    }