module.exports = function buildGetUserById
(
    {
        getUserByIdDB
    }
)
    {
        if
        (
            !getUserByIdDB
        )
            {
                throw new Error('buildGetUserById must have getUserByIdDB.');
            }

        return async function getUserById
        (
            {
                userId
            }
        )
            {

                const getUserByIdDBResult = await getUserByIdDB(
                    {
                        userId: userId
                    }
                );

                return getUserByIdDBResult;

            }
    }