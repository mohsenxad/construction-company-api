module.exports = function buildAddProjectItemGallery
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
                throw new Error('buildAddProjectItemGallery must have getDb.');
            }

        if
        (
            !createOptions
        )
            {
                throw new Error('buildAddProjectItemGallery must have createOptions.');
            }

        if
        (
            !translateResponse
        )
            {
                throw new Error('buildAddProjectItemGallery must have translateResponse.');
            }

        const COLLECTION_NAME = 'projectItemGallery';

        return async function addProjectItemGallery
        (
            {
                projectItemGallery
            }
        )
            {
                if
                (
                    !projectItemGallery
                )
                    {
                        throw new Error('addProjectItemGallery must have projectItemGallery.');
                    }

                const db = await getDb();

                const collection = db.collection(
                    COLLECTION_NAME
                );

                const options = createOptions(
                    {
                        projectItemGallery: projectItemGallery
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