module.exports = function buildGetAllUsers
(
    {
        getAllUserDB,
    }
)
    {
        if
        (
            !getAllUserDB
        )
            {
                throw new Error('buildGetAllUsers must have getAllUserDB.');
            }

        return async function getAllUsers
        ()
            {
                const getAllUserDBResult = await getAllUserDB();

                return getAllUserDBResult;
            }
    }