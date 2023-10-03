module.exports = function buildGetUserCompanyAccessById
(
    {
        getUserCompanyAccessByIdDB
    }
)
    {
        if
        (
            !getUserCompanyAccessByIdDB
        )
            {
                throw new Error('buildGetUserCompanyAccessById must have getUserCompanyAccessByIdDB.');
            }
        return async function getUserCompanyAccessById
        (
            {
                userCompanyAccessId
            }
        )
            {
                if
                (
                    !userCompanyAccessId
                )
                    {
                        throw new Error('getUserCompanyAccessById must have userCompanyAccessId.');
                    }

                const getUserCompanyAccessByIdDBResult = await getUserCompanyAccessByIdDB(
                    {
                        id: userCompanyAccessId
                    }
                );

                return getUserCompanyAccessByIdDBResult;
            }
    }