module.exports = function buildAddUserCompanyAccess
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
                throw new Error('buildAddUserCompanyAccess must have getDb.');
            }

        if
        (
            !createOptions
        )
            {
                throw new Error('buildAddUserCompanyAccess must have createOptions.');
            }

        if
        (
            !translateResponse
        )
            {
                throw new Error('buildAddUserCompanyAccess must have translateResponse.');
            }

        const COLLECTION_NAME = 'userCompanyAccess';
        return async function addUserCompanyAccess
        (
            {
                userCompanyAccess
            }
        )
            {
                if
                (
                    !userCompanyAccess
                )
                    {
                        throw new Error('addUserCompanyAccess must have userCompanyAccess.');
                    }

                const db = await getDb();

                const collection = db.collection(
                    COLLECTION_NAME
                );

                const options = createOptions(
                    {
                        userCompanyAccess: userCompanyAccess
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