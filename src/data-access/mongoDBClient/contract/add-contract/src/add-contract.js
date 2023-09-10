module.exports = function buildAddContract
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
                throw new Error('buildAddContract must have getDb.');
            }

        if
        (
            !createOptions
        )
            {
                throw new Error('buildAddContract must have createOptions.');
            }

        if
        (
            !translateResponse
        )
            {
                throw new Error('buildAddContract must have translateResponse.');
            }

        const COLLECTION_NAME = 'contracts';

        return async function addContract
        (
            {
                contract
            }
        )
            {
                if
                (
                    !contract
                )
                    {
                        throw new Error('addContract must have customer.');
                    }

                const db = await getDb();

                const collection = db.collection(
                    COLLECTION_NAME
                );

                const options = createOptions(
                    {
                        contract: contract
                    }
                );

                const response = await collection.insertOne(
                    options.document
                );

                const result = translateResponse(
                    {
                        response: response
                    }
                );

                return result;
            }
    }