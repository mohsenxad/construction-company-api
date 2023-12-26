module.exports = function buildGetCustomerById
(
    {
        getCustomerByIdDB
    }
)
    {
        if
        (
            !getCustomerByIdDB
        )
            {
                throw new Error('buildGetCustomerById must have getCustomerByIdDB.');
            }

        return async function getCustomerById
        (
            {
                customerId
            }
        )
            {
                
                if
                (
                    !customerId
                )
                    {
                        throw new Error('getCustomerById must have customerId.');
                    }

                const getCustomerByIdDBResult = await getCustomerByIdDB(
                    {
                        customerId: customerId
                    }
                );

                return getCustomerByIdDBResult;
                    
            }
    }