module.exports = function buildFindCustomerByNationalCode
(
    {
        getCustomerByNationalCodeDB
    }
)
    {
        if
        (
            !getCustomerByNationalCodeDB
        )
            {
                throw new Error('buildFindCustomerByNationalCode must have getCustomerByNationalCodeDB.');
            }

        return async function findCustomerByNationalCode
        (
            {
                nationalCode
            }
        )
            {
                const nationalCodeNumber = parseInt(nationalCode);

                const getCustomerByNationalCodeDBResult = await getCustomerByNationalCodeDB(
                    {
                        nationalCodeNumber: nationalCodeNumber
                    }
                );

                return getCustomerByNationalCodeDBResult;
            }
    }