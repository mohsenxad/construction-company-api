module.exports = function buildAddSystemLog
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
                throw new Error('buildAddSystemLog must have getDb.');
            }

        if
        (
            !createOptions
        )
            {
                throw new Error('buildAddSystemLog must have createOptions.');
            }

        if
        (
            !translateResponse
        )
            {
                throw new Error('buildAddSystemLog must have translateResponse.');
            }

        const COLLECTION_NAME = 'systemLogs';

        return async function addSystemLog
        (
            {
                systemLog
            }
        )
            {
                if
                (
                    !systemLog
                )
                    {
                        throw new Error('addSystemLog must have systemLog.');
                    }

                const db = await getDb();

                const collection = db.collection(
                    COLLECTION_NAME
                );

                const options = createOptions(
                    {
                        systemLog: systemLog
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