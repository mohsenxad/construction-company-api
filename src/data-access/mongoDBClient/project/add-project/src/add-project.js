module.exports = function buildAddProject
(
    {
        getDb,
        createAddProjectOptions,
        translateAddProjectResponse
    }
)
    {
        if
        (
            !getDb
        )
            {
                throw new Error('buildAddProject must have getDb.');
            }

        if
        (
            !createAddProjectOptions
        )
            {
                throw new Error('buildAddProject must have createAddProjectOptions.');
            }

        if
        (
            !translateAddProjectResponse
        )
            {
                throw new Error('buildAddProject must have translateAddProjectResponse.');
            }

        const COLLECTION_NAME = 'projects';

        return async function addProject
        (
            {
                project
            }
        )
            {
                if
                (
                    !project
                )
                    {
                        throw new Error('addProject must have project.');
                    }

                const db = await getDb();

                const collection = db.collection(
                    COLLECTION_NAME
                );

                const options = createAddProjectOptions(
                    {
                        project: project
                    }
                );

                const response = await collection.insertOne(
                    options.document
                );

                const result = translateAddProjectResponse(
                    {
                        response: response
                    }
                );

                return result;
            }
    }