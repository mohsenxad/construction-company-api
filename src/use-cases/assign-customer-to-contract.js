module.exports = function buildAssignCustomerToContract
(
    {
        addContractCustomerDB,
        makeContractCustomer,
    }
)
    {
        if
        (
            !makeContractCustomer
        )
            {
                throw new Error('buildAssignCustomerToContract must have makeContractCustomer.');
            }

        if
        (
            !addContractCustomerDB
        )
            {
                throw new Error('buildAssignCustomerToContract must have addContractCustomerDB.');
            }
        return async function assignCustomerToContract
        (
            {
                contractCustomerInfo
            }
        )
            {
                const contractCustomer = makeContractCustomer(
                    contractCustomerInfo
                );

                const addContractCustomerDBResult = await addContractCustomerDB(
                    {
                        contractCustomer: contractCustomer
                    }
                )


                return addContractCustomerDBResult;
            }
    }