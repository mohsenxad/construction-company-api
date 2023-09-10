module.exports = function buildGetUserByUsernameAndPassword
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
                throw new Error('buildGetUserByUsernameAndPassword must have getDb.');
            }

        if
        (
            !createOptions
        )
            {
                throw new Error('buildGetUserByUsernameAndPassword must have createOptions.');
            }

        if
        (
            !translateResponse
        )
            {
                throw new Error('buildGetUserByUsernameAndPassword must have translateResponse.');
            }

        const COLLECTION_NAME = 'users';

        return async function getUserByUsernameAndPassword
        (
            {
                username,
                password
            }
        )
            {
                if
                (
                    !username
                )
                    {
                        throw new Error('getUserByUsernameAndPassword must have username.');
                    }

                if
                (
                    !password
                )
                    {
                        throw new Error('getUserByUsernameAndPassword must have password.');
                    }

                const db = await getDb();
                
                const collection = db.collection(
                    COLLECTION_NAME
                );

                const options = createOptions(
                    {
                        username: username,
                        password: password
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