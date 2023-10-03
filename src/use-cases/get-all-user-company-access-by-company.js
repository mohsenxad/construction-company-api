module.exports = function buildGetAllUserCompanyAccessByCompany
(
    {
        getAllUserCompanyAccessByCompanyDB
    }
)
    {
        if
        (
            !getAllUserCompanyAccessByCompanyDB
        )
            {
                throw new Error('buildGetAllUserCompanyAccessByCompany must have getAllUserCompanyAccessByCompanyDB.');
            }
        return async function getAllUserCompanyAccessByCompany
        (
            {
                companyId
            }
        )
            {
                if
                (
                    !companyId
                )
                    {
                        throw new Error('getAllUserCompanyAccessByCompany must have companyId.');
                    }

                const getAllUserCompanyAccessByCompanyDBResult = await getAllUserCompanyAccessByCompanyDB(
                    {
                        companyId: companyId
                    }
                );

                return getAllUserCompanyAccessByCompanyDBResult;

            }
    }