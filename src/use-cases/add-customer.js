module.exports = function buildAddCustomer
(
    {
        addCustomerDB,
        makeCustomer,
    }
)
    {
        if
        (
            !addCustomerDB
        )
            {
                throw new Error('buildAddCustomer must have addCustomerDB.');
            }

        if
        (
            !makeCustomer
        )
            {
                throw new Error('buildAddCustomer must have makeCustomer.');
            }

        return async function addCustomer
        (
            {
                customerInfo
            }
        )
            {
                if
                (
                    !customerInfo
                )
                    {
                        throw new Error('addCustomer must have customerInfo.');
                    }
                
                const customer = await makeCustomer(
                    customerInfo
                );

                const addCustomerDBResult = await addCustomerDB(
                    {
                        customer: customer
                    }
                );

                return addCustomerDBResult;
            }
    }