module.exports = function buildAddUserCompanyAccess
(
    {
        addUserCompanyAccessDB,
        makeUserCompanyAccess,
    }
)
    {
        if
        (
            !makeUserCompanyAccess
        )
            {
                throw new Error('buildAddUserCompanyAccess must have makeUserCompanyAccess.');
            }

        if
        (
            !addUserCompanyAccessDB
        )
            {
                throw new Error('buildAddUserCompanyAccess must have addUserCompanyAccessDB.');
            }

            

        return async function addUserCompanyAccess
        (
            {
                userCompanyAccessInfo
            }
        )
            {
                if
                (
                    !userCompanyAccessInfo
                )
                    {
                        throw new Error('addUserCompanyAccess must have userCompanyAccessInfo.');
                    }
                else if
                (
                    !userCompanyAccessInfo.userId
                )
                    {
                        throw new Error('addUserCompanyAccess userCompanyAccessInfo must have userId.');
                    }
                else if
                (
                    !userCompanyAccessInfo.companyId
                )
                    {
                        throw new Error('addUserCompanyAccess userCompanyAccessInfo must have companyId.');
                    }
                


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