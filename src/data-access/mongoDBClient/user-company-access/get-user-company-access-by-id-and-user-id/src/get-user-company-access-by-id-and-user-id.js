module.exports = function buildGetUserCompanyAccessByIdAndUserId
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
                throw new Error('buildGetUserCompanyAccessByIdAndUserId must have getDb.');
            }

        if
        (
            !createOptions
        )
            {
                throw new Error('buildGetUserCompanyAccessByIdAndUserId must have createOptions.');
            }

        if
        (
            !translateResponse
        )
            {
                throw new Error('buildGetUserCompanyAccessByIdAndUserId must have translateResponse.');
            }

        const COLLECTION_NAME = 'userCompanyAccess';

        return async function getUserCompanyAccessByIdAndUserId
        (
            {
                id,
                userId
            }
        )
            {
                if
                (
                    !id
                )
                    {
                        throw new Error('getUserCompanyAccessByIdAndUserId must have id.');
                    }

                if
                (
                    !userId
                )
                    {
                        throw new Error('getUserCompanyAccessByIdAndUserId must have userId.');
                    }

                const db = await getDb();
                
                const collection = db.collection(
                    COLLECTION_NAME
                );

                
                const options = createOptions(
                    {
                        id: id,
                        userId:userId
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