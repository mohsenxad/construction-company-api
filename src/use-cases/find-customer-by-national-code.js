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
                const natinalCodeNumber = parseInt(nationalCode);

                const getCustomerByNationalCodeDBResult = await getCustomerByNationalCodeDB(
                    {
                        natinalCodeNumber: natinalCodeNumber
                    }
                );

                return getCustomerByNationalCodeDBResult;
            }
    }