module.exports = function buildGetProjectById
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
                throw new Error('buildGetProjectById must have getDb.');
            }

        if
        (
            !createOptions
        )
            {
                throw new Error('buildGetProjectById must have createOptions.');
            }

        if
        (
            !translateResponse
        )
            {
                throw new Error('buildGetProjectById must have translateResponse.');
            }

        const COLLECTION_NAME = 'projects';

        return async function getProjectById
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