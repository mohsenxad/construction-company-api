module.exports = function buildGetUserCompanyAccessById
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
                throw new Error('buildGetUserCompanyAccessById must have getDb.');
            }

        if
        (
            !createOptions
        )
            {
                throw new Error('buildGetUserCompanyAccessById must have createOptions.');
            }

        if
        (
            !translateResponse
        )
            {
                throw new Error('buildGetUserCompanyAccessById must have translateResponse.');
            }

        const COLLECTION_NAME = 'userCompanyAccess';

        return async function getUserCompanyAccessById
        (
            {
                id
            }
        )
            {
                if
                (
                    !id
                )
                    {
                        throw new Error('getUserCompanyAccessById must have id.');
                    }


                const db = await getDb();
                
                const collection = db.collection(
                    COLLECTION_NAME
                );

                
                const options = createOptions(
                    {
                        id: id
                    }
                );

                const response = await collection.aggregate(
                    options.pipeline
                )

                const result = await translateResponse(
                    {
                        response: response
                    }
                );

                return result;
            }
    }