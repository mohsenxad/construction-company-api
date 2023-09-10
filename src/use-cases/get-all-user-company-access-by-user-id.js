module.exports = function buildGetAllUserCompanyAccessByUserId
(
    {
        getAllUserCompanyAccessByUserDB
    }
)
    {
        if
        (
            !getAllUserCompanyAccessByUserDB
        )
            {
                throw new Error('buildGetAllUserCompanyAccessByUserId must have getAllUserCompanyAccessByUserDB.');
            }
        return async function getAllUserCompanyAccessByUserId
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
                        throw new Error('getAllUserCompanyAccessByUserId must have userId.');
                    }

                const getAllUserCompanyAccessByUserDBResult = await getAllUserCompanyAccessByUserDB(
                    {
                        userId: userId
                    }
                );

                return getAllUserCompanyAccessByUserDBResult;
            }
    }