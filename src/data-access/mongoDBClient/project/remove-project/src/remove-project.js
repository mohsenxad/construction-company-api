module.exports = function buildRemoveProject
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
                throw new Error('buildRemoveProject must have getDb.');
            }

        if
        (
            !createOptions
        )
            {
                throw new Error('buildRemoveProject must have createOptions.');
            }

        if
        (
            !translateResponse
        )
            {
                throw new Error('buildRemoveProject must have translateResponse.');
            }
          
        const COLLECTION_NAME = 'projects';

        return async function removeProject
        (
            {
                projectId
            }
        )
            {
                if
                (
                    !projectId
                )
                    {
                        throw new Error('removeProject must have projectId.');
                    }

                const db = await getDb();
                
                const collection = db.collection(
                    COLLECTION_NAME
                );

                const options = createOptions(
                    {
                        projectId: projectId
                    }
                );

                const response = await collection.deleteOne(
                    options.filter
                )

                const result = translateResponse(
                    {
                        response: response
                    }
                );

                return result;
            }
    }