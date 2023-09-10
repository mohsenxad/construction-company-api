module.exports = function buildGetAllCompanies
(
    {
        getAllCompanyDB,
    }
)
    {
        if
        (
            !getAllCompanyDB
        )
            {
                throw new Error('buildGetAllCompanies must have getAllCompanyDB.');
            }

        return async function getAllCompanies
        (
            {
                userId
            }
        )
            {

                const getAllCompanyDBResult = await getAllCompanyDB(
                    {
                        userId: userId
                    }
                );

                return getAllCompanyDBResult;

            }
    }