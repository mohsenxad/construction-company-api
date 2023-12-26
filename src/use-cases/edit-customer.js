module.exports = function buildEditCustomer
(
    {
        editCustomerDB,
        makeCustomer
    }
)
    {
        if
        (
            !editCustomerDB
        )
            {
                throw new Error('buildEditCustomer must have editCustomerDB.');
            }
            
        if
        (
            !makeCustomer
        )
            {
                throw new Error('buildEditCustomer must have makeCustomer.');
            }

        return async function editCustomer
        (
            {
                customerId,
                editCustomerInfo
            }
        )
            {
                if
                (
                    !customerId
                )
                    {
                        throw new Error('editCustomer must have customerId.');
                    }

                if
                (
                    !editCustomerInfo
                )
                    {
                        throw new Error('editCustomer must have editCustomerInfo.');
                    }

                const customer = await makeCustomer(editCustomerInfo);

                const editCustomerDBResult = await editCustomerDB(
                    {
                        customerId: customerId,
                        customer: customer
                    }
                );

                return editCustomerDBResult;

            }
    }