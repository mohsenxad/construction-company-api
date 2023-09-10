module.exports = function buildSetContractProjectAndProjectItem
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
                throw new Error('buildSetContractProjectAndProjectItem must have getDb.');
            }

        if
        (
            !createOptions
        )
            {
                throw new Error('buildSetContractProjectAndProjectItem must have createOptions.');
            }

        if
        (
            !translateResponse
        )
            {
                throw new Error('buildSetContractProjectAndProjectItem must have translateResponse.');
            }

        const COLLECTION_NAME = 'contracts';

        return async function setContractProjectAndProjectItem
        (
            {
                contractId,
                projectId,
                projectItemId,
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
                        projectId: projectId,
                        projectItemId: projectItemId,
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