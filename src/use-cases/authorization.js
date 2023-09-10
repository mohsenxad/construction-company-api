module.exports = function buildAuthorization
(
    {
        getUserCompanyAccessByIdAndUserIdDB
    }
)
    {
        if
        (
            !getUserCompanyAccessByIdAndUserIdDB
        )
            {
                throw new Error('buildAuthorization must have getUserCompanyAccessByIdAndUserIdDB.');
            }

        return async function authorization
        (
            {
                userCompanyAccessId,
                userId
            }
        )
            {

                if
                (
                    !userCompanyAccessId
                )
                    {
                        throw new Error('authorization must have userCompanyAccessId.');
                    }

                if
                (
                    !userId
                )
                    {
                        throw new Error('authorization must have userId.');
                    }
                    
                const getUserCompanyAccessByIdAndUserIdDBResult = await getUserCompanyAccessByIdAndUserIdDB(
                    {
                        id: userCompanyAccessId,
                        userId: userId
                    }
                );

                return getUserCompanyAccessByIdAndUserIdDBResult;

            }
    }