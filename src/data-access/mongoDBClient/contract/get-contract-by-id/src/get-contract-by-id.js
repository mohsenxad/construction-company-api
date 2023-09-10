module.exports = function buildGetContractById
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
                throw new Error('buildGetContractById must have getDb.');
            }

        if
        (
            !createOptions
        )
            {
                throw new Error('buildGetContractById must have createOptions.');
            }

        if
        (
            !translateResponse
        )
            {
                throw new Error('buildGetContractById must have translateResponse.');
            }

        const COLLECTION_NAME = 'contractsFullDetail';

        return async function getContractById
        (
            {
                contractId  
            }
        )
            {

                const db = await getDb();
                
                const collection = db.collection(
                    COLLECTION_NAME
                );

                const options = createOptions(
                    {
                        contractId: contractId
                    }
                );

                // const response = await collection.aggregate(
                //     options.pipeline
                // );

                const response = await collection.findOne(
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