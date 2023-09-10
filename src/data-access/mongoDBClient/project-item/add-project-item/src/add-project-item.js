module.exports = function buildAddProjectItem
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
                throw new Error('buildAddProjectItem must have getDb.');
            }

        if
        (
            !createOptions
        )
            {
                throw new Error('buildAddProjectItem must have createOptions.');
            }

        if
        (
            !translateResponse
        )
            {
                throw new Error('buildAddProjectItem must have translateResponse.');
            }

        const COLLECTION_NAME = 'projectItems';

        return async function project
        (
            {
                projectItem
            }
        )
            {
                if
                (
                    !projectItem
                )
                    {
                        throw new Error('project must have projectItem.');
                    }

                const db = await getDb();

                const collection = db.collection(
                    COLLECTION_NAME
                );

                const options = createOptions(
                    {
                        projectItem: projectItem
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