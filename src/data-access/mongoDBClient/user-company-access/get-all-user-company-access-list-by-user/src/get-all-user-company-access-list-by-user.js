module.exports = function buldGetAllUserCompanyAccessListByUser
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
                throw new Error('buldGetAllUserCompanyAccessListByUser must have getDb.');
            }

        if
        (
            !createOptions
        )
            {
                throw new Error('buldGetAllUserCompanyAccessListByUser must have createOptions.');
            }

        if
        (
            !translateResponse
        )
            {
                throw new Error('buldGetAllUserCompanyAccessListByUser must have translateResponse.');
            }

        const COLLECTION_NAME = 'userCompanyAccess';

        return async function getAllUserCompanyAccessListByUser
        (
            {
                userId
            }
        )
            {
                if
                (
                    !userId
                )
                    {
                        throw new Error('getAllUserCompanyAccessListByUser must have userId.');
                    }

                const db = await getDb();
                
                const collection = db.collection(
                    COLLECTION_NAME
                );

                
                const options = createOptions(
                    {
                        userId:userId
                    }
                );

                const response = await collection.aggregate(
                    options.pipeline
                )

                const result = translateResponse(
                    {
                        response: response
                    }
                );

                return result;
            }
    }