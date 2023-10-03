module.exports = function buildAddUser
(
    {
        addUserDB,
        makeUser,
        addUserCompanyAccessDB,
        makeUserCompanyAccess,
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

        if
        (
            !makeUserCompanyAccess
        )
            {
                throw new Error('buildAddUser must have makeUserCompanyAccess.');
            }

        if
        (
            !addUserCompanyAccessDB
        )
            {
                throw new Error('buildAddUser must have addUserCompanyAccessDB.');
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

                const userId = addUserDBResult;
                const companyId = userInfo.companyId;

                const userCompanyAccessInfo = {
                    userId: userId,
                    companyId: companyId
                };

                const userCompanyAccess = makeUserCompanyAccess(
                    userCompanyAccessInfo
                );

                const addUserCompanyAccessDBResult = await addUserCompanyAccessDB(
                    {
                        userCompanyAccess: userCompanyAccess
                    }
                );



                return addUserCompanyAccessDBResult;
            }
    }