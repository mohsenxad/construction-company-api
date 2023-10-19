module.exports = function buildAddUser
(
    {
        addUserDB,
        makeUser
    }
)
    {
        if
        (
            !addUserDB
        )
            {
                throw new Error('buildAddUser must have addUserDB.');
            }

        if
        (
            !makeUser
        )
            {
                throw new Error('buildAddUser must have makeUser.');
            }

        return async function addUser
        (
            {
                userInfo
            }
        )
            {
                if
                (
                    !userInfo
                )
                    {
                        throw new Error('addUser must have userInfo.');
                    }
                
                const user = await makeUser(
                    userInfo
                );

                const addUserDBResult = await addUserDB(
                    {
                        user: user
                    }
                );

                return addUserDBResult;
            }
    }