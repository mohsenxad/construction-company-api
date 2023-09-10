module.exports = function buildGetAllContractByProject
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
                throw new Error('buildGetAllContractByProject must have getDb.');
            }

        if
        (
            !createOptions
        )
            {
                throw new Error('buildGetAllContractByProject must have createOptions.');
            }

        if
        (
            !translateResponse
        )
            {
                throw new Error('buildGetAllContractByProject must have translateResponse.');
            }

        const COLLECTION_NAME = 'contractsFullDetail';
        
        return async function getAllContractByProject
        (
            {
                projectId
            }
        )
            {
                const db = await getDb();
                
                const collection = db.collection(
                    COLLECTION_NAME
                );

                const options = createOptions(
                    {
                        projectId: projectId
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